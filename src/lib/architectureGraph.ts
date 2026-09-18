import type { ArchEdge } from "@/data/microservicesArchitecture";

export type Adjacency = {
  nodeIds: Set<string>;
  edgeIds: Set<string>;
};

export function getAdjacent(nodeId: string, edges: ArchEdge[]): Adjacency {
  const nodeIds = new Set<string>([nodeId]);
  const edgeIds = new Set<string>();

  for (const edge of edges) {
    if (edge.from === nodeId || edge.to === nodeId) {
      edgeIds.add(edge.id);
      nodeIds.add(edge.from);
      nodeIds.add(edge.to);
    }
  }

  return { nodeIds, edgeIds };
}

export function getNodePositionPercent(
  x: number,
  y: number,
): { left: string; top: string } {
  return { left: `${x}%`, top: `${y}%` };
}
