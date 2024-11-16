export type Project = {
  id: string;
  slug: string;
  title: string;
  image: {
    src: string;
    placeholder: string;
    dimensions: {
      width: string;
      height: string;
    };
  };
  role: string;
  difficulties: string;
  solution: string;
  features: string;
  tech: string;
  live: string;
  git: string;
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(data: ProjectCardProps) {
  const { project } = data;
  return (
    <div className="flex flex-col gap-1">
      <h3>{project.title}</h3>
      <div className="flex flex-row">
        <p>Role:&nbsp;</p>
        <p>{project.role}</p>
      </div>
      <div className="flex flex-row">
        <p>Tech stack:&nbsp;</p>
        <p>{project.tech}</p>
      </div>
      <div className="flex flex-row">
        <p>Features:&nbsp;</p>
        <p>{project.features}</p>
      </div>
      <div className="flex flex-row">
        <p>Challenges:&nbsp;</p>
        <p>{project.difficulties}</p>
      </div>
      <div className="flex flex-row">
        <p>Solution:&nbsp;</p>
        <p>{project.solution}</p>
      </div>

      <a href={project.live} target="_blank" className="hover:underline">
        Live
      </a>
      <a href={project.git} target="_blank" className="hover:underline">
        GitHub
      </a>
    </div>
  );
}
