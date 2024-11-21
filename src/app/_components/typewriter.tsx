import Link from 'next/link';

interface Props {
  animate: boolean;
  toggleAnimate: () => void;
}

export default function Typewriter(props: Props) {
  console.log(props);
  return (
    <>
      <Link
        href="/"
        className="font-[family-name:var(--font-source-sans-3-bold)] text-4xl leading-snug px-6 pl-1 hover:underline text-[var(--highlight-inverse)] bg-[var(--highlight)] hover:bg-[var(--highlight-inverse)] hover:text-[var(--highlight)] tracking-tight"
      >
        jordan booker dot dev
      </Link>
    </>
  );
}
