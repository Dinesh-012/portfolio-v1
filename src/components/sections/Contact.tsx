import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ContactMethodCard } from "@/components/ui/ContactMethodCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Contact() {
  const { contact } = profile;

  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-24 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gradient-brand md:text-4xl">
              {contact.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 dark:text-slate-400 md:text-lg">
              {contact.subtitle}
            </p>
            <div
              className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
              aria-hidden
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            <ContactMethodCard
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactMethodCard
              icon={Phone}
              label="Mobile"
              value={profile.phone}
              href={profile.phoneHref}
            />
            <ContactMethodCard
              icon={Linkedin}
              label="LinkedIn"
              value={contact.linkedInDisplay}
              href={profile.linkedInUrl}
              external
            />
            <ContactMethodCard
              icon={Github}
              label="GitHub"
              value={contact.githubDisplay}
              href={profile.githubUrl}
              external
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.12}>
          <p className="mx-auto mt-8 flex max-w-3xl items-start justify-center gap-2 text-center text-sm text-slate-500 dark:text-slate-400">
            <MapPin
              className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500 dark:text-cyan-400"
              aria-hidden
            />
            <span>{contact.locationNote}</span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.16}>
          <div className="mx-auto mt-8 flex max-w-3xl justify-center">
            <Button
              href={`mailto:${profile.email}`}
              variant="primary"
              className="w-full sm:w-auto"
              icon={<Mail className="h-4 w-4" aria-hidden />}
            >
              Send me an email
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
