import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { SECTION_IDS, scrollToSection } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GradientOrbs } from "@/components/ui/GradientOrbs";
import { IconLink } from "@/components/ui/IconLink";
import { ProfilePortraitFrame } from "@/components/ui/ProfilePortraitFrame";
import { ResumeDownloadLink } from "@/components/ui/ResumeDownloadLink";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.hero}
      className="hero-mesh relative flex min-h-[100dvh] items-center overflow-hidden pt-20"
    >
      <GradientOrbs />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.15fr_0.65fr] lg:items-stretch lg:py-20">
        <div className="order-2 h-full lg:order-1">
          <GlassPanel className="h-full p-6 md:p-8 lg:p-10">
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-300"
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden />
              Open to opportunities
            </motion.div>
            <motion.p
              className="mb-3 font-mono text-sm font-medium text-cyan-600 dark:text-cyan-400"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {"> "}
              {profile.title} — Java & Spring Boot
            </motion.p>
            <motion.h1
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span className="text-slate-900 dark:text-slate-100">Hi, I&apos;m </span>
              <span className="text-gradient-brand">{profile.name}</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-base text-slate-600 dark:text-slate-300 md:text-lg"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              {profile.tagline}
            </motion.p>
            <motion.ul
              className="mt-4 flex flex-wrap gap-2"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24 }}
            >
              {profile.roleHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/50 px-3 py-1 text-xs text-slate-600 dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
            >
              <Button
                variant="primary"
                onClick={() => scrollToSection(SECTION_IDS.projects)}
              >
                View projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection(SECTION_IDS.contact)}
              >
                Get in touch
              </Button>
              <ResumeDownloadLink variant="outline" />
              <IconLink
                href={profile.githubUrl}
                icon={Github}
                label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              />
              <IconLink
                href={profile.linkedInUrl}
                icon={Linkedin}
                label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              />
            </motion.div>
          </GlassPanel>
        </div>

        <motion.div
          className="order-1 flex h-full items-stretch justify-center lg:order-2"
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/*
            Profile photo: ProfilePortraitFrame (active). To use round photo instead,
            comment out the Portrait block and uncomment the Round block below.
          */}
          <ProfilePortraitFrame
            src={profile.photoUrl}
            alt={`Portrait of ${profile.name}`}
          />

          {/*
          Round profile (inactive)
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-indigo-500/20 blur-xl" aria-hidden />
            <img
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              className="relative h-48 w-48 rounded-full border-2 border-indigo-400/30 object-cover shadow-glow-indigo sm:h-56 sm:w-56 lg:h-64 lg:w-64"
              width={256}
              height={256}
            />
          </div>
          */}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection(SECTION_IDS.about)}
        className="absolute bottom-6 left-1/2 flex min-h-11 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-indigo-600 dark:hover:text-cyan-400"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className={`h-5 w-5 ${reduced ? "" : "animate-bounceSoft"}`} />
      </button>
    </section>
  );
}
