import { projectData } from '../../../lib/project-data';
import type { Project } from '../../../interfaces/project';

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: Project }) {
  const {
    id,
    slug,
    title,
    image,
    role,
    difficulties,
    solution,
    features,
    tech,
    live,
    git,
  } = await params;
  return (
    <div className="flex flex-col gap-1">
      <h3>{title}</h3>
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

      <a href={live} target="_blank" className="hover:underline w-fit">
        Live
      </a>
      <a href={git} target="_blank" className="hover:underline w-fit">
        GitHub
      </a>
    </div>
  );
}
