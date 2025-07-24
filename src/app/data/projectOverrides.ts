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
    description: "Advanced AI chatbot with database integration and agent-based architecture. Features natural language processing, conversation memory, and scalable backend services.",
    html_url: "https://github.com/joaoishida/nova",
    status: "finished",
    video: "/cura-pitch.mp4",
    hideCode: true,
    skills: [
      "Python",
      "Natural Language Processing",
      "Database Integration",
      "Agent-based Architecture",
      "Backend Development",
      "FastAPI",
      "PostgreSQL",
      "OpenAI API"
    ]
  },
  {
    id: "xlens",
    name: "Xlens",
    description: "AI-powered photo recognition platform with advanced face detection, vectorization for face search, and ANN for face similarity. Built with Next.js, Python backend, and real-time image processing capabilities.",
    html_url: "https://github.com/joaoishida/xlens",
    status: "in-progress",
    hideCode: true,
    skills: [
      "Python",
      "AWS",
      "React",
      "Real-time Image Processing",
      "Vectorization",
      "ANN (Approximate Nearest Neighbor)"
    ]
  },
  {
    id: "uscanstartup",
    name: "US CAN Startup",
    description: "Modern startup website with SEO optimization and scalable design. Features responsive UI, performance optimization, and content management system integration.",
    html_url: "https://github.com/joaoishida/uscanstartup",
    homepage: "https://www.uscanstartup.com",
    status: "finished",
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
    ]
  },
  {
    id: "geocreate",
    name: "GeoCreate",
    description: "Interactive mapping and location-based application with real-time data visualization. Combines geospatial technologies with modern web development practices.",
    html_url: "https://github.com/joaoishida/geocreate",
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
    description: "A Python app with SQLite and Tkinter to search Yelp data. Features business/user search, reviews, and friend requests. Includes setup scripts for DB creation, data import, and triggers.",
    html_url: "https://github.com/joaoishida/SQL-YELP",
    status: "finished",
    skills: ["Python", "SQLite", "Tkinter", "Data Processing"]
  },
  {
    id: "coursecompass",
    name: "CourseCompass",
    description: "An website to help students select courses and plan their degrees. Based on various course data such as ratings, reviews, calendar and more, students can acquire and share information with other students.",
    html_url: "https://github.com/joaoishida/CourseCompass",
    homepage: "https://coursecompass.vercel.app",
    status: "finished",
    skills: ["Web Development", "Course Planning", "Student Tools"]
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
]; 