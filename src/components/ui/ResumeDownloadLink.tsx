import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "./Button";

type ResumeDownloadLinkProps = {
  variant?: "primary" | "ghost" | "outline";
  showIcon?: boolean;
  className?: string;
  children?: string;
};

export function ResumeDownloadLink({
  variant = "outline",
  showIcon = true,
  className,
  children = "Download resume",
}: ResumeDownloadLinkProps) {
  return (
    <Button
      href={profile.resumeDownloadUrl}
      download={profile.resumeDownloadFilename}
      variant={variant}
      className={className}
      icon={showIcon ? <Download className="h-4 w-4" aria-hidden /> : undefined}
    >
      {children}
    </Button>
  );
}
