import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/constants";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="scroll-mt-24 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="About"
            title="Building reliable backends"
            subtitle="From production NestJS APIs to Spring microservices—focused on architecture, clarity, and maintainable systems."
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <GlassPanel className="p-6 md:p-8">
            <ul className="space-y-3">
              {profile.summary.map((paragraph, index) => {
                const isLast = index === profile.summary.length - 1;
                return (
                  <li
                    key={paragraph.slice(0, 32)}
                    className={
                      isLast
                        ? "mt-2 border-t border-slate-200 pt-4 text-base leading-relaxed dark:border-slate-700 md:text-lg pl-5"
                        : "flex gap-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg"
                    }
                  >
                    {!isLast && (
                      <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                    )}
                    <span
                      className={
                        isLast
                          ? "font-medium text-indigo-600 dark:text-cyan-400"
                          : undefined
                      }
                    >
                      {paragraph}
                    </span>
                  </li>
                );
              })}
            </ul>
          </GlassPanel>
        </RevealOnScroll>

        {/* <RevealOnScroll delay={0.08}>
          <GlassPanel className="space-y-4 p-6 md:p-8">
            {profile.summary.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
            
            {profile.summary.map((paragraph, index) => {
              const isLast = index === profile.summary.length - 1;
              return (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg"
                >
                  {isLast ? (
                    <span className="font-medium text-cyan-600 dark:text-cyan-400">
                      {paragraph}
                    </span>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </GlassPanel>
        </RevealOnScroll> */}
      </div>
    </section>
  );
}
