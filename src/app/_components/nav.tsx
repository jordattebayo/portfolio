'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from './header';
import { PROJECT_PATH, ABOUT_PATH } from '@/lib/constants';

export default function Nav() {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1];
  return (
    <div className="md:w-[850px] w-full flex flex-col gap-6 mx-auto px-3 py-6 pb-3">
      <Header />
      <nav className="flex flex-row gap-6 text-xl">
        <Link
          href="/"
          className={`${
            basePath === PROJECT_PATH || !basePath ? 'active' : ''
          } hover:underline`}
        >
          Portfolio
        </Link>
        <Link
          href="/about"
          className={`${
            basePath === ABOUT_PATH ? 'active' : ''
          } hover:underline`}
        >
          About
        </Link>
        <a
          href="https://www.jordattebayo.dev"
          className="flex flex-row items-center gap-1 hover:underline"
          target="_blank"
        >
          Blog
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height=".65em"
            viewBox="0 0 512 512"
            className="fill-[--highlight]"
          >
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
          </svg>
        </a>
      </nav>
    </div>
  );
}
