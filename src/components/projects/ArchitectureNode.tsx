import type { ArchNode } from "@/data/microservicesArchitecture";
import { getNodePositionPercent } from "@/lib/architectureGraph";

type NodeVisualState = "idle" | "hovered" | "connected" | "dimmed";

type ArchitectureNodeProps = {
  node: ArchNode;
  state: NodeVisualState;
  onHover: (id: string | null) => void;
};

const stateClasses: Record<NodeVisualState, string> = {
  idle: "border-slate-300/60 bg-white/90 opacity-95 dark:border-slate-600/40 dark:bg-slate-900/80",
  hovered:
    "border-cyan-400 bg-white ring-2 ring-cyan-400/60 shadow-[0_0_24px_rgba(34,211,238,0.35)] opacity-100 z-10 dark:bg-slate-900",
  connected:
    "border-indigo-400/70 bg-white/95 opacity-100 z-[5] dark:border-indigo-400/50 dark:bg-slate-900/90",
  dimmed: "border-slate-200/40 bg-slate-100/50 opacity-35 dark:border-slate-800/30 dark:bg-slate-900/40",
};

export function ArchitectureNode({ node, state, onHover }: ArchitectureNodeProps) {
  const pos = getNodePositionPercent(node.x, node.y);

  return (
    <button
      type="button"
      className={`absolute w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2 py-2 text-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 sm:w-[120px] ${stateClasses[state]}`}
      style={{ left: pos.left, top: pos.top }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(node.id)}
      onBlur={() => onHover(null)}
      aria-label={`${node.label}${node.sublabel ? `, ${node.sublabel}` : ""}`}
    >
      <span className="block text-xs font-semibold leading-tight text-slate-900 dark:text-slate-100">
        {node.label}
      </span>
      {node.sublabel ? (
        <span className="mt-0.5 block text-[10px] leading-tight text-slate-500">
          {node.sublabel}
        </span>
      ) : null}
    </button>
  );
}
