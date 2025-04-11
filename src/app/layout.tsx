import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Crumrine Coding",
  description: "Web Dev Portfolio of Nicolas Crumrine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
