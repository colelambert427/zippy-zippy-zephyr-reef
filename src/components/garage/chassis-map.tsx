import type { Setup } from "@/lib/setups/types";
import { fmt } from "@/lib/utils";

export function ChassisMap({ setup }: { setup: Setup }) {
  const { corners: k, chassis: c, tires: t } = setup;
  return (
    <div className="relative min-w-0 overflow-hidden rounded-lg bg-elevated p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Corner map
        </p>
        <p className="font-mono text-xs text-muted-foreground tabular-nums">
          {c.totalWeight} lb · {fmt(c.crossPct)}% cross
        </p>
      </div>
      <div className="grid grid-cols-2 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <CornerCard id="LF" weight={k.lf.weight} psi={t.lf} camber={k.lf.camber} spring={k.lf.spring} />
        <div className="hidden flex-col items-center gap-2 py-2 md:flex">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Nose</span>
          <svg viewBox="0 0 72 120" className="h-28 w-16 text-foreground" aria-hidden>
            <rect x="18" y="8" width="36" height="18" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.35" />
            <rect x="12" y="28" width="48" height="72" rx="6" fill="none" stroke="currentColor" strokeOpacity="0.55" />
            <rect x="22" y="102" width="28" height="10" rx="2" fill="none" stroke="currentColor" strokeOpacity="0.35" />
            <line x1="12" y1="64" x2="60" y2="64" stroke="currentColor" strokeOpacity="0.2" />
          </svg>
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Tail</span>
        </div>
        <CornerCard id="RF" weight={k.rf.weight} psi={t.rf} camber={k.rf.camber} spring={k.rf.spring} hot />
        <CornerCard id="LR" weight={k.lr.weight} psi={t.lr} camber={k.lr.camber} spring={k.lr.spring} />
        <div className="hidden md:block" />
        <CornerCard id="RR" weight={k.rr.weight} psi={t.rr} camber={k.rr.camber} spring={k.rr.spring} />
      </div>
    </div>
  );
}

function CornerCard({
  id,
  weight,
  psi,
  camber,
  spring,
  hot,
}: {
  id: string;
  weight: number;
  psi: number;
  camber: number;
  spring: number;
  hot?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-md bg-card p-3 shadow-border">
      <div className="flex items-center justify-between gap-1">
        <span className="font-display text-sm font-semibold tracking-wide">{id}</span>
        {hot ? <span className="text-xs tracking-wide text-warn uppercase">Wear</span> : null}
      </div>
      <p className="mt-1 font-mono text-lg tabular-nums">{weight}</p>
      <p className="text-xs text-muted-foreground">lb</p>
      <dl className="mt-2 space-y-0.5 font-mono text-xs text-muted-foreground tabular-nums">
        <div className="flex justify-between gap-2">
          <dt>psi</dt>
          <dd className="text-foreground">{fmt(psi)}</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt>cam</dt>
          <dd className="text-foreground">{fmt(camber, 2)}°</dd>
        </div>
        <div className="flex justify-between gap-2">
          <dt>spr</dt>
          <dd className="text-foreground">{spring}</dd>
        </div>
      </dl>
    </div>
  );
}
