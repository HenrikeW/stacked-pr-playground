"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      <p className={styles.title}>Meerkat Manor</p>
      <nav aria-label="Main">
        <ul className={styles.list}>
          {routes.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.link}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
