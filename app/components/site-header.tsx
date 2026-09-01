"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MeerkatHead, MeerkatSentry } from "./meerkat-art";
import styles from "./site-header.module.css";

const routes = [
  { href: "/", label: "Home" },
  { href: "/fun-facts", label: "Fun Facts" },
  { href: "/mini-game", label: "Mini Game" },
  { href: "/quiz", label: "Quiz" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <MeerkatSentry
          className={styles.mascot}
          headClassName={styles.mascotHead}
        />
        {/* Deliberately a <p>, not an <h1>: every page owns its own <h1>. */}
        <p className={styles.title}>
          <Link href="/" className={styles.titleLink}>
            Meerkat Manor
          </Link>
        </p>
        <MeerkatSentry
          className={`${styles.mascot} ${styles.mascotFlipped}`}
          headClassName={`${styles.mascotHead} ${styles.mascotHeadLate}`}
        />
      </div>

      <nav aria-label="Main">
        <ul className={styles.list}>
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.link}
                aria-current={pathname === href ? "page" : undefined}
              >
                {/* Classic rollover marker. Always occupies its space so
                    revealing it never nudges the layout. */}
                <MeerkatHead className={styles.navIcon} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
