import Image from "next/image";

type Props = {
  variant?: "dark" | "light"; // NEW
  className?: string;
};

export default function Logo({ variant = "dark", className }: Props) {
  // Map variants to correct file paths
  const src =
    variant === "light"
      ? "/brand/wanoura-logo-white-transparent.png"
      : "/brand/wanoura-logo-black-transparent.png";

  return (
    <Image
      src={src}
      alt="wanoura"
      width={200}          // you can tweak this
      height={40}          // controls proportional scaling
      className={className ?? ""}
      priority
    />
  );
}
