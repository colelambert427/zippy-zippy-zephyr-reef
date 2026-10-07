/** Oval crossweight is (RF + LR) / total. */
export function cornerWeights(opts: {
  total: number;
  leftPct: number;
  rearPct: number;
  crossPct: number;
}) {
  const { total, leftPct, rearPct, crossPct } = opts;
  const lrPct = (leftPct + rearPct + crossPct - 100) / 2;
  const lfPct = leftPct - lrPct;
  const rfPct = crossPct - lrPct;
  const rrPct = rearPct - lrPct;
  const round = (p: number) => Math.round(total * (p / 100));
  let lf = round(lfPct);
  let rf = round(rfPct);
  let lr = round(lrPct);
  let rr = round(rrPct);
  const drift = total - (lf + rf + lr + rr);
  lr += drift;
  return { lf, rf, lr, rr };
}
