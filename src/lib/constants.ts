export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  experience: "experience",
  education: "education",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: SECTION_IDS.about, label: "About" },
  { id: SECTION_IDS.skills, label: "Skills" },
  { id: SECTION_IDS.projects, label: "Projects" },
  { id: SECTION_IDS.experience, label: "Experience" },
  { id: SECTION_IDS.education, label: "Education" },
  { id: SECTION_IDS.contact, label: "Contact" },
];

export function scrollToSection(id: SectionId) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
