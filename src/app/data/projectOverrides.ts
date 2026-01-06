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
    description: "AI-driven race photo platform using InsightFace models and pgvector for facial recognition and sub-second photo-to-user matching across thousands of images. Improved face detection accuracy by 4% through advanced image preprocessing, angle detection, and model optimization. Built automated bulk photo processing pipeline with parallelized API infrastructure, reducing processing time by 60% through distributed computing and intelligent queue management. Designed vector database architecture with pgvector for face embeddings, supporting cosine similarity search across large-scale datasets.",
    html_url: "https://github.com/joaoishida/xlens",
    homepage: "https://www.xlens.ca/",
    status: "finished",
    hideCode: true,
    skills: [
      "Python",
      "AWS EC2",
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "InsightFace",
      "Supabase",
      "Docker",
      "Vector Search",
      "Face Recognition",
      "REST API"
    ]
  },
  {
    id: "watchhive",
    name: "WatchHive",
    description: "A comprehensive platform for discovering, tracking, and sharing movies and series. Features advanced filtering (genre, year, rating, streaming providers), personalized recommendations, user tracking (watched status, wishlist, series progress), custom lists, and JWT-based authentication. Built with Next.js 16, Supabase, and TMDB API integration.",
    html_url: "https://github.com/joaoishida/WatchHive",
    homepage: "https://whive.vercel.app",
    status: "in-progress",
    skills: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "JWT Authentication",
      "TMDB API",
      "Tailwind CSS",
      "REST API",
      "User Tracking",
      "Content Discovery"
    ]
  },
  {
    id: "uscanstartup",
    name: "US CAN Startup",
    description: "Startup accelerator platform where I improved SEO rankings and page performance, increasing organic visibility and user retention by 70%. Integrated Sanity CMS for automated blog posting and content management, allowing the team to publish and update content without engineering support. Built a custom chatbot system with built-in system knowledge and classification capabilities, using similarity matching algorithms, topic-based response generation, and RAG (Retrieval-Augmented Generation) for improved knowledge retrieval and context-aware responses.",
    html_url: "https://github.com/joaoishida/uscanstartup",
    homepage: "https://www.uscanstartup.com",
    status: "finished",
    hideCode: true,
    skills: [
      "Next.js 15",
      "TypeScript",
      "Python",
      "Sanity CMS",
      "AWS EC2",
      "Supabase",
      "RAG",
      "LLM",
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