import Link from "next/link";
import HitCounter from "./components/hit-counter";
import { MeerkatHead, MeerkatSentry } from "./components/meerkat-art";
import styles from "./page.module.css";

const cards = [
  {
    href: "/fun-facts",
    title: "Fun Facts",
    blurb:
      "Everything you never knew about the desert's smallest sentries. Updated whenever we learn something new.",
  },
  {
    href: "/mini-game",
    title: "Mini Game",
    blurb:
      "Test your reflexes against a mob of very alert meerkats. No download required!",
  },
  {
    href: "/quiz",
    title: "Quiz",
    blurb:
      "Ten questions stand between you and the title of Certified Meerkat Expert.",
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <MeerkatSentry className={styles.heroMascot} />
        <div>
          <h1 className={styles.heroTitle}>Welcome to Meerkat Manor!</h1>
          <p className={styles.heroLead}>
            Hello, fellow meerkat enthusiast, and welcome to my little corner of
            the web. Grab a seat on the nearest termite mound, keep one eye on
            the sky, and have a look around.
          </p>
          <p>
            This page is a labour of AI-tokens, vibe-coded and permanently
            unfinished &mdash; not at all as a good fan site should be.
          </p>
        </div>
      </section>

      <h2 className={styles.sectionHeading}>What&rsquo;s Inside</h2>
      <ul className={styles.cardGrid}>
        {cards.map(({ href, title, blurb }) => (
          <li key={href} className={styles.card}>
            <h3 className={styles.cardTitle}>
              <MeerkatHead className={styles.cardIcon} />
              {/* The link wraps the heading text, so it is keyboard-reachable
                  without any of the div-with-onClick nonsense. */}
              <Link href={href}>{title}</Link>
            </h3>
            <p className={styles.cardBlurb}>{blurb}</p>
          </li>
        ))}
      </ul>

      <section className={styles.factPanel}>
        <h2 className={styles.factHeading}>Did You Know?</h2>
        <p>
          A meerkat mob always posts at least one sentry while the others
          forage. The lookout stands upright on its hind legs and gives a
          distinct call for each kind of danger &mdash; one warning for a hawk
          overhead, another entirely for a snake on the ground.
        </p>
        <p>
          <Link href="/fun-facts">More fun facts &raquo;</Link>
        </p>
      </section>

      <HitCounter />
    </>
  );
}
