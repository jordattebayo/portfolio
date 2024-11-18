import type { Project } from '../interfaces/project';

export const projectData: Project[] = [
  {
    id: '0',
    date: '01-01-2023',
    slug: 'amplifier-creative',
    title: 'Amplifier Creative',
    description: 'A website for a creative agency.',
    image: {
      src: '/amplifierScreenshot.png',
      placeholder: "Amplifier Creative's website",
      dimensions: {
        width: '620',
        height: '358',
      },
    },
    role: 'Developer',
    difficulties:
      'Creating a meaningful user interface with animations and unique scroll experiences',
    solution:
      'Used a combination of research and trial and error to develop a from scratch solution',
    features: 'Complete website with CMS integration',
    tech: 'JavaScript, ReactJS, GraphQL, Gatsby, Netlify CMS',
    live: 'https://amplifiercreative.com',
    git: 'https://github.com/AmplifierCreative/website',
  },
  {
    id: '1',
    date: '01-01-2023',
    slug: 'slate',
    title: 'React Line Chart for Slate.host',
    description:
      'A React based component that accepts data and creates a SVG line chart.',
    image: {
      src: '/chartScreenshot.png',
      placeholder: 'An SVG Line Chart',
      dimensions: {
        width: '384',
        height: '358',
      },
    },
    role: 'Developer',
    difficulties:
      'Creating logic to graphically represent differences in dynamically loaded content',
    solution:
      'Use a variety of sorting functions and algorithms to parse incoming data using as few fixed numbers as possible',
    features: 'Dynamically builds line chart',
    tech: 'JavaScript, React, Emotion',
    live: 'https://slate.host/_/system/line-chart',
    git: 'https://github.com/filecoin-project/slate/tree/main/components/stats',
  },
  {
    id: '2',
    date: '01-01-2023',
    slug: 'travel-planner-app',
    title: 'Travel Planner App',
    description:
      'A frameworkless application that shows location based information based on the users travel itenerary.',
    image: {
      src: '/travel-app.gif',
      placeholder: 'A gif of the travel planner app being used',
      dimensions: {
        width: '473',
        height: '409',
      },
    },
    role: 'Developer, Designer',
    difficulties: 'API calls dependent on other API calls',
    solution:
      'Utilize local storage and a set timeout function to store data and run subsequent API calls',
    features:
      'Local storage paired with service workers to hold planned data even after user exits the browser',
    tech: 'HTML, SASS, JavaScript, NodeJs, ExpressJS, Webpack, Babel',
    live: 'http://jordattebayos-travel-planner.herokuapp.com/',
    git: 'https://github.com/jordattebayo/Travel-Planner-App',
  },
  {
    id: '3',
    date: '01-01-2023',
    slug: 'lee',
    title: 'Lee® Indigood',
    description: 'A landing marketing page for Lee Jeans.',
    image: {
      src: '/desktopLeeIndigoodMock.png',
      placeholder: 'A mockup of a Lee Webpage',
      dimensions: {
        width: '600',
        height: '408',
      },
    },
    role: 'Developer',
    difficulties:
      'Creating responsive layouts between mobile, tablet, and desktop views.',
    solution:
      "Using Bootstrap's grid system to create responsive layouts based on popular viewport breakpoints.",
    features: 'Responsive layout',
    tech: 'Bootstrap, Salesfoce Commerce Cloud, HTML, CSS',
    live: '',
    git: '',
  },
  {
    id: '4',
    date: '01-01-2023',
    slug: 'news',
    title: 'Evaluate News NLP',
    description: 'A small app that integrates with a news API',
    image: {
      src: '/languageScreenshot.png',
      placeholder: 'A small news api integration app',
      dimensions: {
        width: '540',
        height: '347',
      },
    },
    role: 'Developer',
    difficulties:
      'Making sure that text submitted was valid to pass along to Aylien API',
    solution:
      'Used regular expressions and JavaScript uri methods to validate text',
    features:
      'Uses language processing to provide feedback on statements submitted',
    tech: 'HTML, SASS, JavaScript, NodeJs, ExpressJS, Webpack',
    live: '',
    git: 'https://github.com/jordattebayo/fend/tree/refresh-2019/projects/evaluate-news-nlp',
  },
  {
    id: '5',
    date: '01-01-2023',
    slug: 'photo-blog',
    title: 'Photo Blog',
    description: 'A simple photo blog',
    image: {
      src: '/blogScreenshot.jpg',
      placeholder: 'A sample photo blog',
      dimensions: {
        width: '420',
        height: '350',
      },
    },
    role: 'Developer, Designer',
    difficulties: 'Layout and design of photos within article',
    solution:
      'Utilized large size photos to pause the reader while still showing some text to indicate there is more to read.',
    features: 'General layout for posts and home page',
    tech: 'HTML, CSS',
    live: '',
    git: 'https://github.com/jordattebayo/Udacity-Blog-Project',
  },
];
