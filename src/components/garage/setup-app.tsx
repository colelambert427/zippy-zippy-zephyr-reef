import { useMemo, useState, type ReactNode } from "react";
import {
  Check,
  Copy,
  Download,
  FileCode,
  Gauge,
  Info,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChassisMap } from "@/components/garage/chassis-map";
import { Section, ValueRow } from "@/components/garage/value-row";
import { buildSetup } from "@/lib/setups/build";
import { TRACKS } from "@/lib/setups/tracks";
import { setupFilename, toHtmlExport, toSto } from "@/lib/setups/export";
import type { BalanceKind, SessionKind } from "@/lib/setups/types";
import { downloadFile, fmt } from "@/lib/utils";

export function SetupApp() {
  const [trackId, setTrackId] = useState("charlotte");
  const [session, setSession] = useState<SessionKind>("race");
  const [balance, setBalance] = useState<BalanceKind>("neutral");
  const [crossDelta, setCrossDelta] = useState(0);
  const [tapeDelta, setTapeDelta] = useState(0);
  const [biasDelta, setBiasDelta] = useState(0);
  const [copied, setCopied] = useState(false);

  const setup = useMemo(
    () => buildSetup({ trackId, session, balance, crossDelta, tapeDelta, biasDelta }),
    [trackId, session, balance, crossDelta, tapeDelta, biasDelta],
  );
  const track = TRACKS.find((t) => t.id === trackId)!;
  const sto = useMemo(() => toSto(setup), [setup]);

  function downloadSto() {
    downloadFile(setupFilename(setup), sto, "application/octet-stream");
    toast.success("Downloaded " + setupFilename(setup));
  }

  function downloadHtml() {
    downloadFile(`${setup.filename}.html`, toHtmlExport(setup), "text/html");
    toast.success("Downloaded HTML garage export");
  }

  async function copySheet() {
    try {
      await navigator.clipboard.writeText(sto);
      setCopied(true);
      toast.success("Garage card copied");
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Clipboard blocked — use Download .sto");
    }
  }

  const toe = (n: number) => `${n > 0 ? "+" : ""}${fmt(n, 2)} in`;

  return (
    <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-10">
      <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-xs tracking-widest text-muted-foreground uppercase">
            Open Class · 80 laps
          </p>
          <h1 className="mt-2 font-display text-4xl leading-none font-semibold tracking-tight text-balance sm:text-5xl">
            Hauler
          </h1>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground text-pretty">
            Chevrolet Silverado garage for iRacing Class C Open. Built around an 80-lap run —
            tire save, one-stop window, pigtail front springs.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={downloadSto} className="min-h-11">
            <Download />
            Download .sto
          </Button>
          <Button variant="outline" onClick={copySheet} className="min-h-11">
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy card"}
          </Button>
          <Button variant="ghost" onClick={downloadHtml} className="min-h-11">
            <FileCode />
            HTML
          </Button>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Session</CardTitle>
          <CardDescription>
            Drop the .sto on your machine as a punch sheet. iRacing encrypts native setups — enter
            these values, then Save As in the garage.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="track">Track</Label>
            <Select value={trackId} onValueChange={setTrackId}>
              <SelectTrigger id="track" aria-label="Track">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TRACKS.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {track.lengthMi} mi · {track.banking} · gear {track.gear}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Session</Label>
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-secondary p-1">
              <ToggleChip active={session === "race"} onClick={() => setSession("race")}>
                Race 80
              </ToggleChip>
              <ToggleChip active={session === "qualify"} onClick={() => setSession("qualify")}>
                Qualify
              </ToggleChip>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Balance</Label>
            <div className="grid grid-cols-3 gap-1 rounded-xl bg-secondary p-1">
              {(["looser", "neutral", "tighter"] as const).map((b) => (
                <ToggleChip key={b} active={balance === b} onClick={() => setBalance(b)}>
                  {b}
                </ToggleChip>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="flex flex-col gap-6">
          <ChassisMap setup={setup} />

          <Card>
            <CardHeader>
              <CardTitle>Fine tune</CardTitle>
              <CardDescription>Small clicks after you load the baseline. One change, then 6–8 laps.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <Tune
                label="Cross weight"
                value={`${fmt(setup.chassis.crossPct)} %`}
                onReset={() => setCrossDelta(0)}
              >
                <Slider
                  min={-1.2}
                  max={1.2}
                  step={0.1}
                  value={[crossDelta]}
                  onValueChange={(v) => setCrossDelta(v[0] ?? 0)}
                  aria-label="Cross weight offset"
                />
              </Tune>
              <Tune
                label="Tape"
                value={`${setup.chassis.tapePct} %`}
                onReset={() => setTapeDelta(0)}
              >
                <Slider
                  min={-8}
                  max={12}
                  step={1}
                  value={[tapeDelta]}
                  onValueChange={(v) => setTapeDelta(v[0] ?? 0)}
                  aria-label="Tape offset"
                />
              </Tune>
              <Tune
                label="Brake bias"
                value={`${fmt(setup.chassis.brakeBias)} % F`}
                onReset={() => setBiasDelta(0)}
              >
                <Slider
                  min={-3}
                  max={3}
                  step={0.5}
                  value={[biasDelta]}
                  onValueChange={(v) => setBiasDelta(v[0] ?? 0)}
                  aria-label="Brake bias offset"
                />
              </Tune>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex-row items-start justify-between gap-3">
            <div>
              <CardTitle>Pit window</CardTitle>
              <CardDescription>80 laps · Open Class cautions on</CardDescription>
            </div>
            <Badge variant="ok">1 stop</Badge>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <PitBar setupLaps={setup.laps} window={setup.strategy.pitWindow} green={setup.strategy.greenStintLaps} />
            <ValueRow label="Fuel start" value={`${fmt(setup.chassis.fuelGal)} gal`} />
            <ValueRow label="Burn" value={`${setup.strategy.fuelPerLap} gal / lap`} />
            <ValueRow label="Green range" value={`${setup.strategy.greenStintLaps} laps`} />
            <ValueRow
              label="Pit window"
              value={`L${setup.strategy.pitWindow[0]}–${setup.strategy.pitWindow[1]}`}
            />
            <p className="text-sm text-muted-foreground text-pretty">{setup.strategy.fuelCall}</p>
            <p className="text-sm text-muted-foreground text-pretty">{setup.strategy.tires}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tires">
        <TabsList>
          <TabsTrigger value="tires">Tires</TabsTrigger>
          <TabsTrigger value="front">Front</TabsTrigger>
          <TabsTrigger value="corners">Corners</TabsTrigger>
          <TabsTrigger value="rear">Rear</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <TabsContent value="tires">
          <Card>
            <CardContent className="grid gap-6 sm:grid-cols-2">
              <Section title="Cold pressures">
                <ValueRow label="Left front" value={`${fmt(setup.tires.lf)} psi`} />
                <ValueRow label="Right front" value={`${fmt(setup.tires.rf)} psi`} hint="Long-run limiter" />
                <ValueRow label="Left rear" value={`${fmt(setup.tires.lr)} psi`} />
                <ValueRow label="Right rear" value={`${fmt(setup.tires.rr)} psi`} />
              </Section>
              <Section title="Targets">
                <ValueRow label="RF camber" value={`${fmt(setup.corners.rf.camber, 2)}°`} hint="Race is milder than qual to live 40-lap stints" />
                <ValueRow label="Steering" value={`${setup.chassis.steeringRatio}:1`} hint="12:1 on 1.5s saves the nose" />
                <ValueRow label="Radiator" value={setup.chassis.radiator} />
                <ValueRow label="Tape" value={`${setup.chassis.tapePct} %`} />
              </Section>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="front">
          <Card>
            <CardContent className="grid gap-6 sm:grid-cols-2">
              <Section title="Platform">
                <ValueRow label="Nose weight" value={`${fmt(setup.chassis.noseWeight)} %`} />
                <ValueRow label="Cross weight" value={`${fmt(setup.chassis.crossPct)} %`} hint="RF + LR" />
                <ValueRow label="Left side" value={`${fmt(setup.chassis.leftPct)} %`} />
                <ValueRow label="Ballast forward" value={`${fmt(setup.chassis.ballastForward)} in`} />
                <ValueRow label="Brake bias" value={`${fmt(setup.chassis.brakeBias)} % F`} />
                <ValueRow label="Brake pressure" value={`${setup.chassis.brakePressure} %`} />
              </Section>
              <Section title="ARB & aero">
                <ValueRow label="ARB diameter" value={`${fmt(setup.chassis.arbDiameter, 3)} in`} hint="Keep the nose flat; large bar for bind" />
                <ValueRow label="ARB arms" value={`${setup.chassis.arbArmLeft} / ${setup.chassis.arbArmRight} in`} />
                <ValueRow label="ARB preload" value={`${setup.chassis.arbPreload} lbf`} />
                <ValueRow label="Tape" value={`${setup.chassis.tapePct} %`} />
                <ValueRow label="Radiator" value={setup.chassis.radiator} />
                <ValueRow label="Fuel" value={`${fmt(setup.chassis.fuelGal)} gal`} />
              </Section>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="corners">
          <Card>
            <CardContent className="grid gap-8 md:grid-cols-2">
              {(["lf", "rf", "lr", "rr"] as const).map((id) => {
                const k = setup.corners[id];
                const title = { lf: "Left front", rf: "Right front", lr: "Left rear", rr: "Right rear" }[id];
                return (
                  <Section key={id} title={title}>
                    <ValueRow label="Corner weight" value={`${k.weight} lb`} />
                    <ValueRow label="Ride height" value={`${fmt(k.rideHeight, 2)} in`} />
                    <ValueRow label="Spring perch" value={`${fmt(k.perch, 2)} in`} />
                    <ValueRow label="Spring rate" value={`${k.spring} lb/in`} />
                    {k.springAngle != null ? (
                      <ValueRow label="Spring angle" value={`${k.springAngle}°`} hint="Pigtail transition" />
                    ) : null}
                    <ValueRow label="Bump / rebound" value={`${k.bump} / ${k.rebound} lb`} />
                    <ValueRow label="Camber" value={`${fmt(k.camber, 2)}°`} />
                    {k.caster != null ? <ValueRow label="Caster" value={`${fmt(k.caster, 2)}°`} /> : null}
                    <ValueRow label="Toe-in" value={toe(k.toe)} />
                  </Section>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rear">
          <Card>
            <CardContent className="grid gap-6 sm:grid-cols-2">
              <Section title="Axle">
                <ValueRow label="Gear ratio" value={setup.chassis.gear} hint="Track-limited in the garage" />
                <ValueRow label="Track bar left" value={`${fmt(setup.chassis.trackBarLeft, 2)} in`} />
                <ValueRow label="Track bar right" value={`${fmt(setup.chassis.trackBarRight, 2)} in`} hint="Raise to free" />
                <ValueRow label="Truck arm L" value={`${fmt(setup.chassis.truckArmLeft, 2)} in`} />
                <ValueRow label="Truck arm R" value={`${fmt(setup.chassis.truckArmRight, 2)} in`} />
                <ValueRow label="Rear ride LR / RR" value={`${fmt(setup.corners.lr.rideHeight, 2)} / ${fmt(setup.corners.rr.rideHeight, 2)} in`} hint="Keep 3.9–4.3 in" />
              </Section>
              <Section title="In-car">
                <ValueRow label="Steering ratio" value={`${setup.chassis.steeringRatio}:1`} />
                <ValueRow label="Steering offset" value={`${fmt(setup.chassis.steeringOffset)}°`} />
                <ValueRow label="Brake bias" value={`${fmt(setup.chassis.brakeBias)} % F`} />
                <ValueRow label="Weight jacker" value="0.0" hint="Start zero; click in if it frees late" />
              </Section>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notes">
          <Card>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold tracking-wide uppercase">
                  <Info className="size-4" /> Garage
                </h3>
                <ol className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>1. Open a Test session in the Silverado at this track.</li>
                  <li>2. Garage → punch the values on Tires / Chassis.</li>
                  <li>
                    3. Save As{" "}
                    <span className="font-mono text-foreground">{setup.filename}</span>
                  </li>
                  <li>
                    4. File lives in{" "}
                    <span className="font-mono text-foreground">setups\{setup.carPath}\</span>
                  </li>
                </ol>
                <Separator className="my-4" />
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {setup.notes.map((n) => (
                    <li key={n} className="text-pretty">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold tracking-wide uppercase">
                  <Gauge className="size-4" /> Driving
                </h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {setup.driving.map((n) => (
                    <li key={n} className="text-pretty">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <footer className="flex flex-col gap-2 border-t border-border pt-6 pb-8 text-xs text-muted-foreground">
        <p className="font-mono tabular-nums">{setupFilename(setup)}</p>
        <p className="text-pretty">
          Native iRacing .sto files are encrypted. This download is a garage card — enter it, then
          Save As in the sim so the truck actually loads it.
        </p>
      </footer>
    </div>
  );
}

function ToggleChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "min-h-10 rounded-lg bg-elevated px-2 text-xs font-medium tracking-wide text-foreground capitalize shadow-border"
          : "min-h-10 rounded-lg px-2 text-xs font-medium tracking-wide text-muted-foreground capitalize"
      }
    >
      {children}
    </button>
  );
}

function Tune({
  label,
  value,
  onReset,
  children,
}: {
  label: string;
  value: string;
  onReset: () => void;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <Label>{label}</Label>
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm tabular-nums">{value}</span>
          <button type="button" onClick={onReset} className="text-xs text-muted-foreground hover:text-foreground">
            Reset
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}

function PitBar({
  setupLaps,
  window,
  green,
}: {
  setupLaps: number;
  window: [number, number];
  green: number;
}) {
  const w0 = (window[0] / setupLaps) * 100;
  const w1 = (window[1] / setupLaps) * 100;
  const g = Math.min(100, (green / setupLaps) * 100);
  return (
    <div>
      <div className="relative h-3 overflow-hidden rounded-full bg-secondary">
        <div className="absolute inset-y-0 left-0 bg-ok/40" style={{ width: `${g}%` }} />
        <div
          className="absolute inset-y-0 bg-primary/80"
          style={{ left: `${w0}%`, width: `${Math.max(4, w1 - w0)}%` }}
        />
      </div>
      <div className="mt-1 flex justify-between font-mono text-xs text-muted-foreground tabular-nums">
        <span>L1</span>
        <span>
          stop {window[0]}–{window[1]}
        </span>
        <span>L{setupLaps}</span>
      </div>
    </div>
  );
}
