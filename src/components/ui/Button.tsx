import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-indigo-600 text-white font-semibold hover:bg-indigo-500 shadow-glow-indigo border border-indigo-500/30",
  ghost:
    "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700/80",
  outline:
    "bg-transparent border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400/40 dark:text-indigo-400 dark:hover:bg-indigo-950/40",
};

type SharedProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

function cn(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    icon,
    children,
    className,
    ...rest
  } = props;

  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

  const classes = cn(base, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
