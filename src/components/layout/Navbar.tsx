import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { NAV_LINKS, scrollToSection, type SectionId } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ResumeDownloadLink } from "@/components/ui/ResumeDownloadLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const spyIds = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(spyIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: SectionId) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-lg backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="min-h-11 text-left text-sm font-bold tracking-tight md:text-base"
        >
          <span className="text-gradient-brand">
            {profile.name.split(" ")[0]}
          </span>
          <span className="text-indigo-500 dark:text-cyan-400">.</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className={`min-h-11 rounded-lg px-3 text-sm transition-colors ${
                active === link.id
                  ? "text-indigo-600 dark:text-cyan-400"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
              }`}
            >
              {link.label}
            </button>
          ))}
          <ResumeDownloadLink variant="ghost" className="ml-1 !px-3 !py-2 text-xs">
            Resume
          </ResumeDownloadLink>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-800 dark:border-slate-700/50 dark:bg-slate-900/70 dark:text-slate-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[60px] z-40 bg-slate-50/95 backdrop-blur-xl dark:bg-slate-950/95 md:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-4 py-6"
            aria-label="Mobile primary"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className={`min-h-11 rounded-xl px-4 text-left text-base ${
                  active === link.id
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/80"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <ResumeDownloadLink variant="primary" className="w-full" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
