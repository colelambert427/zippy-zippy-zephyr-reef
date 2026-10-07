import type { Setup } from "./types";
import { fmt } from "@/lib/utils";

export function setupFilename(setup: Setup) {
  return `${setup.filename}.sto`;
}

export function toSto(setup: Setup): string {
  const c = setup.chassis;
  const t = setup.tires;
  const k = setup.corners;
  const sign = (n: number, unit: string) => `${n > 0 ? "+" : ""}${fmt(n, 2)} ${unit}`;
  const lines = [
    "; =============================================================================",
    ";  HAULER garage card — NASCAR Truck Chevrolet Silverado (trucks silverado2019)",
    ";  Open Class · 80-lap race setup",
    ";",
    ";  iRacing writes native .sto files as encrypted binaries (magic 0x0003).",
    ";  The sim will not load a card it did not hash. Use this sheet in the garage,",
    ";  then Garage → Save As to produce a loadable .sto in:",
    `;      Documents\\iRacing\\setups\\${setup.carPath}\\`,
    ";",
    `;  File: ${setup.filename}.sto`,
    `;  Built for: ${setup.trackName}`,
    `;  Session: ${setup.session === "race" ? "Race 80 laps" : "Qualifying"} · ${setup.balance}`,
    "; =============================================================================",
    "",
    "[Header]",
    `Car=${setup.car}`,
    `CarPath=${setup.carPath}`,
    `Track=${setup.trackName}`,
    `TrackId=${setup.trackId}`,
    `Series=NASCAR iRacing Class C Open`,
    `Session=${setup.session === "race" ? "Race" : "Qualify"}`,
    `Laps=${setup.laps}`,
    `Balance=${setup.balance}`,
    `Season=2026 S4`,
    `Builder=Hauler`,
    `Version=1`,
    "",
    "[Tires]",
    `ColdPressureLF=${fmt(t.lf)} psi`,
    `ColdPressureRF=${fmt(t.rf)} psi`,
    `ColdPressureLR=${fmt(t.lr)} psi`,
    `ColdPressureRR=${fmt(t.rr)} psi`,
    "",
    "[ChassisFront]",
    `NoseWeight=${fmt(c.noseWeight)} %`,
    `CrossWeight=${fmt(c.crossPct)} %`,
    `LeftSideWeight=${fmt(c.leftPct)} %`,
    `RearWeight=${fmt(c.rearPct)} %`,
    `BallastForward=${fmt(c.ballastForward)} in`,
    `SteeringRatio=${c.steeringRatio}:1`,
    `SteeringOffset=${fmt(c.steeringOffset)} deg`,
    `BrakeBias=${fmt(c.brakeBias)} % front`,
    `BrakePressure=${c.brakePressure} %`,
    `FrontARBDiameter=${fmt(c.arbDiameter, 3)} in`,
    `FrontARBArmLeft=${c.arbArmLeft} in`,
    `FrontARBArmRight=${c.arbArmRight} in`,
    `FrontARBPreload=${c.arbPreload} lbf`,
    `Tape=${c.tapePct} %`,
    `Radiator=${c.radiator}`,
    `FuelLevel=${fmt(c.fuelGal)} gal`,
    "",
    "[LeftFront]",
    `CornerWeight=${k.lf.weight} lb`,
    `RideHeight=${fmt(k.lf.rideHeight, 2)} in`,
    `SpringPerchOffset=${fmt(k.lf.perch, 2)} in`,
    `SpringRate=${k.lf.spring} lb/in`,
    `SpringAngle=${k.lf.springAngle} deg`,
    `BumpStiffness=${k.lf.bump} lb`,
    `ReboundStiffness=${k.lf.rebound} lb`,
    `Camber=${fmt(k.lf.camber, 2)} deg`,
    `Caster=${fmt(k.lf.caster ?? 0, 2)} deg`,
    `ToeIn=${sign(k.lf.toe, "in")}`,
    "",
    "[RightFront]",
    `CornerWeight=${k.rf.weight} lb`,
    `RideHeight=${fmt(k.rf.rideHeight, 2)} in`,
    `SpringPerchOffset=${fmt(k.rf.perch, 2)} in`,
    `SpringRate=${k.rf.spring} lb/in`,
    `SpringAngle=${k.rf.springAngle} deg`,
    `BumpStiffness=${k.rf.bump} lb`,
    `ReboundStiffness=${k.rf.rebound} lb`,
    `Camber=${fmt(k.rf.camber, 2)} deg`,
    `Caster=${fmt(k.rf.caster ?? 0, 2)} deg`,
    `ToeIn=${sign(k.rf.toe, "in")}`,
    "",
    "[LeftRear]",
    `CornerWeight=${k.lr.weight} lb`,
    `RideHeight=${fmt(k.lr.rideHeight, 2)} in`,
    `SpringPerchOffset=${fmt(k.lr.perch, 2)} in`,
    `SpringRate=${k.lr.spring} lb/in`,
    `BumpStiffness=${k.lr.bump} lb`,
    `ReboundStiffness=${k.lr.rebound} lb`,
    `Camber=${fmt(k.lr.camber, 2)} deg`,
    `ToeIn=${sign(k.lr.toe, "in")}`,
    "",
    "[RightRear]",
    `CornerWeight=${k.rr.weight} lb`,
    `RideHeight=${fmt(k.rr.rideHeight, 2)} in`,
    `SpringPerchOffset=${fmt(k.rr.perch, 2)} in`,
    `SpringRate=${k.rr.spring} lb/in`,
    `BumpStiffness=${k.rr.bump} lb`,
    `ReboundStiffness=${k.rr.rebound} lb`,
    `Camber=${fmt(k.rr.camber, 2)} deg`,
    `ToeIn=${sign(k.rr.toe, "in")}`,
    "",
    "[ChassisRear]",
    `RearGearRatio=${c.gear}`,
    `TrackBarHeightLeft=${fmt(c.trackBarLeft, 2)} in`,
    `TrackBarHeightRight=${fmt(c.trackBarRight, 2)} in`,
    `TruckArmMountLeft=${fmt(c.truckArmLeft, 2)} in`,
    `TruckArmMountRight=${fmt(c.truckArmRight, 2)} in`,
    `ThirdLink=${fmt(c.thirdLink, 2)} in`,
    `FuelLevel=${fmt(c.fuelGal)} gal`,
    "",
    "[Strategy]",
    `Tank=${setup.strategy.tankGal} gal`,
    `FuelPerLap=${setup.strategy.fuelPerLap} gal`,
    `GreenStint=${setup.strategy.greenStintLaps} laps`,
    `PitWindow=${setup.strategy.pitWindow[0]}-${setup.strategy.pitWindow[1]}`,
    `Tires=${setup.strategy.tires}`,
    `FuelCall=${setup.strategy.fuelCall}`,
    `Stages=${setup.strategy.stages}`,
    "",
    "[Notes]",
    ...setup.notes.map((n) => `; ${n}`),
    "",
    "[Driving]",
    ...setup.driving.map((n) => `; ${n}`),
    "",
  ];
  return lines.join("\r\n");
}

export function toHtmlExport(setup: Setup): string {
  const c = setup.chassis;
  const t = setup.tires;
  const k = setup.corners;
  const row = (label: string, value: string) =>
    `<tr><td>${esc(label)}</td><td>${esc(value)}</td></tr>`;
  const toe = (n: number) => `${n > 0 ? "+" : ""}${fmt(n, 2)} in`;
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>${esc(setup.filename)}</title>
<style>
  body{font:14px/1.45 system-ui,sans-serif;background:#0a0b0c;color:#e8eaed;margin:24px}
  h1{font-size:22px;font-weight:600;margin:0 0 4px}
  h2{font-size:13px;letter-spacing:.12em;text-transform:uppercase;margin:28px 0 8px;color:#8b919a}
  .sub{color:#8b919a;margin:0 0 20px}
  table{border-collapse:collapse;width:100%;max-width:720px}
  td{padding:6px 10px;border-bottom:1px solid #23262b}
  td:first-child{color:#8b919a;width:46%}
  td:last-child{font-variant-numeric:tabular-nums}
</style></head><body>
<h1>${esc(setup.car)}</h1>
<p class="sub">${esc(setup.trackName)} · ${setup.session === "race" ? "Race 80 laps" : "Qualifying"} · ${esc(setup.balance)} · Open Class</p>
<h2>Tires</h2>
<table>
${row("LF cold", `${fmt(t.lf)} psi`)}
${row("RF cold", `${fmt(t.rf)} psi`)}
${row("LR cold", `${fmt(t.lr)} psi`)}
${row("RR cold", `${fmt(t.rr)} psi`)}
</table>
<h2>Front</h2>
<table>
${row("Nose weight", `${fmt(c.noseWeight)} %`)}
${row("Cross weight", `${fmt(c.crossPct)} %`)}
${row("Left side", `${fmt(c.leftPct)} %`)}
${row("Steering ratio", `${c.steeringRatio}:1`)}
${row("Brake bias", `${fmt(c.brakeBias)} % front`)}
${row("ARB diameter", `${fmt(c.arbDiameter, 3)} in`)}
${row("ARB arms", `${c.arbArmLeft} / ${c.arbArmRight} in`)}
${row("ARB preload", `${c.arbPreload} lbf`)}
${row("Tape", `${c.tapePct} %`)}
${row("Radiator", c.radiator)}
${row("Fuel", `${fmt(c.fuelGal)} gal`)}
</table>
<h2>Left Front</h2>
<table>
${row("Corner weight", `${k.lf.weight} lb`)}
${row("Ride height", `${fmt(k.lf.rideHeight, 2)} in`)}
${row("Spring perch", `${fmt(k.lf.perch, 2)} in`)}
${row("Spring rate", `${k.lf.spring} lb/in`)}
${row("Spring angle", `${k.lf.springAngle} deg`)}
${row("Bump / rebound", `${k.lf.bump} / ${k.lf.rebound} lb`)}
${row("Camber", `${fmt(k.lf.camber, 2)} deg`)}
${row("Caster", `${fmt(k.lf.caster ?? 0, 2)} deg`)}
${row("Toe-in", toe(k.lf.toe))}
</table>
<h2>Right Front</h2>
<table>
${row("Corner weight", `${k.rf.weight} lb`)}
${row("Ride height", `${fmt(k.rf.rideHeight, 2)} in`)}
${row("Spring perch", `${fmt(k.rf.perch, 2)} in`)}
${row("Spring rate", `${k.rf.spring} lb/in`)}
${row("Spring angle", `${k.rf.springAngle} deg`)}
${row("Bump / rebound", `${k.rf.bump} / ${k.rf.rebound} lb`)}
${row("Camber", `${fmt(k.rf.camber, 2)} deg`)}
${row("Caster", `${fmt(k.rf.caster ?? 0, 2)} deg`)}
${row("Toe-in", toe(k.rf.toe))}
</table>
<h2>Left Rear</h2>
<table>
${row("Corner weight", `${k.lr.weight} lb`)}
${row("Ride height", `${fmt(k.lr.rideHeight, 2)} in`)}
${row("Spring perch", `${fmt(k.lr.perch, 2)} in`)}
${row("Spring rate", `${k.lr.spring} lb/in`)}
${row("Bump / rebound", `${k.lr.bump} / ${k.lr.rebound} lb`)}
${row("Camber", `${fmt(k.lr.camber, 2)} deg`)}
${row("Toe-in", toe(k.lr.toe))}
</table>
<h2>Right Rear</h2>
<table>
${row("Corner weight", `${k.rr.weight} lb`)}
${row("Ride height", `${fmt(k.rr.rideHeight, 2)} in`)}
${row("Spring perch", `${fmt(k.rr.perch, 2)} in`)}
${row("Spring rate", `${k.rr.spring} lb/in`)}
${row("Bump / rebound", `${k.rr.bump} / ${k.rr.rebound} lb`)}
${row("Camber", `${fmt(k.rr.camber, 2)} deg`)}
${row("Toe-in", toe(k.rr.toe))}
</table>
<h2>Rear</h2>
<table>
${row("Gear", c.gear)}
${row("Track bar L / R", `${fmt(c.trackBarLeft, 2)} / ${fmt(c.trackBarRight, 2)} in`)}
${row("Truck arm L / R", `${fmt(c.truckArmLeft, 2)} / ${fmt(c.truckArmRight, 2)} in`)}
</table>
</body></html>`;
}

function esc(s: string) {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  return s.replace(/&/g, amp).replace(/</g, lt).replace(/>/g, gt).replace(/"/g, quot);
}
