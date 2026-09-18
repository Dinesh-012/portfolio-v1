import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { SECTION_IDS } from "@/lib/constants";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section
      id={SECTION_IDS.education}
      className="scroll-mt-24 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealOnScroll>
          <SectionHeading eyebrow="Education" title="Academic background" />
        </RevealOnScroll>
        <div className="grid gap-4">
          {education.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.06}>
              <GlassPanel className="flex gap-4 p-6 md:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/60 dark:text-cyan-400">
                  <GraduationCap className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {item.institution}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">{item.degree}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.period}
                    {item.detail ? ` · ${item.detail}` : ""}
                  </p>
                </div>
              </GlassPanel>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
