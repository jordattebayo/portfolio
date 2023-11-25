interface Dimensions {
    width: string;
    height: string;
}

interface Image {
    src: string;
    placeholder: string;
    dimensions: Dimensions;
}

interface Project {
    id: string;
    slug: string;
    title: string;
    image: Image;
    role: string;
    difficulties: string;
    solution: string;
    features: string;
    tech: string;
    live: string;
    git: string;
    screenshots?: any;
}

export default Project