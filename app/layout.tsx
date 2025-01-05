import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Опановуємо React",
  description: "Вивчайте React з нуля українською",
  manifest: "/master-react-course/site.webmanifest",
  icons: {
    icon: [
      { url: "/master-react-course/favicon.ico" },
      { url: "/master-react-course/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/master-react-course/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/master-react-course/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
