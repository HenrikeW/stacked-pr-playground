import type { Metadata } from "next";
import { ANIMATION_BOOT_SCRIPT } from "./components/animation-preference";
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
      <head>
        {/* Must run before first paint, or animations flash on for a frame
            before the stored "off" preference is applied.

            dangerouslySetInnerHTML is safe here: the payload is a build-time
            constant with no request data or user input reaching it. Plain
            children would not work -- React escapes them as HTML, and entities
            are not decoded inside <script>, so the `&&` in the snippet would
            arrive at the JS parser as `&amp;&amp;`. */}
        <script dangerouslySetInnerHTML={{ __html: ANIMATION_BOOT_SCRIPT }} />
      </head>
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
