export type Project = {
  id: string;
  date: string;
  slug: string;
  title: string;
  description: string;
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
