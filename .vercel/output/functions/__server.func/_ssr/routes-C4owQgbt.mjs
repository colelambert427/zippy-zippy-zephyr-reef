import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Download, c as Check, i as FileCode, n as Info, o as Copy, r as Gauge, s as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as SelectItemIndicator, c as SelectTrigger$1, i as SelectItem$1, l as SelectValue$1, n as SelectContent$1, o as SelectItemText, r as SelectIcon, s as SelectPortal, t as Select$1, u as SelectViewport } from "../_libs/@radix-ui/react-select+[...].mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4owQgbt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function fmt(n, digits = 1) {
	return n.toFixed(digits);
}
function downloadFile(filename, content, mime = "text/plain") {
	const blob = new Blob([content], { type: mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-(--motion-quick) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-elevated",
			outline: "border border-border bg-transparent text-foreground hover:bg-elevated",
			ghost: "text-muted-foreground hover:text-foreground hover:bg-elevated",
			destructive: "bg-danger text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-secondary text-secondary-foreground",
		accent: "bg-primary text-primary-foreground",
		outline: "border border-border text-muted-foreground",
		ok: "bg-ok/15 text-ok",
		warn: "bg-warn/15 text-warn"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl bg-card text-card-foreground shadow-border", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col gap-1 p-5 pb-0", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	ref,
	className: cn("font-display text-lg font-semibold tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-sm text-muted-foreground text-pretty", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-5", className),
	...props
}));
CardContent.displayName = "CardContent";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted-foreground uppercase", className),
	...props
}));
Label.displayName = "Label";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-border bg-elevated px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted-foreground" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
	ref,
	position,
	className: cn("relative z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-border bg-card text-foreground shadow-border", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
		className: "p-1",
		children
	})
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex min-h-10 cursor-pointer select-none items-center rounded-lg py-2 pr-8 pl-3 text-sm outline-none data-[highlighted]:bg-elevated data-[state=checked]:text-foreground", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, {
		className: "absolute right-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
	})]
}));
SelectItem.displayName = SelectItem$1.displayName;
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none items-center select-none", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full bg-primary shadow-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" })]
}));
Slider.displayName = Slider$1.displayName;
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("flex w-full gap-1 overflow-x-auto rounded-xl bg-secondary p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex min-h-10 flex-1 items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium tracking-wide uppercase transition-colors duration-(--motion-quick) data-[state=active]:bg-elevated data-[state=active]:text-foreground data-[state=active]:shadow-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-4 focus-visible:outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var Separator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "separator",
	className: cn("h-px w-full bg-border", className),
	...props
}));
Separator.displayName = "Separator";
function ChassisMap({ setup }) {
	const { corners: k, chassis: c, tires: t } = setup;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-lg bg-elevated p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
				children: "Corner map"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-muted-foreground tabular-nums",
				children: [
					c.totalWeight,
					" lb · ",
					fmt(c.crossPct),
					"% cross"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[1fr_auto_1fr] items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerCard, {
					id: "LF",
					weight: k.lf.weight,
					psi: t.lf,
					camber: k.lf.camber,
					spring: k.lf.spring
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "Nose"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 72 120",
							className: "h-28 w-16 text-foreground",
							"aria-hidden": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "18",
									y: "8",
									width: "36",
									height: "18",
									rx: "6",
									fill: "none",
									stroke: "currentColor",
									strokeOpacity: "0.35"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "12",
									y: "28",
									width: "48",
									height: "72",
									rx: "6",
									fill: "none",
									stroke: "currentColor",
									strokeOpacity: "0.55"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "22",
									y: "102",
									width: "28",
									height: "10",
									rx: "2",
									fill: "none",
									stroke: "currentColor",
									strokeOpacity: "0.35"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "12",
									y1: "64",
									x2: "60",
									y2: "64",
									stroke: "currentColor",
									strokeOpacity: "0.2"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tracking-widest text-muted-foreground uppercase",
							children: "Tail"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerCard, {
					id: "RF",
					weight: k.rf.weight,
					psi: t.rf,
					camber: k.rf.camber,
					spring: k.rf.spring,
					hot: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerCard, {
					id: "LR",
					weight: k.lr.weight,
					psi: t.lr,
					camber: k.lr.camber,
					spring: k.lr.spring
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerCard, {
					id: "RR",
					weight: k.rr.weight,
					psi: t.rr,
					camber: k.rr.camber,
					spring: k.rr.spring
				})
			]
		})]
	});
}
function CornerCard({ id, weight, psi, camber, spring, hot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-card p-3 shadow-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-semibold tracking-wide",
					children: id
				}), hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs tracking-wide text-warn uppercase",
					children: "Wear"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-lg tabular-nums",
				children: weight
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "lb"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-2 space-y-0.5 font-mono text-xs text-muted-foreground tabular-nums",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "psi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-foreground",
							children: fmt(psi)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "cam" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "text-foreground",
							children: [fmt(camber, 2), "°"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "spr" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-foreground",
							children: spring
						})]
					})
				]
			})
		]
	});
}
function ValueRow({ label, value, hint, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-baseline justify-between gap-3 border-b border-border py-2.5 last:border-0", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground",
				children: label
			}), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground text-pretty",
				children: hint
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "shrink-0 font-mono text-sm tabular-nums",
			children: value
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-1 font-display text-sm font-semibold tracking-wide text-muted-foreground uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })] });
}
var TRACKS = [
	{
		id: "charlotte",
		name: "Charlotte Motor Speedway",
		layout: "Oval",
		kind: "intermediate",
		lengthMi: 1.5,
		banking: "24° in 1–2, 20° in 3–4",
		typicalLaps: 80,
		gear: "4.00",
		fuelPerLap: .215,
		notes: "High-speed 1.5. Long-run RF is the race. Keep the splitter at ~0.25 in and don’t over-tape a green run."
	},
	{
		id: "kansas",
		name: "Kansas Speedway",
		layout: "Oval",
		kind: "intermediate",
		lengthMi: 1.5,
		banking: "17–20°",
		typicalLaps: 80,
		gear: "3.89",
		fuelPerLap: .208,
		notes: "Wide, abrasive. Build a touch more cross than Charlotte so the truck doesn’t free up too early on worn rubber."
	},
	{
		id: "vegas",
		name: "Las Vegas Motor Speedway",
		layout: "Oval",
		kind: "intermediate",
		lengthMi: 1.5,
		banking: "20°",
		typicalLaps: 80,
		gear: "3.89",
		fuelPerLap: .21,
		notes: "Smooth and fast. Slightly stiffer front rates and a bit more tape than Kansas. Watch water temp in traffic."
	},
	{
		id: "texas",
		name: "Texas Motor Speedway",
		layout: "Oval",
		kind: "intermediate",
		lengthMi: 1.5,
		banking: "20–24°",
		typicalLaps: 80,
		gear: "4.00",
		fuelPerLap: .218,
		notes: "Progressive banking. Truck wants to push in the center — a hair more track-bar and less cross than Vegas."
	},
	{
		id: "atlanta",
		name: "EchoPark Speedway",
		layout: "Oval",
		kind: "intermediate",
		lengthMi: 1.54,
		banking: "28°",
		typicalLaps: 80,
		gear: "3.42",
		fuelPerLap: .232,
		notes: "Superspeedway-style pack on an intermediate body. Lower gear, more tape caution, and a stable long-run wedge."
	},
	{
		id: "homestead",
		name: "Homestead-Miami Speedway",
		layout: "Oval",
		kind: "intermediate",
		lengthMi: 1.5,
		banking: "18–20°",
		typicalLaps: 80,
		gear: "3.89",
		fuelPerLap: .205,
		notes: "Variable banking. Give the driver a lane — slightly looser mid-corner than Charlotte so you can move up."
	},
	{
		id: "michigan",
		name: "Michigan International Speedway",
		layout: "Oval",
		kind: "speedway",
		lengthMi: 2,
		banking: "18°",
		typicalLaps: 80,
		gear: "3.42",
		fuelPerLap: .248,
		notes: "Two-mile draft track. Softer wheel rates, more rear ride, and a 12:1 steering box to save the nose."
	},
	{
		id: "pocono",
		name: "Pocono Raceway",
		layout: "Tri-oval",
		kind: "speedway",
		lengthMi: 2.5,
		banking: "14° / 8° / 6°",
		typicalLaps: 80,
		gear: "3.42",
		fuelPerLap: .255,
		notes: "Three distinct corners. Compromise camber and a taller rear for the long straights. Brake bias a touch rearward."
	}
];
/** Oval crossweight is (RF + LR) / total. */
function cornerWeights(opts) {
	const { total, leftPct, rearPct, crossPct } = opts;
	const lrPct = (leftPct + rearPct + crossPct - 100) / 2;
	const lfPct = leftPct - lrPct;
	const rfPct = crossPct - lrPct;
	const rrPct = rearPct - lrPct;
	const round = (p) => Math.round(total * (p / 100));
	let lf = round(lfPct);
	let rf = round(rfPct);
	let lr = round(lrPct);
	let rr = round(rrPct);
	const drift = total - (lf + rf + lr + rr);
	lr += drift;
	return {
		lf,
		rf,
		lr,
		rr
	};
}
var CAR = "NASCAR Truck Chevrolet Silverado";
var CAR_PATH = "trucks silverado2019";
var LAPS = 80;
var TANK = 18;
var KIND_SPRING = {
	intermediate: {
		lf: 6250,
		rf: 7e3,
		lr: 200,
		rr: 250
	},
	speedway: {
		lf: 5500,
		rf: 6250,
		lr: 175,
		rr: 225
	},
	short: {
		lf: 5e3,
		rf: 5500,
		lr: 225,
		rr: 275
	},
	superspeedway: {
		lf: 4500,
		rf: 5e3,
		lr: 150,
		rr: 175
	},
	road: {
		lf: 4e3,
		rf: 4e3,
		lr: 250,
		rr: 250
	}
};
function getTrack(id) {
	return TRACKS.find((t) => t.id === id) ?? TRACKS.find((t) => t.id === "charlotte");
}
function buildSetup(opts) {
	const track = getTrack(opts.trackId);
	const race = opts.session === "race";
	const bal = opts.balance;
	const springs = KIND_SPRING[track.kind];
	let leftPct = track.kind === "road" ? 50 : 52.4;
	let rearPct = track.kind === "superspeedway" ? 51.2 : 50.2;
	let crossPct = track.kind === "road" ? 50 : 56.8;
	if (track.id === "kansas") crossPct += .4;
	if (track.id === "texas" || track.id === "homestead") crossPct -= .3;
	if (track.id === "atlanta") crossPct += .2;
	if (track.kind === "speedway") crossPct -= .4;
	if (bal === "tighter") crossPct += .6;
	if (bal === "looser") crossPct -= .7;
	if (!race) crossPct -= .3;
	crossPct += opts.crossDelta ?? 0;
	const total = race ? 3628 : 3542;
	const w = cornerWeights({
		total,
		leftPct,
		rearPct,
		crossPct
	});
	const tapeBase = track.kind === "superspeedway" ? 22 : track.kind === "speedway" ? 14 : track.kind === "short" ? 4 : 10;
	const tapePct = Math.max(0, Math.min(50, (race ? tapeBase : tapeBase + 8) + (opts.tapeDelta ?? 0)));
	const brakeBias = clamp((race ? 63.5 : 65) + (track.kind === "speedway" ? -1 : 0) + (bal === "tighter" ? .5 : 0) + (bal === "looser" ? -.4 : 0) + (opts.biasDelta ?? 0), 54, 72);
	const steeringRatio = track.kind === "short" || track.kind === "road" ? 10 : 12;
	const pressures = buildPressures(track, race, bal);
	const corners = buildCorners(track, race, bal, springs, w);
	const fuelGal = race ? TANK : 3.5;
	const greenStint = Math.floor(17.2 / track.fuelPerLap);
	const pitFrom = Math.max(28, Math.round(LAPS * .42));
	const pitTo = Math.min(greenStint - 2, Math.round(LAPS * .58));
	const arbDiameter = track.kind === "short" ? 1.625 : track.kind === "speedway" ? 2.125 : 2;
	const trackBar = buildTrackBar(track, race, bal);
	const filename = [
		"GROK_26S4_Silverado",
		slug(track.name),
		race ? "R80" : "Q",
		cap(bal),
		"v1"
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
			ballastForward: track.kind === "speedway" ? 1.5 : .5,
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
			truckArmRight: track.kind === "short" ? -.25 : 0,
			thirdLink: 0
		},
		corners,
		strategy: {
			tankGal: TANK,
			fuelPerLap: track.fuelPerLap,
			greenStintLaps: greenStint,
			pitWindow: [pitFrom, pitTo],
			tires: race ? "Four fresh at the stop. Rights are the limiter on 1.5s — do not stretch a green 80." : "One set. Two flying laps. Do not save the tire.",
			fuelCall: race ? `Start ${TANK.toFixed(1)} gal. Green range ~${greenStint} laps. Splash + 4 at the window if the run stays green.` : "3.5 gal — enough for out + two flyers with a gallon in reserve.",
			stages: race ? "Open Class 80 is typically one caution-heavy heat. Plan one stop. If a yellow falls lap 50+, stay out on scuffed rights only if temps are in the window." : "No stop."
		},
		notes: buildNotes(track, race, bal),
		driving: buildDriving(track, race, bal)
	};
}
function buildPressures(track, race, bal) {
	const hot = track.kind === "short";
	let lf = hot ? 11.5 : 13;
	let lr = hot ? 12 : 13.5;
	let rf = hot ? 24 : 30.5;
	let rr = hot ? 22.5 : 28;
	if (track.kind === "speedway") {
		lf += .5;
		lr += .5;
		rf += 1;
		rr += 1;
	}
	if (track.kind === "superspeedway") {
		rf = 46;
		rr = 44;
		lf = 30;
		lr = 30;
	}
	if (!race) {
		lf -= .5;
		lr -= .5;
		rf -= 1.5;
		rr -= 1;
	}
	if (bal === "tighter") rf -= .5;
	if (bal === "looser") {
		rf += .5;
		rr -= .5;
	}
	return {
		lf: round1(lf),
		rf: round1(rf),
		lr: round1(lr),
		rr: round1(rr)
	};
}
function buildCorners(track, race, bal, springs, w) {
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
			toe: -.04
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
			toe: .08
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
			toe: .06
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
			toe: .1
		}
	};
}
function buildTrackBar(track, race, bal) {
	let left = 8.75;
	let right = 10.5;
	if (track.kind === "short") {
		left = 7.5;
		right = 9.25;
	}
	if (track.kind === "speedway") {
		left = 9.25;
		right = 11;
	}
	if (bal === "looser") {
		left += .25;
		right += .25;
	}
	if (bal === "tighter") {
		left -= .2;
		right -= .2;
	}
	if (!race) {
		left += .15;
		right += .15;
	}
	return {
		left: round2(left),
		right: round2(right)
	};
}
function buildNotes(track, race, bal) {
	const lines = [
		`${CAR} · Open Class · ${race ? "80-lap race" : "qualifying"} · ${cap(bal)} balance.`,
		`Folder: Documents\\iRacing\\setups\\${CAR_PATH}\\`,
		track.notes,
		"Pigtail front springs: garage ride height barely moves when you change rate. Set splitter with Spring Angle first, then perch offsets. Target ~0.25 in CFSRrideheight on the long run.",
		"Rear platform: 3.9–4.3 in. Stiffer RR frees the truck; stiffer LR tightens it.",
		"Raising the track bar frees rotation. Dropping it plants the rear on throttle."
	];
	if (race) lines.push("80-lap Open: start a hair tight. The truck frees as the RF falls off. Do not chase the first 8 laps.");
	else lines.push("Qualifying: two flyers. More camber, less pressure, Qual radiator, ignore the water temp.");
	if (bal === "looser") lines.push("Looser variant: less cross, higher track bar, stiffer RR. Drive it in with patience.");
	if (bal === "tighter") lines.push("Tighter variant: more wedge, lower bar, softer RR. Good in traffic and on worn tires.");
	return lines;
}
function buildDriving(track, race, _bal) {
	return [
		"Roll speed in, not dump. Trucks punish a stabbed brake more than Cup cars.",
		track.kind === "short" ? "Rotate on throttle, not on the wheel. 10:1 steering is busy — quiet hands." : "12:1 box. Open the wheel early and use the whole groove so the RF lives.",
		"If it’s tight center: +0.10–0.25 in track bar or −0.2–0.5% cross. One change, then 6–8 laps.",
		"If it’s loose off: −track bar or +cross. Do not add rear rebound as the first move.",
		race ? "Long run: if the RF is 15+ °F hotter on the outside, add 0.5 psi or take 0.2° camber out." : "Build heat on the out-lap. Second flyer is the one that counts."
	];
}
function slug(name) {
	return name.replace(/[^a-zA-Z0-9]+/g, "").slice(0, 18);
}
function cap(s) {
	return s.slice(0, 1).toUpperCase() + s.slice(1);
}
function round1(n) {
	return Math.round(n * 10) / 10;
}
function round2(n) {
	return Math.round(n * 100) / 100;
}
function clamp(n, a, b) {
	return Math.min(b, Math.max(a, n));
}
function setupFilename(setup) {
	return `${setup.filename}.sto`;
}
function toSto(setup) {
	const c = setup.chassis;
	const t = setup.tires;
	const k = setup.corners;
	const sign = (n, unit) => `${n > 0 ? "+" : ""}${fmt(n, 2)} ${unit}`;
	return [
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
		""
	].join("\r\n");
}
function toHtmlExport(setup) {
	const c = setup.chassis;
	const t = setup.tires;
	const k = setup.corners;
	const row = (label, value) => `<tr><td>${esc(label)}</td><td>${esc(value)}</td></tr>`;
	const toe = (n) => `${n > 0 ? "+" : ""}${fmt(n, 2)} in`;
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
function esc(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function SetupApp() {
	const [trackId, setTrackId] = (0, import_react.useState)("charlotte");
	const [session, setSession] = (0, import_react.useState)("race");
	const [balance, setBalance] = (0, import_react.useState)("neutral");
	const [crossDelta, setCrossDelta] = (0, import_react.useState)(0);
	const [tapeDelta, setTapeDelta] = (0, import_react.useState)(0);
	const [biasDelta, setBiasDelta] = (0, import_react.useState)(0);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const setup = (0, import_react.useMemo)(() => buildSetup({
		trackId,
		session,
		balance,
		crossDelta,
		tapeDelta,
		biasDelta
	}), [
		trackId,
		session,
		balance,
		crossDelta,
		tapeDelta,
		biasDelta
	]);
	const track = TRACKS.find((t) => t.id === trackId);
	const sto = (0, import_react.useMemo)(() => toSto(setup), [setup]);
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
	const toe = (n) => `${n > 0 ? "+" : ""}${fmt(n, 2)} in`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-widest text-muted-foreground uppercase",
							children: "Open Class · 80 laps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl leading-none font-semibold tracking-tight text-balance sm:text-5xl",
							children: "Hauler"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-prose text-sm text-muted-foreground text-pretty",
							children: "Chevrolet Silverado garage for iRacing Class C Open. Built around an 80-lap run — tire save, one-stop window, pigtail front springs."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: downloadSto,
							className: "min-h-11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download .sto"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: copySheet,
							className: "min-h-11",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy card"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							onClick: downloadHtml,
							className: "min-h-11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, {}), "HTML"]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Session" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Drop the .sto on your machine as a punch sheet. iRacing encrypts native setups — enter these values, then Save As in the garage." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "grid gap-5 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "track",
								children: "Track"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: trackId,
								onValueChange: setTrackId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "track",
									"aria-label": "Track",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: TRACKS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: t.id,
									children: t.name
								}, t.id)) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									track.lengthMi,
									" mi · ",
									track.banking,
									" · gear ",
									track.gear
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Session" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-1 rounded-xl bg-secondary p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleChip, {
								active: session === "race",
								onClick: () => setSession("race"),
								children: "Race 80"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleChip, {
								active: session === "qualify",
								onClick: () => setSession("qualify"),
								children: "Qualify"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Balance" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-1 rounded-xl bg-secondary p-1",
							children: [
								"looser",
								"neutral",
								"tighter"
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleChip, {
								active: balance === b,
								onClick: () => setBalance(b),
								children: b
							}, b))
						})]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChassisMap, { setup }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Fine tune" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Small clicks after you load the baseline. One change, then 6–8 laps." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tune, {
								label: "Cross weight",
								value: `${fmt(setup.chassis.crossPct)} %`,
								onReset: () => setCrossDelta(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: -1.2,
									max: 1.2,
									step: .1,
									value: [crossDelta],
									onValueChange: (v) => setCrossDelta(v[0] ?? 0),
									"aria-label": "Cross weight offset"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tune, {
								label: "Tape",
								value: `${setup.chassis.tapePct} %`,
								onReset: () => setTapeDelta(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: -8,
									max: 12,
									step: 1,
									value: [tapeDelta],
									onValueChange: (v) => setTapeDelta(v[0] ?? 0),
									"aria-label": "Tape offset"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tune, {
								label: "Brake bias",
								value: `${fmt(setup.chassis.brakeBias)} % F`,
								onReset: () => setBiasDelta(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									min: -3,
									max: 3,
									step: .5,
									value: [biasDelta],
									onValueChange: (v) => setBiasDelta(v[0] ?? 0),
									"aria-label": "Brake bias offset"
								})
							})
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex-row items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Pit window" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "80 laps · Open Class cautions on" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "ok",
						children: "1 stop"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PitBar, {
							setupLaps: setup.laps,
							window: setup.strategy.pitWindow,
							green: setup.strategy.greenStintLaps
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
							label: "Fuel start",
							value: `${fmt(setup.chassis.fuelGal)} gal`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
							label: "Burn",
							value: `${setup.strategy.fuelPerLap} gal / lap`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
							label: "Green range",
							value: `${setup.strategy.greenStintLaps} laps`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
							label: "Pit window",
							value: `L${setup.strategy.pitWindow[0]}–${setup.strategy.pitWindow[1]}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground text-pretty",
							children: setup.strategy.fuelCall
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground text-pretty",
							children: setup.strategy.tires
						})
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "tires",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "tires",
							children: "Tires"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "front",
							children: "Front"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "corners",
							children: "Corners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "rear",
							children: "Rear"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "notes",
							children: "Notes"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "tires",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								title: "Cold pressures",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Left front",
										value: `${fmt(setup.tires.lf)} psi`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Right front",
										value: `${fmt(setup.tires.rf)} psi`,
										hint: "Long-run limiter"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Left rear",
										value: `${fmt(setup.tires.lr)} psi`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Right rear",
										value: `${fmt(setup.tires.rr)} psi`
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								title: "Targets",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "RF camber",
										value: `${fmt(setup.corners.rf.camber, 2)}°`,
										hint: "Race is milder than qual to live 40-lap stints"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Steering",
										value: `${setup.chassis.steeringRatio}:1`,
										hint: "12:1 on 1.5s saves the nose"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Radiator",
										value: setup.chassis.radiator
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Tape",
										value: `${setup.chassis.tapePct} %`
									})
								]
							})]
						}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "front",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								title: "Platform",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Nose weight",
										value: `${fmt(setup.chassis.noseWeight)} %`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Cross weight",
										value: `${fmt(setup.chassis.crossPct)} %`,
										hint: "RF + LR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Left side",
										value: `${fmt(setup.chassis.leftPct)} %`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Ballast forward",
										value: `${fmt(setup.chassis.ballastForward)} in`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Brake bias",
										value: `${fmt(setup.chassis.brakeBias)} % F`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Brake pressure",
										value: `${setup.chassis.brakePressure} %`
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								title: "ARB & aero",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "ARB diameter",
										value: `${fmt(setup.chassis.arbDiameter, 3)} in`,
										hint: "Keep the nose flat; large bar for bind"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "ARB arms",
										value: `${setup.chassis.arbArmLeft} / ${setup.chassis.arbArmRight} in`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "ARB preload",
										value: `${setup.chassis.arbPreload} lbf`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Tape",
										value: `${setup.chassis.tapePct} %`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Radiator",
										value: setup.chassis.radiator
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Fuel",
										value: `${fmt(setup.chassis.fuelGal)} gal`
									})
								]
							})]
						}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "corners",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "grid gap-8 md:grid-cols-2",
							children: [
								"lf",
								"rf",
								"lr",
								"rr"
							].map((id) => {
								const k = setup.corners[id];
								const title = {
									lf: "Left front",
									rf: "Right front",
									lr: "Left rear",
									rr: "Right rear"
								}[id];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									title,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Corner weight",
											value: `${k.weight} lb`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Ride height",
											value: `${fmt(k.rideHeight, 2)} in`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Spring perch",
											value: `${fmt(k.perch, 2)} in`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Spring rate",
											value: `${k.spring} lb/in`
										}),
										k.springAngle != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Spring angle",
											value: `${k.springAngle}°`,
											hint: "Pigtail transition"
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Bump / rebound",
											value: `${k.bump} / ${k.rebound} lb`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Camber",
											value: `${fmt(k.camber, 2)}°`
										}),
										k.caster != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Caster",
											value: `${fmt(k.caster, 2)}°`
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
											label: "Toe-in",
											value: toe(k.toe)
										})
									]
								}, id);
							})
						}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "rear",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid gap-6 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								title: "Axle",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Gear ratio",
										value: setup.chassis.gear,
										hint: "Track-limited in the garage"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Track bar left",
										value: `${fmt(setup.chassis.trackBarLeft, 2)} in`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Track bar right",
										value: `${fmt(setup.chassis.trackBarRight, 2)} in`,
										hint: "Raise to free"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Truck arm L",
										value: `${fmt(setup.chassis.truckArmLeft, 2)} in`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Truck arm R",
										value: `${fmt(setup.chassis.truckArmRight, 2)} in`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Rear ride LR / RR",
										value: `${fmt(setup.corners.lr.rideHeight, 2)} / ${fmt(setup.corners.rr.rideHeight, 2)} in`,
										hint: "Keep 3.9–4.3 in"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
								title: "In-car",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Steering ratio",
										value: `${setup.chassis.steeringRatio}:1`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Steering offset",
										value: `${fmt(setup.chassis.steeringOffset)}°`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Brake bias",
										value: `${fmt(setup.chassis.brakeBias)} % F`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueRow, {
										label: "Weight jacker",
										value: "0.0",
										hint: "Start zero; click in if it frees late"
									})
								]
							})]
						}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mb-3 flex items-center gap-2 font-display text-sm font-semibold tracking-wide uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }), " Garage"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
									className: "flex flex-col gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Open a Test session in the Silverado at this track." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Garage → punch the values on Tires / Chassis." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"3. Save As",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-foreground",
												children: setup.filename
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"4. File lives in",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-foreground",
												children: [
													"setups\\",
													setup.carPath,
													"\\"
												]
											})
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-2 text-sm text-muted-foreground",
									children: setup.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-pretty",
										children: n
									}, n))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-3 flex items-center gap-2 font-display text-sm font-semibold tracking-wide uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "size-4" }), " Driving"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-col gap-2 text-sm text-muted-foreground",
								children: setup.driving.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-pretty",
									children: n
								}, n))
							})] })]
						}) })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex flex-col gap-2 border-t border-border pt-6 pb-8 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono tabular-nums",
					children: setupFilename(setup)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-pretty",
					children: "Native iRacing .sto files are encrypted. This download is a garage card — enter it, then Save As in the sim so the truck actually loads it."
				})]
			})
		]
	});
}
function ToggleChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: active ? "min-h-10 rounded-lg bg-elevated px-2 text-xs font-medium tracking-wide text-foreground capitalize shadow-border" : "min-h-10 rounded-lg px-2 text-xs font-medium tracking-wide text-muted-foreground capitalize",
		children
	});
}
function Tune({ label, value, onReset, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-sm tabular-nums",
					children: value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onReset,
					className: "text-xs text-muted-foreground hover:text-foreground",
					children: "Reset"
				})]
			})]
		}), children]
	});
}
function PitBar({ setupLaps, window, green }) {
	const w0 = window[0] / setupLaps * 100;
	const w1 = window[1] / setupLaps * 100;
	const g = Math.min(100, green / setupLaps * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-3 overflow-hidden rounded-full bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-y-0 left-0 bg-ok/40",
			style: { width: `${g}%` }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-y-0 bg-primary/80",
			style: {
				left: `${w0}%`,
				width: `${Math.max(4, w1 - w0)}%`
			}
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 flex justify-between font-mono text-xs text-muted-foreground tabular-nums",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "L1" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"stop ",
				window[0],
				"–",
				window[1]
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["L", setupLaps] })
		]
	})] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-dvh bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupApp, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "bottom-center"
		})]
	});
}
//#endregion
export { Home as component };
