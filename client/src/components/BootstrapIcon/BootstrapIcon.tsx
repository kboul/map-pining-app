import paths from "./paths";

interface BootstrapIconProps {
  fill?: string;
  icon: string;
  width?: string;
  height?: string;
}

export default function BootstrapIcon({
  fill = "black",
  height = "20",
  icon,
  width = "20"
}: BootstrapIconProps) {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <path d={paths[icon]} />
    </svg>
  );
}
