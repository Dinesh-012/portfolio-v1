import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/constants";
import { SystemArchitectureDiagram } from "@/components/projects/SystemArchitectureDiagram";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const project = projects[0];

  return (
    <section
      id={SECTION_IDS.projects}
      className="scroll-mt-24 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            subtitle="Hands-on system design through a production-style microservices backend."
          />
        </RevealOnScroll>

        {project ? (
          <RevealOnScroll delay={0.1}>
            <GlassPanel className="overflow-hidden p-6 md:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{project.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
                    {project.highlights.map((h) => (
                      <li key={h.slice(0, 40)} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-cyan-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden />}
                  className="shrink-0 self-start"
                >
                  View on GitHub
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              {project.repoExtras ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.repoExtras.map((t) => (
                    <Badge
                      key={t}
                      className="border-indigo-300/40 text-indigo-700 dark:border-cyan-400/20 dark:text-cyan-400"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              ) : null}

              <div className="mt-8">
                <SystemArchitectureDiagram />
              </div>
            </GlassPanel>
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
