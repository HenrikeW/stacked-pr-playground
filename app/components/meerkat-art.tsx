/**
 * Hand-drawn flat-vector meerkats. All decorative, so every one is
 * aria-hidden and non-focusable -- they must never reach the a11y tree.
 * Body fills use currentColor so they theme from whatever CSS sets on them.
 */

type ArtProps = {
  className?: string;
};

type SentryProps = ArtProps & {
  /** Applied to the head group, so CSS can swivel it independently. */
  headClassName?: string;
};

const hidden = {
  "aria-hidden": true,
  focusable: "false",
} as const;

/** Upright sentry meerkat, the classic on-watch pose. For the hero. */
export function MeerkatSentry({ className, headClassName }: SentryProps) {
  return (
    <svg viewBox="0 0 100 170" className={className} {...hidden}>
      {/* tail, drawn first so the body overlaps its root */}
      <path
        d="M58 126 C 80 130, 92 142, 89 164"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* feet */}
      <ellipse cx="40" cy="145" rx="10" ry="6" fill="currentColor" />
      <ellipse cx="61" cy="145" rx="10" ry="6" fill="currentColor" />
      {/* body */}
      <path
        d="M50 44 C 30 44, 25 72, 27 102 C 28 128, 36 143, 50 143 C 64 143, 72 128, 73 102 C 75 72, 70 44, 50 44 Z"
        fill="currentColor"
      />
      {/* pale belly */}
      <ellipse cx="50" cy="100" rx="15" ry="30" fill="#fff8e7" opacity="0.55" />
      {/* stubby forepaws held at the chest */}
      <ellipse cx="42" cy="88" rx="6" ry="9" fill="currentColor" />
      <ellipse cx="58" cy="88" rx="6" ry="9" fill="currentColor" />
      {/* Head kept as one group so it can swivel around the neck. */}
      <g className={headClassName}>
        {/* ears */}
        <circle cx="32" cy="26" r="8" fill="currentColor" />
        <circle cx="68" cy="26" r="8" fill="currentColor" />
        {/* head */}
        <circle cx="50" cy="33" r="21" fill="currentColor" />
        {/* dark eye patches -- the meerkat's most recognisable feature */}
        <ellipse cx="42" cy="31" rx="7" ry="6" fill="var(--text, #2b1b0e)" />
        <ellipse cx="58" cy="31" rx="7" ry="6" fill="var(--text, #2b1b0e)" />
        <circle cx="42" cy="30" r="2.2" fill="#fff8e7" />
        <circle cx="58" cy="30" r="2.2" fill="#fff8e7" />
        {/* muzzle + nose */}
        <ellipse cx="50" cy="44" rx="9" ry="7" fill="#fff8e7" opacity="0.6" />
        <ellipse cx="50" cy="42" rx="3.5" ry="2.8" fill="var(--text, #2b1b0e)" />
      </g>
    </svg>
  );
}

/** Just the head. Small enough to sit inline in nav items and card headings. */
export function MeerkatHead({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...hidden}>
      <circle cx="26" cy="34" r="12" fill="currentColor" />
      <circle cx="74" cy="34" r="12" fill="currentColor" />
      <circle cx="50" cy="50" r="32" fill="currentColor" />
      <ellipse cx="38" cy="46" rx="10" ry="9" fill="var(--text, #2b1b0e)" />
      <ellipse cx="62" cy="46" rx="10" ry="9" fill="var(--text, #2b1b0e)" />
      <circle cx="38" cy="44" r="3.2" fill="#fff8e7" />
      <circle cx="62" cy="44" r="3.2" fill="#fff8e7" />
      <ellipse cx="50" cy="68" rx="13" ry="10" fill="#fff8e7" opacity="0.6" />
      <ellipse cx="50" cy="65" rx="5" ry="4" fill="var(--text, #2b1b0e)" />
    </svg>
  );
}

/** Paw print, used as a divider ornament. */
export function PawPrint({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...hidden}>
      <ellipse cx="26" cy="38" rx="10" ry="14" fill="currentColor" />
      <ellipse cx="43" cy="24" rx="10" ry="14" fill="currentColor" />
      <ellipse cx="61" cy="24" rx="10" ry="14" fill="currentColor" />
      <ellipse cx="78" cy="38" rx="10" ry="14" fill="currentColor" />
      <ellipse cx="52" cy="66" rx="24" ry="20" fill="currentColor" />
    </svg>
  );
}
