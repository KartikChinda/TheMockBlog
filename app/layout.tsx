import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mock Blog",
  description:
    "This is a blog website, which takes upon the mock data from the JSON placeholder API, and just displays it in a visually stunning manner.",
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
