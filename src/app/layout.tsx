// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sokoverse",
  description: "Trackable site with Plausible",
};

// Extend the Window interface to include plausible
declare global {
  interface Window {
    plausible?: {
      q?: unknown[];
      (...args: unknown[]): void;
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Plausible script with correct domain */}
        <script
          defer
          data-domain="pl-git-main-shahwaizzahids-projects.vercel.app"
          src="https://plausible.io/js/script.file-downloads.outbound-links.tagged-events.js"
        ></script>

        {/* ✅ Safe inline setup for custom events */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function () {
                (window.plausible.q = window.plausible.q || []).push(arguments);
              };
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
