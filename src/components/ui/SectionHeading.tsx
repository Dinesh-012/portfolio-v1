type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 max-w-2xl ${alignClass}`}>
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-slate-600 dark:text-slate-400 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
