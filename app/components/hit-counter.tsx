"use client";

import { useSyncExternalStore } from "react";
import styles from "./hit-counter.module.css";

const STORAGE_KEY = "meerkat-manor:visits";
const DIGITS = 6;

/* localStorage throws outright in some contexts (private mode, blocked site
   data), so every access is guarded and simply degrades to "no count". */
function readAndIncrement(): number | null {
  try {
    const previous = Number.parseInt(
      window.localStorage.getItem(STORAGE_KEY) ?? "0",
      10,
    );
    const next = (Number.isFinite(previous) ? previous : 0) + 1;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  } catch {
    return null;
  }
}

/* A tiny external store rather than an effect. localStorage genuinely is an
   external system, and the `counted` guard makes the increment exactly-once
   per page load -- an effect would fire twice under Strict Mode and inflate
   the count on every dev reload. */
let counted = false;
let visitCount: number | null = null;
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (!counted) {
    counted = true;
    visitCount = readAndIncrement();
    for (const listener of listeners) listener();
  }
  return () => {
    listeners.delete(onChange);
  };
}

const getSnapshot = () => visitCount;
/* The server has no localStorage, so it renders placeholder dashes and the
   client swaps in the real number after hydration. */
const getServerSnapshot = () => null;

export default function HitCounter() {
  const visits = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const display =
    visits === null ? "-".repeat(DIGITS) : String(visits).padStart(DIGITS, "0");

  return (
    <p className={styles.counter}>
      <span className={styles.label}>You are visitor number</span>
      <span className={styles.odometer} aria-hidden="true">
        {display.split("").map((char, index) => (
          <span key={index} className={styles.digit}>
            {char}
          </span>
        ))}
      </span>
      <span className="visually-hidden">
        {visits === null
          ? "A decorative visitor counter. The count is unavailable because browser storage is not accessible."
          : `A decorative visitor counter: ${visits}. It is stored only in your own browser and counts just your visits.`}
      </span>
    </p>
  );
}
