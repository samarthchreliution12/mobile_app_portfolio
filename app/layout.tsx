import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Our Mobile Applications | Product Portfolio",
  description:
    "Explore our portfolio of mobile applications designed to solve real-world problems through intuitive experiences and scalable technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
