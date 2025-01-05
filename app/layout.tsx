import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Опановуємо React',
  description: 'Вивчайте React з нуля українською',
  keywords: 'React, JavaScript, TypeScript, веб-розробка, фронтенд, курси українською',
  manifest: '/master-react-course/site.webmanifest',
  authors: [{ name: 'Andrii Polishchuk' }],
  metadataBase: new URL('https://a-polishchuk.github.io/master-react-course'),
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://a-polishchuk.github.io/master-react-course',
    title: 'Опановуємо React',
    description: 'Вивчайте React з нуля українською',
    siteName: 'Опановуємо React',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Опановуємо React',
    description: 'Вивчайте React з нуля українською',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/master-react-course/favicon.ico' },
      { url: '/master-react-course/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/master-react-course/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      {
        url: '/master-react-course/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Course',
              name: 'Опановуємо React',
              description: 'Вивчайте React з нуля українською',
              provider: {
                '@type': 'Person',
                name: 'Andrii Polishchuk',
              },
              inLanguage: 'uk',
              educationalLevel: 'Beginner to Advanced',
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8R54962S0D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8R54962S0D');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
