// components/Logo.tsx
import Image from "next/image";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  // Default navbar sizing: 28px on mobile, 32px on desktop
  const base = "h-[28px] sm:h-[32px] w-auto";
  const classes = className ? `${base} ${className}` : base;

  return (
    <Image
      src="/brand/wanoura-logo-black-290-100-transparent.png"
      alt="Wanoura Logo"
      width={290}
      height={100}
      className={classes}
      priority
    />
  );
}
