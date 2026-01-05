import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashok Baldaniya | Node.js Developer",
  description:
    "Node.js developer with 3 years of experience building web applications. Proficient in JavaScript, Express.js/Nest.js, MongoDB, and AWS. Strong focus on scalable back-end solutions and serverless architecture.",
  keywords: [
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "AWS",
    "Serverless",
    "Backend Developer",
    "Web Developer",
  ],
  authors: [{ name: "Ashok Baldaniya" }],
  openGraph: {
    title: "Ashok Baldaniya | Node.js Developer",
    description:
      "Node.js developer with 3 years of experience building scalable back-end solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
