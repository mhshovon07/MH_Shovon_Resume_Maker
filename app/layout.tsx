import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MH SHOVON Resume Maker",
  description: "Build professional, ATS-friendly resumes with MH SHOVON Resume Maker.",
  icons: {
    icon: "/logo.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
