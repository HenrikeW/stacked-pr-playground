import type { Metadata } from "next";
import UnderConstruction from "../components/under-construction";

export const metadata: Metadata = {
  title: "Fun Facts",
};

export default function FunFacts() {
  return (
    <>
      <h1>Fun Facts</h1>
      <UnderConstruction />
    </>
  );
}
