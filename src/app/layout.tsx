import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

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
        <nav className="md:w-[850px] w-full flex flex-col gap-6 mx-auto px-3 py-6 ">
          <Link href="/" className="text-4xl hover:underline">
            jordan booker dot dev
          </Link>
          <p>
            Hi 👋🏽! My name is Jordan Booker, welcome to my professional page. I
            am a curious fullstack developer that's seriously in love with the
            web 🤓. Here you can find some projects that I'm proud of. <br />
            <br />
            <i>Note: Pardon the dust as I work on modernizing my website.</i>
          </p>
        </nav>
        <div className="font-[family-name:var(--font-geist-sans)] my-16">
          {children}
        </div>
        <footer className="py-3 row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <div>
            &copy;{currentDate.getFullYear()} Jordan Booker. All rights
            reserved.{' '}
          </div>
        </footer>
      </body>
    </html>
  );
}
