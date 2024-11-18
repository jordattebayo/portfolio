import ProjectCard from './project-card';
import { projectData } from '../../lib/project-data';
import type { Project } from '@/interfaces/project';

export default function Projects() {
  return (
    <div>
      <ul className="flex flex-col gap-6">
        {projectData.map((project: Project) => (
          <li key={project.id} className="w-fit lg:list-disc hover:underline">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
