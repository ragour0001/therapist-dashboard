import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Therapist Dashboard",
  description: "A personalized dashboard application for therapists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
