import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className=" hover:bg-[var(--highlight-inverse)] w-fit">
        <Link
          href="/"
          className="text-4xl px-6 pl-1 hover:underline text-[var(--highlight-inverse)] bg-[var(--highlight)] hover:bg-[var(--highlight-inverse)] hover:text-[var(--highlight)]"
        >
          jordan booker dot dev
        </Link>
      </div>
      <p>
        Hi 👋🏽! My name is Jordan Booker, welcome to my professional page. I am a
        curious fullstack developer that is seriously in love with the web 🤓.
        Here you can find some projects that I am proud of. <br />
        <br />
        <i>Note: Pardon the dust as I work on modernizing my website.</i>
      </p>
    </>
  );
}
