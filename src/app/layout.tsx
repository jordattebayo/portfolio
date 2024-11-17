import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Nav from './_components/nav';
import Footer from './_components/footer';
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
  title: "Jordan Booker's Portfolio",
  description: "Jordan Booker's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentDate = new Date();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <div className="font-[family-name:var(--font-geist-sans)] my-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
