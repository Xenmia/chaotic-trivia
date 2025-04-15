import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaos Trivia",
  description: "A chaotic trivia game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
