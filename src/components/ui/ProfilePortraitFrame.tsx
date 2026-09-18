type ProfilePortraitFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ProfilePortraitFrame({
  src,
  alt,
  className = "",
}: ProfilePortraitFrameProps) {
  return (
    <div
      className={`profile-portrait-frame mx-auto aspect-[3/4] w-full max-w-[200px] rounded-2xl bg-gradient-to-b from-cyan-400 to-indigo-500 p-[2px] shadow-[0_0_32px_rgba(34,211,238,0.25),0_0_48px_rgba(99,102,241,0.2)] sm:max-w-[220px] lg:aspect-auto lg:h-full lg:max-w-[240px] xl:max-w-[280px] ${className}`}
    >
      <div className="h-full overflow-hidden rounded-[14px] bg-slate-900">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
          width={280}
          height={373}
        />
      </div>
    </div>
  );
}
