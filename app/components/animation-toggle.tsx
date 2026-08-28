"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  subscribe,
  toggleAnimations,
} from "./animation-preference";
import styles from "./animation-toggle.module.css";

/**
 * WCAG 2.2.2 (Pause, Stop, Hide) needs a way to stop motion that runs longer
 * than five seconds. Honouring prefers-reduced-motion alone doesn't satisfy it
 * -- a visitor with no OS preference set would have no control at all.
 *
 * Conveniently, "turn off animations" links were a real fixture of 90s sites,
 * so the accessibility mechanism is also the period-correct detail.
 */
export default function AnimationToggle() {
  const preference = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const on = preference === "on";

  return (
    <p className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        aria-pressed={on}
        onClick={toggleAnimations}
      >
        Animations: {on ? "ON" : "OFF"}
      </button>
    </p>
  );
}
