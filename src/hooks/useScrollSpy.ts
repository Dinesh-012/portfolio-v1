import { useEffect, useState } from "react";
import type { SectionId } from "@/lib/constants";

export function useScrollSpy(sectionIds: SectionId[], offset = 120): SectionId {
  const [active, setActive] = useState<SectionId>(sectionIds[0] ?? "about");

  useEffect(() => {
    const onScroll = () => {
      let current: SectionId = sectionIds[0] ?? "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return active;
}
