import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meerkat Manor",
  description: "A meerkat fan site.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
