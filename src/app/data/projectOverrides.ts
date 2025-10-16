export type Status = "finished" | "in-progress" | "paused" | "planned";

export interface StaticProject {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  status?: Status;
  img?: string;
  video?: string;
  hideCode?: boolean;
  skills?: string[];
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "nova",
    name: "NOVA",
    description: "Advanced AI-powered medical chatbot with database integration and agent-based architecture. Features natural language processing for medical inquiries, conversation memory, RAG pipeline for personalized responses, and scalable backend services with FastAPI and PostgreSQL.",
    html_url: "https://github.com/joaoishida/nova",
    status: "finished",
    video: "/cura-pitch.mp4",
    hideCode: true,
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LLM/RAG",
      "pgvector",
      "NLP",
      "Agent Architecture",
      "OpenAI API",
      "ETL Pipeline"
    ]
  },
  {
    id: "xlens",
    name: "Xlens",
    description: "Xlens is an AI-powered photo recognition platform that helps event participants find their photos from various events. The platform uses advanced facial recognition technology to automatically match photos with participants, making it easy for attendees to discover and download their event photos.",
    html_url: "https://github.com/joaoishida/xlens",
    homepage: "https://www.xlens.ca/",
    status: "finished",
    hideCode: true,
    skills: [
      "Python",
      "AWS EC2",
      "Next.js 15",
      "PostgreSQL",
      "pgvector",
      "InsightFace",
      "Supabase",
      "Docker",
      "Vector Search",
      "Face Recognition"
    ]
  },
  {
    id: "uscanstartup",
    name: "US CAN Startup",
    description: "US CAN Startup is a startup accelerator and incubator platform that supports entrepreneurs and startups in their journey to success. The website provides resources, networking opportunities, and guidance for emerging businesses looking to scale and grow in the North American market.",
    html_url: "https://github.com/joaoishida/uscanstartup",
    homepage: "https://www.uscanstartup.com",
    status: "finished",
    hideCode: true,
    skills: [
      "Next.js 15",
      "TypeScript",
      "Sanity CMS",
      "AWS",
      "SEO Optimization",
      "REST API",
      "Vercel",
      "Performance Optimization"
    ]
  },
  {
    id: "geocreate",
    name: "GeoCreate",
    description: "Interactive mapping and location-based application with real-time data visualization. Combines geospatial technologies with modern web development practices.",
    html_url: "https://github.com/joaoishida/geocreate",
    homepage: "https://impact-website2.vercel.app/",
    status: "finished",
    hideCode: true,
    skills: [
      "JavaScript",
      "React",
      "Geospatial Visualization",
      "Real-time Data"
    ]
  },
  {
    id: "react-native-app",
    name: "React Native App",
    description: "A React Native app built with Expo to explore Supabase features like auth (Google OAuth, email login), database, and cron jobs. Serves as a learning playground with file-based routing and web/Android simulator support.",
    html_url: "https://github.com/joaoishida/react-native-app",
    status: "finished",
    skills: ["React Native", "Expo", "Supabase", "Mobile Development"]
  },
  {
    id: "sql-yelp",
    name: "SQL YELP",
    description: "Yelp-like database system with hierarchical navigation for seamless user interaction. Features business/user search, reviews, and friend requests. Guaranteed data consistency through robust backend with SQL triggers and validation for data integrity.",
    html_url: "https://github.com/joaoishida/SQL-YELP",
    status: "finished",
    skills: [
      "Python",
      "SQLite",
      "Tkinter",
      "SQL Triggers",
      "Data Validation",
      "Database Design"
    ]
  },
  {
    id: "coursecompass",
    name: "CourseCompass",
    description: "Finalist in Coast Capital Venture Prize. A comprehensive web application helping students plan their graduation with course evaluations, ratings, and professor details. Features MongoDB database querying 10k+ records in under 1 second, serverless REST API, responsive UI, and reduced data recovery time by 40%.",
    html_url: "https://github.com/joaoishida/CourseCompass",
    homepage: "https://coursecompass.vercel.app",
    status: "finished",
    skills: [
      "Next.js",
      "React",
      "MongoDB",
      "REST API",
      "Serverless",
      "Node.js",
      "User Research",
      "Responsive Design"
    ]
  },
  // {
  //   id: "watchhive",
  //   name: "WatchHive",
  //   description: "Is the ultimate platform for discovering, tracking, and sharing your love for movies, series, and more. Designed with a community-first approach, Watch Hive offers a comprehensive suite of features to keep you informed and connected with fellow enthusiasts.",
  //   html_url: "https://github.com/joaoishida/WatchHive",
  //   status: "finished",
  //   skills: ["Web Development", "Community Features", "Entertainment"]
  // },
  {
    id: "movie-recommender",
    name: "Movie Recommender",
    description: "Intelligent movie recommendation system using machine learning algorithms. Processes large datasets, implements collaborative filtering, and provides personalized suggestions.",
    html_url: "https://github.com/joaoishida/movie-recommender",
    status: "finished",
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Collaborative Filtering",
      "Data Processing"
    ]
  },
  {
    id: "spacy-chatbot",
    name: "Spacy Chatbot",
    description: "A Python-based weather chatbot using spaCy for NLP and OpenWeatherMap API for real-time data. Extracts city names from user input and returns current weather. Focuses on NER, similarity matching, and chatbot logic. Future plans include context handling and multilingual support.",
    html_url: "https://github.com/joaoishida/spacy-chatbot",
    status: "finished",
    skills: ["Python", "NLP", "spaCy", "Chatbot", "Weather API"]
  },
  {
    id: "face-recognition",
    name: "Face Recognition",
    description: "This project implements a facial recognition-based login system, providing an additional layer of security and convenience for user authentication. It leverages computer vision and machine learning techniques to identify and verify users based on their facial features.",
    html_url: "https://github.com/joaoishida/face-recognition",
    status: "finished",
    skills: ["Python", "Computer Vision", "Face Recognition", "Authentication"]
  },
  {
    id: "blokus-game",
    name: "Blokus Game",
    description: "This project was made using PyQt5. It was a project from \"Introduction to Software Engineering\" course (CMPT276). This project and each of its phase, helped showcase the course learnings on software design and engineer basics.",
    html_url: "https://github.com/JoaoIshida/Blokus_game",
    homepage: "https://github.com/JoaoIshida/Blokus_game",
    status: "finished",
    img: "/blokus.png",
    skills: ["Python", "PyQt5", "Software Engineering"]
  },
  {
    id: "hangmangame",
    name: "Hangman Game",
    description: "This was a simple side project made using HTML, CSS, and mostly JavaScript.",
    html_url: "https://github.com/joaoishida/hangmangame",
    status: "finished",
    img: "/hangman.png",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "fifteen-puzzle",
    name: "Fifteen Puzzle AI Solver",
    description: "AI-powered puzzle solver implementing advanced heuristic search strategies. Reduced search time by 80% through A* and IDA* (Iterative Deepening A*) algorithms with optimized heuristics for efficient pathfinding and solution generation.",
    html_url: "https://github.com/joaoishida",
    status: "finished",
    hideCode: true,
    skills: [
      "Java",
      "AI Algorithms",
      "A* Search",
      "IDA*",
      "Heuristic Search",
      "Optimization"
    ]
  },
]; 