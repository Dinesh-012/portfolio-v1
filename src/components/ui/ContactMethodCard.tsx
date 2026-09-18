import type { LucideIcon } from "lucide-react";

type ContactMethodCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export function ContactMethodCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactMethodCardProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="glass-card group flex min-h-[72px] items-center gap-4 p-4 transition-colors hover:border-indigo-400/40 dark:hover:border-cyan-400/30 md:p-5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-cyan-400">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="break-all text-sm font-medium text-slate-900 group-hover:text-indigo-700 dark:text-slate-100 dark:group-hover:text-cyan-400">
          {value}
        </p>
      </div>
    </a>
  );
}
