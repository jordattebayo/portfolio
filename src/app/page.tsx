import Projects from './components/projects';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="md:w-[850px] px-3 w-full mx-auto">
        <Projects />
      </div>
    </main>
  );
}
