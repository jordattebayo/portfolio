import type { Project } from '../../lib/project-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(data: ProjectCardProps) {
  const {
    project: { title, description },
  } = data;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
