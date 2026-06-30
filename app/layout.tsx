import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tumul Legal",
  description:
    "Professional legal services in Papua New Guinea. Case management, legal advice, and client support by Tumul Legal.",
  keywords: ["Tumul Legal", "Lawyer PNG", "Legal Services Papua New Guinea"],
  verification: {
    google: "j0An9A-FcXWMAUYTEJvDb33m4jkeNDm5Gk8qLQMUHhI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}