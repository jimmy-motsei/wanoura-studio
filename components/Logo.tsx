import Image from "next/image";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  // Renders the brand mark at ~40px height, preserving aspect ratio
  // Asset path provided: public/brand/Wanoura_Logo_Black_Transparent.png
  const classes = `${className ? className + " " : ""}h-[40px] w-auto`;
  return (
    <Image
      src="/brand/wanoura_logo_black_transparent.png"
      alt="wanoura"
      width={160}
      height={40}
      className={classes}
      priority
    />
  );
}
