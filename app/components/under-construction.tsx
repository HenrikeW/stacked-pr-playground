import styles from "./under-construction.module.css";

/**
 * The obligatory roadworks badge, redrawn as SVG. The hazard stripes scroll
 * via CSS animation and freeze under prefers-reduced-motion.
 */
export default function UnderConstruction() {
  return (
    <div className={styles.badge}>
      <svg viewBox="0 0 64 64" className={styles.sign} aria-hidden="true" focusable="false">
        {/* warning diamond */}
        <rect
          x="10"
          y="10"
          width="44"
          height="44"
          rx="4"
          transform="rotate(45 32 32)"
          fill="#f2c200"
          stroke="var(--text, #2b1b0e)"
          strokeWidth="4"
        />
        {/* a meerkat, digging */}
        <circle cx="27" cy="24" r="6" fill="var(--text, #2b1b0e)" />
        <path
          d="M27 30 C 21 30, 19 38, 20 44 L 34 44 C 35 38, 33 30, 27 30 Z"
          fill="var(--text, #2b1b0e)"
        />
        <path
          d="M33 34 L 45 26"
          stroke="var(--text, #2b1b0e)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M43 22 L 50 20 L 48 29 Z"
          fill="var(--text, #2b1b0e)"
        />
      </svg>
      <div className={styles.text}>
        <strong className={styles.heading}>Under Construction</strong>
        <span className={styles.sub}>Pardon our dust &mdash; keep digging!</span>
      </div>
      <span className={styles.stripes} aria-hidden="true" />
    </div>
  );
}
