export type SessionKind = "race" | "qualify";
export type BalanceKind = "neutral" | "looser" | "tighter";
export type TrackKind =
  | "intermediate"
  | "speedway"
  | "short"
  | "superspeedway"
  | "road";

export type CornerId = "lf" | "rf" | "lr" | "rr";

export type Corner = {
  weight: number;
  rideHeight: number;
  perch: number;
  spring: number;
  springAngle: number | null;
  bump: number;
  rebound: number;
  camber: number;
  caster: number | null;
  toe: number;
};

export type Setup = {
  id: string;
  filename: string;
  car: string;
  carPath: string;
  trackId: string;
  trackName: string;
  trackKind: TrackKind;
  session: SessionKind;
  balance: BalanceKind;
  laps: number;
  notes: string[];
  driving: string[];
  strategy: Strategy;
  tires: {
    lf: number;
    rf: number;
    lr: number;
    rr: number;
  };
  chassis: {
    totalWeight: number;
    leftPct: number;
    rearPct: number;
    crossPct: number;
    noseWeight: number;
    ballastForward: number;
    steeringRatio: number;
    brakeBias: number;
    brakePressure: number;
    arbDiameter: number;
    arbArmLeft: number;
    arbArmRight: number;
    arbPreload: number;
    tapePct: number;
    radiator: "Race" | "Qual";
    fuelGal: number;
    gear: string;
    steeringOffset: number;
    trackBarLeft: number;
    trackBarRight: number;
    truckArmLeft: number;
    truckArmRight: number;
    thirdLink: number;
  };
  corners: Record<CornerId, Corner>;
};

export type Strategy = {
  tankGal: number;
  fuelPerLap: number;
  greenStintLaps: number;
  pitWindow: [number, number];
  tires: string;
  fuelCall: string;
  stages: string;
};

export type TrackProfile = {
  id: string;
  name: string;
  layout: string;
  kind: TrackKind;
  lengthMi: number;
  banking: string;
  typicalLaps: number;
  gear: string;
  fuelPerLap: number;
  notes: string;
};
