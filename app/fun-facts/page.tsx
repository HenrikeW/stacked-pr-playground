import type { Metadata } from "next";
import FactOMatic from "./fact-o-matic";

export const metadata: Metadata = {
  title: "Fun Facts",
};

export default function FunFacts() {
  return (
    <>
      <h1>Fun Facts</h1>
      <p>
        Everything you never knew about the desert&rsquo;s smallest sentries.
        Press the button for another one &mdash; the Fact-O-Matic never runs
        dry.
      </p>
      <FactOMatic />
    </>
  );
}
