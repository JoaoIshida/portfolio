export type Status = "finished" | "in-progress" | "paused" | "planned";

export interface ProjectOverride {
  img?: string;
  website?: string;
  description?: string;
  hide?: boolean;
  status?: Status;
  hideCode?: boolean;
  video?: string;
  skills?: string[];
}

export const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  Blokus_game: {
    img: "/blokus.png",
    website: "https://joaoishida.github.io/Blokus_game/",
  },
  hangmangame: {
    img: "/hangman.png",
  },
  // Example of a project NOT on GitHub
  // MyCustomProject: {
  //   img: "/custom.png",
  //   website: "https://mycustomproject.com",
  //   description: "This is a custom project not on GitHub.",
  // },
  // Added GitHub projects with descriptions
  xlens: {
    description: "AI-powered photo recognition platform with advanced face detection, vectorization for face search, and ANN for face similarity. Built with Next.js, Python backend, and real-time image processing capabilities.",
    hideCode: true,
    skills: [
      "Python",
      "AWS",
      "React",
      "Real-time Image Processing",
      "Vectorization",
      "ANN (Approximate Nearest Neighbor)"
    ],
  },
  uscanstartup: {
    description: "Modern startup website with SEO optimization and scalable design. Features responsive UI, performance optimization, and content management system integration.",
    website: "https://uscanstartup.com",
    hideCode: true,
    skills: [
      "Python",
      "PostgreSQL",
      "React",
      "Django",
      "AWS",
      "REST API",
      "CI/CD",
      "SEO"
    ],
  },
  "movie-recommender": {
    description: "Intelligent movie recommendation system using machine learning algorithms. Processes large datasets, implements collaborative filtering, and provides personalized suggestions.",
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Collaborative Filtering",
      "Data Processing"
    ]
  },
  GeoCreate: {
    description: "Interactive mapping and location-based application with real-time data visualization. Combines geospatial technologies with modern web development practices.",
    hideCode: true,
    skills: [
      "JavaScript",
      "React",
      "Geospatial Visualization",
      "Real-time Data"
    ]
  },
  NOVA: {
    description: "Advanced AI chatbot with database integration and agent-based architecture. Features natural language processing, conversation memory, and scalable backend services.",
    video: "/cura-pitch.mp4",
    skills: [
      "Python",
      "Natural Language Processing",
      "Database Integration",
      "Agent-based Architecture",
      "Backend Development",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API"
    ],
  },
}; 