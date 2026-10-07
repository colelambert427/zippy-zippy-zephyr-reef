import type { BalanceKind, Corner, SessionKind, Setup, TrackProfile } from "./types";
import { TRACKS, DEFAULT_TRACK_ID } from "./tracks";
import { cornerWeights } from "./weights";

const CAR = "NASCAR Truck Chevrolet Silverado";
const CAR_PATH = "trucks silverado2019";
const LAPS = 80;
const TANK = 18;

const KIND_SPRING: Record<TrackProfile["kind"], { lf: number; rf: number; lr: number; rr: number }> = {
  intermediate: { lf: 6250, rf: 7000, lr: 200, rr: 250 },
  speedway: { lf: 5500, rf: 6250, lr: 175, rr: 225 },
  short: { lf: 5000, rf: 5500, lr: 225, rr: 275 },
  superspeedway: { lf: 4500, rf: 5000, lr: 150, rr: 175 },
  road: { lf: 4000, rf: 4000, lr: 250, rr: 250 },
};

export type SetupOptions = {
  trackId: string;
  session: SessionKind;
  balance: BalanceKind;
  crossDelta?: number;
  tapeDelta?: number;
  biasDelta?: number;
};

export function getTrack(id: string): TrackProfile {
  return TRACKS.find((t) => t.id === id) ?? TRACKS.find((t) => t.id === DEFAULT_TRACK_ID)!;
}

export function buildSetup(opts: SetupOptions): Setup {
  const track = getTrack(opts.trackId);
  const race = opts.session === "race";
  const bal = opts.balance;
  const springs = KIND_SPRING[track.kind];

  let leftPct = track.kind === "road" ? 50.0 : 52.4;
  let rearPct = track.kind === "superspeedway" ? 51.2 : 50.2;
  let crossPct = track.kind === "road" ? 50.0 : 56.8;

  if (track.id === "kansas") crossPct += 0.4;
  if (track.id === "texas" || track.id === "homestead") crossPct -= 0.3;
  if (track.id === "atlanta") crossPct += 0.2;
  if (track.kind === "speedway") crossPct -= 0.4;

  if (bal === "tighter") crossPct += 0.6;
  if (bal === "looser") crossPct -= 0.7;
  if (!race) crossPct -= 0.3;

  crossPct += opts.crossDelta ?? 0;

  const total = race ? 3628 : 3542;
  const w = cornerWeights({ total, leftPct, rearPct, crossPct });

  const tapeBase =
    track.kind === "superspeedway" ? 22 : track.kind === "speedway" ? 14 : track.kind === "short" ? 4 : 10;
  const tapePct = Math.max(0, Math.min(50, (race ? tapeBase : tapeBase + 8) + (opts.tapeDelta ?? 0)));

  const brakeBias = clamp(
    (race ? 63.5 : 65.0) +
      (track.kind === "speedway" ? -1.0 : 0) +
      (bal === "tighter" ? 0.5 : 0) +
      (bal === "looser" ? -0.4 : 0) +
      (opts.biasDelta ?? 0),
    54,
    72,
  );

  const steeringRatio = track.kind === "short" || track.kind === "road" ? 10 : 12;

  const pressures = buildPressures(track, race, bal);
  const corners = buildCorners(track, race, bal, springs, w);

  const fuelGal = race ? TANK : 3.5;
  const greenStint = Math.floor((TANK - 0.8) / track.fuelPerLap);
  const pitFrom = Math.max(28, Math.round(LAPS * 0.42));
  const pitTo = Math.min(greenStint - 2, Math.round(LAPS * 0.58));

  const arbDiameter = track.kind === "short" ? 1.625 : track.kind === "speedway" ? 2.125 : 2.0;
  const trackBar = buildTrackBar(track, race, bal);

  const filename = [
    "GROK_26S4_Silverado",
    slug(track.name),
    race ? "R80" : "Q",
    cap(bal),
    "v1",
  ].join("_");

  return {
    id: `${track.id}-${opts.session}-${bal}`,
    filename,
    car: CAR,
    carPath: CAR_PATH,
    trackId: track.id,
    trackName: `${track.name} — ${track.layout}`,
    trackKind: track.kind,
    session: opts.session,
    balance: bal,
    laps: LAPS,
    tires: pressures,
    chassis: {
      totalWeight: total,
      leftPct: round1(leftPct),
      rearPct: round1(rearPct),
      crossPct: round1(crossPct),
      noseWeight: round1(100 - rearPct),
      ballastForward: track.kind === "speedway" ? 1.5 : 0.5,
      steeringRatio,
      brakeBias: round1(brakeBias),
      brakePressure: 100,
      arbDiameter,
      arbArmLeft: 14,
      arbArmRight: 14,
      arbPreload: bal === "tighter" ? 150 : bal === "looser" ? -50 : 50,
      tapePct,
      radiator: race ? "Race" : "Qual",
      fuelGal,
      gear: track.gear,
      steeringOffset: 0,
      trackBarLeft: trackBar.left,
      trackBarRight: trackBar.right,
      truckArmLeft: 0,
      truckArmRight: track.kind === "short" ? -0.25 : 0,
      thirdLink: 0,
    },
    corners,
    strategy: {
      tankGal: TANK,
      fuelPerLap: track.fuelPerLap,
      greenStintLaps: greenStint,
      pitWindow: [pitFrom, pitTo],
      tires: race
        ? "Four fresh at the stop. Rights are the limiter on 1.5s — do not stretch a green 80."
        : "One set. Two flying laps. Do not save the tire.",
      fuelCall: race
        ? `Start ${TANK.toFixed(1)} gal. Green range ~${greenStint} laps. Splash + 4 at the window if the run stays green.`
        : "3.5 gal — enough for out + two flyers with a gallon in reserve.",
      stages: race
        ? "Open Class 80 is typically one caution-heavy heat. Plan one stop. If a yellow falls lap 50+, stay out on scuffed rights only if temps are in the window."
        : "No stop.",
    },
    notes: buildNotes(track, race, bal),
    driving: buildDriving(track, race, bal),
  };
}

function buildPressures(track: TrackProfile, race: boolean, bal: BalanceKind) {
  const hot = track.kind === "short";
  let lf = hot ? 11.5 : 13.0;
  let lr = hot ? 12.0 : 13.5;
  let rf = hot ? 24.0 : 30.5;
  let rr = hot ? 22.5 : 28.0;
  if (track.kind === "speedway") {
    lf += 0.5;
    lr += 0.5;
    rf += 1.0;
    rr += 1.0;
  }
  if (track.kind === "superspeedway") {
    rf = 46;
    rr = 44;
    lf = 30;
    lr = 30;
  }
  if (!race) {
    lf -= 0.5;
    lr -= 0.5;
    rf -= 1.5;
    rr -= 1.0;
  }
  if (bal === "tighter") rf -= 0.5;
  if (bal === "looser") {
    rf += 0.5;
    rr -= 0.5;
  }
  return {
    lf: round1(lf),
    rf: round1(rf),
    lr: round1(lr),
    rr: round1(rr),
  };
}

function buildCorners(
  track: TrackProfile,
  race: boolean,
  bal: BalanceKind,
  springs: { lf: number; rf: number; lr: number; rr: number },
  w: { lf: number; rf: number; lr: number; rr: number },
): Record<"lf" | "rf" | "lr" | "rr", Corner> {
  const rrSpring = springs.rr + (bal === "looser" ? 25 : 0) + (bal === "tighter" ? -25 : 0);
  const lrSpring = springs.lr + (bal === "tighter" ? 25 : 0) + (bal === "looser" ? -25 : 0);
  const rfSpring = springs.rf + (track.kind === "intermediate" && race ? 0 : 0);

  const lfCamber = race ? -3.4 : -3.6;
  const rfCamber = race ? -2.8 : -3.2;
  const lrCamber = -1.6;
  const rrCamber = -1.8;

  const lfAngle = track.kind === "speedway" ? 58 : 62;
  const rfAngle = track.kind === "speedway" ? 64 : 68;

  return {
    lf: {
      weight: w.lf,
      rideHeight: 4.82,
      perch: 6.12,
      spring: springs.lf,
      springAngle: lfAngle,
      bump: 450,
      rebound: 650,
      camber: lfCamber,
      caster: 6.8,
      toe: -0.04,
    },
    rf: {
      weight: w.rf,
      rideHeight: 4.86,
      perch: 6.28,
      spring: rfSpring,
      springAngle: rfAngle,
      bump: 500,
      rebound: 720,
      camber: rfCamber,
      caster: 7.8,
      toe: 0.08,
    },
    lr: {
      weight: w.lr,
      rideHeight: 4.05,
      perch: 5.4,
      spring: lrSpring,
      springAngle: null,
      bump: 320,
      rebound: 480,
      camber: lrCamber,
      caster: null,
      toe: 0.06,
    },
    rr: {
      weight: w.rr,
      rideHeight: 4.18,
      perch: 5.55,
      spring: rrSpring,
      springAngle: null,
      bump: 360,
      rebound: 520,
      camber: rrCamber,
      caster: null,
      toe: 0.1,
    },
  };
}

function buildTrackBar(track: TrackProfile, race: boolean, bal: BalanceKind) {
  let left = 8.75;
  let right = 10.5;
  if (track.kind === "short") {
    left = 7.5;
    right = 9.25;
  }
  if (track.kind === "speedway") {
    left = 9.25;
    right = 11.0;
  }
  if (bal === "looser") {
    left += 0.25;
    right += 0.25;
  }
  if (bal === "tighter") {
    left -= 0.2;
    right -= 0.2;
  }
  if (!race) {
    left += 0.15;
    right += 0.15;
  }
  return { left: round2(left), right: round2(right) };
}

function buildNotes(track: TrackProfile, race: boolean, bal: BalanceKind) {
  const lines = [
    `${CAR} · Open Class · ${race ? "80-lap race" : "qualifying"} · ${cap(bal)} balance.`,
    `Folder: Documents\\iRacing\\setups\\${CAR_PATH}\\`,
    track.notes,
    "Pigtail front springs: garage ride height barely moves when you change rate. Set splitter with Spring Angle first, then perch offsets. Target ~0.25 in CFSRrideheight on the long run.",
    "Rear platform: 3.9–4.3 in. Stiffer RR frees the truck; stiffer LR tightens it.",
    "Raising the track bar frees rotation. Dropping it plants the rear on throttle.",
  ];
  if (race) {
    lines.push(
      "80-lap Open: start a hair tight. The truck frees as the RF falls off. Do not chase the first 8 laps.",
    );
  } else {
    lines.push("Qualifying: two flyers. More camber, less pressure, Qual radiator, ignore the water temp.");
  }
  if (bal === "looser") lines.push("Looser variant: less cross, higher track bar, stiffer RR. Drive it in with patience.");
  if (bal === "tighter") lines.push("Tighter variant: more wedge, lower bar, softer RR. Good in traffic and on worn tires.");
  return lines;
}

function buildDriving(track: TrackProfile, race: boolean, _bal: BalanceKind) {
  return [
    "Roll speed in, not dump. Trucks punish a stabbed brake more than Cup cars.",
    track.kind === "short"
      ? "Rotate on throttle, not on the wheel. 10:1 steering is busy — quiet hands."
      : "12:1 box. Open the wheel early and use the whole groove so the RF lives.",
    "If it’s tight center: +0.10–0.25 in track bar or −0.2–0.5% cross. One change, then 6–8 laps.",
    "If it’s loose off: −track bar or +cross. Do not add rear rebound as the first move.",
    race
      ? "Long run: if the RF is 15+ °F hotter on the outside, add 0.5 psi or take 0.2° camber out."
      : "Build heat on the out-lap. Second flyer is the one that counts.",
  ];
}

function slug(name: string) {
  return name.replace(/[^a-zA-Z0-9]+/g, "").slice(0, 18);
}
function cap(s: string) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
function round1(n: number) {
  return Math.round(n * 10) / 10;
}
function round2(n: number) {
  return Math.round(n * 100) / 100;
}
function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}
