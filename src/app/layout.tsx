// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sokoverse",
  description: "Trackable site with Plausible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Official Plausible script with outbound links + tagged events */}
        <script
          defer
          data-domain="sokoverse.is-cool.dev"
          src="https://plausible.io/js/script.file-downloads.outbound-links.tagged-events.js"
        ></script>

        {/* ✅ Optional inline setup for custom events */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments)
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
