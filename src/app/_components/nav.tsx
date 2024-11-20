'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from './header';
import { ABOUT_PATH } from '@/lib/constants';
import { DarkTheme, Theme } from '@/interfaces/theme';

function getThemeText(theme: Theme | undefined) {
  if (theme === undefined) return '    ';
  return theme === 'light' ? '☼ Light' : '☾ Dark';
}

const updateTheme = (newTheme: string, oldTheme?: string) => {
  const root = document.querySelector('html');
  root?.classList.add(`${newTheme}-theme`);
  if (oldTheme) {
    root?.classList.remove(`${oldTheme}-theme`);
  }
};

function getPortfolioText(basePath: string, projectsPath?: string | undefined) {
  console.log(basePath, projectsPath);
  if (basePath === 'projects' && projectsPath != '') {
    return '← Back';
  } else if (basePath === '') {
    return 'Portfolio';
  } else {
    return 'Portfolio';
  }
}

export default function Nav() {
  const pathname = usePathname();
  const pathsArr = pathname.split('/');
  const basePath = pathsArr[1];
  const projectsPath = pathsArr[2];

  //default theme is light
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    async function checkLocalStorageForTheme() {
      try {
        const storedTheme = await localStorage.getItem('theme');
        if (
          (storedTheme && storedTheme === 'dark') ||
          storedTheme === 'light'
        ) {
          return storedTheme;
        }
      } catch {
        console.error('Failed to access local storage');
      }
    }
    function checkPreferredColorScheme() {
      console.log('checking for preferred color scheme');
      if (!window.matchMedia) {
        //matchMedia method not supported
        return undefined;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //OS theme setting detected as dark
        return 'dark';
      }
    }
    let initTheme: Theme = 'light';
    // Check for a stored theme, otherwise check for a preferred color scheme
    checkLocalStorageForTheme()
      .then((storedTheme) => {
        const preferredTheme: DarkTheme | undefined =
          checkPreferredColorScheme();

        if (storedTheme === 'dark' || storedTheme === 'light') {
          initTheme = storedTheme;
          setTheme(initTheme);
          if (typeof window !== undefined) {
            document.querySelector('html')?.classList.add(`${initTheme}-theme`);
          }
        } else if (preferredTheme) {
          initTheme = preferredTheme;
        }
      })
      .catch((err) => {
        console.error(err);
        const preferredTheme: DarkTheme | undefined =
          checkPreferredColorScheme();
        if (preferredTheme) {
          initTheme = preferredTheme;
        }
      })
      .finally(() => {
        setTheme(initTheme);
        if (typeof window !== undefined) {
          document.querySelector('html')?.classList.add(`${initTheme}-theme`);
        }
      });
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
      updateTheme('light', 'dark');
    } else {
      setTheme('dark');
      updateTheme('dark', 'light');
    }
  }

  return (
    <div className="md:w-[850px] w-full flex flex-col gap-6 mx-auto px-3 py-6 pb-3">
      <Header />
      <nav className="flex flex-row gap-6 text-xl">
        <Link
          href="/"
          className={`${!basePath ? 'active' : ''} hover:underline`}
        >
          {getPortfolioText(basePath, projectsPath)}
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
        <button onClick={toggleTheme}>{getThemeText(theme)}</button>
      </nav>
    </div>
  );
}
