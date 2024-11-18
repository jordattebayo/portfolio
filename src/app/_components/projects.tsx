import ProjectCard from './project-card';
import { projectData } from '../../lib/project-data';
import type { Project } from '../../lib/project-data';

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      {projectData.map((project: Project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
}
