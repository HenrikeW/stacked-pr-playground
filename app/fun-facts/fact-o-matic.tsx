"use client";

import { useRef, useState } from "react";
import { FACTS } from "./facts";
import styles from "./fact-o-matic.module.css";

/** Fisher-Yates, on a copy. */
function shuffled(values: number[]): number[] {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function FactOMatic() {
  /* Index 0 on first render, deterministically. Nothing random happens during
     render, so the server and client markup always agree. */
  const [current, setCurrent] = useState(0);

  /* Remaining indices to draw from. A plain random pick would repeat within a
     few clicks and give away how few facts there are; drawing from a bag means
     every fact is seen before any repeats, which reads as a much deeper well. */
  const bag = useRef<number[]>([]);

  function showAnother() {
    setCurrent((shown) => {
      if (bag.current.length === 0) {
        // Refill excluding whatever is on screen, so a bag boundary can never
        // produce the same fact twice in a row.
        const indices = FACTS.map((_, index) => index).filter(
          (index) => index !== shown,
        );
        bag.current = shuffled(indices);
      }
      return bag.current.pop() ?? shown;
    });
  }

  return (
    <div className={styles.machine}>
      <p className={styles.titleBar}>### The Fact-O-Matic 3000 ###</p>

      {/* Live region is present from first render, so swaps are announced. */}
      <div className={styles.screen} aria-live="polite" aria-atomic="true">
        <p className={styles.fact}>{FACTS[current]}</p>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.button} onClick={showAnother}>
          Show Me Another!
        </button>
      </div>
    </div>
  );
}
