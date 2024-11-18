import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/api';
import type { Project } from '@/interfaces/project';

export default async function Project(props: Params) {
  const { slug } = await props.params;

  const project: Project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const {
    title,
    role,
    image,
    tech,
    features,
    difficulties,
    solution,
    live,
    git,
  } = project;

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="md:w-[850px] px-3 w-full mx-auto">
        <article className="flex flex-col gap-3">
          <Image
            src={`/projects${image.src}`}
            alt={image.placeholder}
            width={Number(image.dimensions.width)}
            height={Number(image.dimensions.height)}
          />
          <h3 className="text-4xl">{title}</h3>
          <div className="flex flex-row">
            <p>Role:&nbsp;</p>
            <p>{role}</p>
          </div>
          <div className="flex flex-row">
            <p>Tech stack:&nbsp;</p>
            <p>{tech}</p>
          </div>
          <div className="flex flex-row">
            <p>Features:&nbsp;</p>
            <p>{features}</p>
          </div>
          <div className="flex flex-row">
            <p>Challenges:&nbsp;</p>
            <p>{difficulties}</p>
          </div>
          <div className="flex flex-row">
            <p>Solution:&nbsp;</p>
            <p>{solution}</p>
          </div>

          <a href={live} target="_blank" className="underline w-fit">
            Live site
          </a>
          <a href={git} target="_blank" className="underline w-fit">
            Source code
          </a>
        </article>
      </div>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return notFound();
  }

  const title = `${project.title} | Jordan Booker's Project`;

  return {
    title,
    openGraph: {
      title,
      images: [project.image.src],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}
