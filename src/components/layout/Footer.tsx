import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/50 py-8 dark:border-slate-700/50 dark:bg-slate-900/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 md:flex-row md:px-6 md:text-left">
        <p>
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <a
          href={profile.resumeDownloadUrl}
          download={profile.resumeDownloadFilename}
          className="min-h-11 inline-flex items-center text-indigo-600 hover:underline dark:text-cyan-400"
        >
          Download resume (PDF)
        </a>
      </div>
    </footer>
  );
}
