import { Project } from '@/interfaces/project';
import { projectData } from './project-data';

export function getProjectSlugs() {
  return projectData.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  const data = projectData.find((project) => project.slug === slug);
  return { ...data } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  return projects;
}
