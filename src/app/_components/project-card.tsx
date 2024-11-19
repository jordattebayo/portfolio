import type { Project } from '@/interfaces/project';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard(data: ProjectCardProps) {
  const {
    project: { title, description, slug },
  } = data;
  return (
    <Link href={`projects/${slug}`} className="float-left">
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
