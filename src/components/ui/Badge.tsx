import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-slate-200 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-indigo-400/40 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:border-cyan-400/30 dark:hover:bg-indigo-950/40 dark:hover:text-cyan-400 ${className}`}
    >
      {children}
    </span>
  );
}
