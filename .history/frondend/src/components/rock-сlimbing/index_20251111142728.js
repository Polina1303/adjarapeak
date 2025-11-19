import dynamic from "next/dynamic";

export const RockClimbing = dynamic(
  () => import("./rock-сlimbing").then((mod) => mod.RockClimbing),
  { ssr: false }
);
