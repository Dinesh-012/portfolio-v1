import { Network } from "lucide-react";
import { useMemo, useState } from "react";
import type { ArchEdgeType } from "@/data/microservicesArchitecture";
import { microservicesArch } from "@/data/microservicesArchitecture";
import { getAdjacent } from "@/lib/architectureGraph";
import { ArchitectureNode } from "./ArchitectureNode";

const { nodes, edges } = microservicesArch;

const VIEW_W = 1000;
const VIEW_H = 480;

function toSvg(x: number, y: number): { sx: number; sy: number } {
  return { sx: (x / 100) * VIEW_W, sy: (y / 100) * VIEW_H };
}

function edgePath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  type: ArchEdgeType,
): string {
  const { sx, sy } = toSvg(fromX, fromY);
  const { sx: ex, sy: ey } = toSvg(toX, toY);

  if (type === "h" || type === "v" || type === "d") {
    return `M ${sx} ${sy} L ${ex} ${ey}`;
  }

  return `M ${sx} ${sy} L ${ex} ${ey}`;
}

export function SystemArchitectureDiagram() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const adjacency = useMemo(
    () => (hoveredId ? getAdjacent(hoveredId, edges) : null),
    [hoveredId],
  );

  const hoveredNode = nodes.find((n) => n.id === hoveredId);

  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), []);

  function nodeState(id: string): "idle" | "hovered" | "connected" | "dimmed" {
    if (!hoveredId) return "idle";
    if (id === hoveredId) return "hovered";
    if (adjacency?.nodeIds.has(id)) return "connected";
    return "dimmed";
  }

  return (
    <div className="glass-card overflow-hidden p-4 md:p-6">
      <div className="mb-4 flex items-center gap-2">
        <Network className="h-4 w-4 text-indigo-500 dark:text-cyan-400" aria-hidden />
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          System architecture
        </h4>
      </div>

      <div className="overflow-x-auto">
        <div className="relative mx-auto min-h-[340px] min-w-[640px] pb-2 md:min-h-[400px]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {edges.map((edge) => {
              const from = nodeMap.get(edge.from);
              const to = nodeMap.get(edge.to);
              if (!from || !to) return null;

              const active = Boolean(hoveredId && adjacency?.edgeIds.has(edge.id));
              const dimmed = Boolean(hoveredId && !active);

              return (
                <path
                  key={edge.id}
                  d={edgePath(from.x, from.y, to.x, to.y, edge.type)}
                  fill="none"
                  className={`transition-all duration-200 ${
                    active
                      ? "stroke-cyan-400"
                      : dimmed
                        ? "stroke-slate-400/20 dark:stroke-slate-700/25"
                        : "stroke-slate-400/50 dark:stroke-slate-500/40"
                  }`}
                  strokeWidth={active ? 2.5 : 1.5}
                />
              );
            })}
          </svg>

          {nodes.map((node) => (
            <ArchitectureNode
              key={node.id}
              node={node}
              state={nodeState(node.id)}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      <div
        className="mt-4 min-h-[4.5rem] border-t border-slate-200 px-3 py-3 dark:border-slate-700/50"
        aria-live="polite"
      >
        {hoveredNode ? (
          <>
            <p className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">
              {hoveredNode.label}
              {hoveredNode.sublabel ? (
                <span className="font-normal text-slate-500"> · {hoveredNode.sublabel}</span>
              ) : null}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {hoveredNode.description}
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hover or focus a component to see how it connects in the system.
          </p>
        )}
      </div>
    </div>
  );
}
