import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapist Dashboard",
  description: "A dashboard application for therapists",
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
