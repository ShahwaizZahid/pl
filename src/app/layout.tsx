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
      q?: any[];
      (...args: any[]): void;
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
        <script
          defer
          data-domain="pl-git-main-shahwaizzahids-projects.vercel.app"
          src="https://plausible.io/js/script.file-downloads.outbound-links.tagged-events.js"
        ></script>
        {/*
  Inject Plausible initialization script using dangerouslySetInnerHTML
*/}
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
