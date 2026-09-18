import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function GradientOrbs() {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-40"
        aria-hidden
      >
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-40 dark:opacity-100"
      aria-hidden
    >
      <div className="orb orb-1 animate-orb-drift-1 absolute -left-24 top-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="orb orb-2 animate-orb-drift-2 absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="orb orb-3 animate-orb-drift-3 absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
    </div>
  );
}
