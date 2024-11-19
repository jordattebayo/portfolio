import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Nav from './_components/nav';
import Footer from './_components/footer';
import './globals.css';

const sourceSans3 = localFont({
  src: './fonts/SourceSans3-Regular.ttf',
  variable: '--font-source-sans-3',
  weight: '400',
});
const sourceSans3Light = localFont({
  src: './fonts/SourceSans3-Light.ttf',
  variable: '--font-source-sans-3-light',
  weight: '100',
});
const sourceSans3Bold = localFont({
  src: './fonts/SourceSans3-Bold.ttf',
  variable: '--font-source-sans-3-bold',
  weight: '700',
});
const sourceSans3Black = localFont({
  src: './fonts/SourceSans3-Black.ttf',
  variable: '--font-source-sans-3-black',
  weight: '700',
});

export const metadata: Metadata = {
  title: "Jordan Booker's Portfolio",
  description: "Jordan Booker's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-[family-name:var(--font-source-sans-3)] text-lg ${sourceSans3.variable} ${sourceSans3Light.variable} ${sourceSans3Bold.variable} ${sourceSans3Black.variable} antialiased text-[--foreground]`}
      >
        <Nav />
        <div className="font-[family-name:var(--font-source-sans-3)] my-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
