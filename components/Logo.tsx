type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  // Renders the brand mark at ~40px height, preserving aspect ratio
  // Asset path provided: public/brand/wanoura-logo.png
  const classes = `${className ? className + " " : ""}h-[40px] w-auto`;
  return (
    <img
      src="/brand/wanoura-logo.png"
      alt="Wanoura"
      className={classes}
      height={40}
    />
  );
}
