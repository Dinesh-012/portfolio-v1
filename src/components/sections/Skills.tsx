import { skillGroups } from "@/data/skills";
import { SECTION_IDS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="scroll-mt-24 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Skills"
            title="Technical toolkit"
            subtitle="Languages, frameworks, and patterns I use to design and ship backend systems."
          />
        </RevealOnScroll>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <RevealOnScroll key={group.id} delay={index * 0.05}>
              <GlassPanel className="h-full p-5">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-cyan-400">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </GlassPanel>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
