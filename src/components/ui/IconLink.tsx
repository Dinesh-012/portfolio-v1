import type { LucideIcon } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: LucideIcon;
  label: string;
};

export function IconLink({
  icon: Icon,
  label,
  className = "",
  ...props
}: IconLinkProps) {
  return (
    <a
      {...props}
      aria-label={label}
      title={label}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 transition-all hover:border-indigo-400/40 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-slate-700/50 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-cyan-400/30 dark:hover:bg-indigo-950/40 dark:hover:text-cyan-400 ${className}`}
    >
      <Icon className="h-5 w-5" aria-hidden />
      <span className="sr-only">{label}</span>
    </a>
  );
}
