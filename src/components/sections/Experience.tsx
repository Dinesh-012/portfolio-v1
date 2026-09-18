import { experience } from "@/data/experience";
import { SECTION_IDS } from "@/lib/constants";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="scroll-mt-24 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Experience"
            title="Professional journey"
            subtitle="Shipping APIs in production and growing into Java-centric backend architecture."
          />
        </RevealOnScroll>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <RevealOnScroll key={job.id} delay={index * 0.08}>
              <GlassPanel className="relative border-l-2 border-l-indigo-500 p-6 dark:border-l-cyan-400/80 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {job.company}
                    </h3>
                    <p className="text-indigo-600 dark:text-cyan-400">{job.role}</p>
                  </div>
                  <p className="text-sm text-slate-500 md:text-right">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 md:text-base">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 48)} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
