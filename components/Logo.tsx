type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <span className={className ?? ""} aria-label="Wanoura">
      Wanoura
    </span>
  );
}
