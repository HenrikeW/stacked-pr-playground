import type { Metadata } from "next";
import UnderConstruction from "../components/under-construction";

export const metadata: Metadata = {
  title: "Mini Game",
};

export default function MiniGame() {
  return (
    <>
      <h1>Mini Game</h1>
      <UnderConstruction />
    </>
  );
}
