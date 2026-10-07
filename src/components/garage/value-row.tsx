import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ValueRow({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  value: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-baseline justify-between gap-3 border-b border-border py-2.5 last:border-0", className)}>
      <div className="min-w-0">
        <p className="text-sm text-foreground">{label}</p>
        {hint ? <p className="text-xs text-muted-foreground text-pretty">{hint}</p> : null}
      </div>
      <p className="shrink-0 font-mono text-sm tabular-nums">{value}</p>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-1 font-display text-sm font-semibold tracking-wide text-muted-foreground uppercase">
        {title}
      </h3>
      <div>{children}</div>
    </section>
  );
}
