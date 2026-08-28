import type { Metadata } from "next";
import UnderConstruction from "../components/under-construction";

export const metadata: Metadata = {
  title: "Quiz",
};

export default function Quiz() {
  return (
    <>
      <h1>Quiz</h1>
      <UnderConstruction />
    </>
  );
}
