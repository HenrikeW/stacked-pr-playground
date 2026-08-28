import type { Metadata } from "next";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Meerkat Manor",
    template: "%s | Meerkat Manor",
  },
  description:
    "A hand-coded fan site for meerkat enthusiasts: fun facts, games and quizzes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="visually-hidden skip-link">
          Skip to main content
        </a>
        <div className="page-shell">
          <SiteHeader />
          {/* <main> lives here, not in each page, so the skip link has one
              stable target and the footer always follows the main content. */}
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
