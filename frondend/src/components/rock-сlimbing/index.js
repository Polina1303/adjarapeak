import dynamic from "next/dynamic";

export const RockClimbing = dynamic(
  () => import("./rock-climbing").then((mod) => mod.RockClimbing),
  { ssr: false }
);
