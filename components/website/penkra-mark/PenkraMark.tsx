import type { SVGProps } from "react";

export function PenkraMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="Penkra"
      role="img"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M89 278v-67C89 119.3 163.3 45 255 45c92.2 0 167 74.3 167 166 0 88.5-70.3 160.8-158.2 163H260v-71c50.8 0 92-41.2 92-92 0-52.5-42.5-95-95-95-54.7 0-99 43.1-99 95v67H89Z"
        fill="currentColor"
      />
      <path d="M89 303h69v164H89z" fill="currentColor" />
      <path d="M182 303h78v71h-78z" fill="#8CB8E1" />
    </svg>
  );
}
