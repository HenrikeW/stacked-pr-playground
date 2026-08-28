import AnimationToggle from "./animation-toggle";
import { MeerkatSentry, PawPrint } from "./meerkat-art";
import styles from "./site-footer.module.css";

/* A fixed string rather than new Date(): the date should change when the site
   actually changes, not on every render. */
const LAST_UPDATED = "28 August 2026";

export default function SiteFooter() {
  return (
    <div className={styles.wrapper}>
      {/* Clipping zone directly above the footer. The meerkat lives below its
          bottom edge and rises into view, so it reads as popping up from
          behind the footer panel the way one does from behind a rock. */}
      <div className={styles.peekZone}>
        <MeerkatSentry
          className={styles.peeker}
          headClassName={styles.peekerHead}
        />
      </div>

      <footer className={styles.footer}>
        <p className={styles.paws}>
          <PawPrint className={styles.paw} />
          <PawPrint className={styles.paw} />
          <PawPrint className={styles.paw} />
        </p>
        <p>
          <strong>Meerkat Manor</strong> &mdash; a fan site, sloppyly
          claude-coded.
        </p>
        <p>Last updated: {LAST_UPDATED}</p>
        <p className={styles.joke}>
          No meerkats were disturbed in the making of this page.
        </p>
        <AnimationToggle />
      </footer>
    </div>
  );
}
