"use client";

import { useEffect, useRef, useState } from "react";
import { SkeletonExperience } from "./LoadingSkeleton";
import Image from "next/image";

type Experience = {
  id: string;
  title: string;
  company: string;
  logo: string;
  date: string;
  duration: string;
  startDate: string; // YYYY-MM format for sorting
  endDate: string;   // YYYY-MM format for sorting
  technologies: string[];
  achievements: string[];
  companyWebsite?: string;
  employmentType?: string;
};

const EXPERIENCES: Experience[] = [
  {
    id: "sfu",
    title: "Full Stack Developer",
    company: "SFU Surge",
    logo: "/sfu-surge-logo.jpeg",
    date: "Oct 2023 - Dec 2024",
    duration: "15 months",
    startDate: "2023-10",
    endDate: "2024-12",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB", "REST API", "Serverless", "Node.js"],
    achievements: [
      "Optimized a responsive UI and conducted user research for a better UX across devices, developing a web application using Next.js, React, and ensuring accessibility to help students plan their graduation",
      "Led the project to become a finalist in the Coast Capital Venture Prize (Chang Institute), collaborating with a team and designing a business plan for the project",
      "Reduced data recovery time by 40% by creating a serverless Rest API to manage diverse information such as course evaluations, user authentication, and professor details",
      "Improved system performance and scalability by implementing a MongoDB database to query data in under 1 second, while storing and retrieving over 10k course-related data"
    ],
    companyWebsite: "https://sfusurge.com/",
    employmentType: "Part-Time"
  },
  {
    id: "proa",
    title: "Developer Intern",
    company: "Proa.AI",
    logo: "/proa-logo.png",
    date: "May 2024 - Dec 2024",
    duration: "8 months",
    startDate: "2024-05",
    endDate: "2024-12",
    technologies: ["Python", "SQL", "Data Visualization", "AI Chat Curation", "OpenAI", "IBM Watson", "NLP", "Testing", "CI/CD", "Agile"],
    achievements: [
      "Increased system efficiency by 62% by automating chatbot management, identifying patterns to improve AI accuracy and minimize manual interventions, utilizing OpenAI model to monitor performance, and analyze response times",
      "Achieved strong user and client approval by creating comprehensive documentation, conducting training sessions, and refining chatbot interactions. Leveraged IBM Watson and backend enhancements to improve intent recognition, Natural Language Understanding (NLU), and dialog management",
      "Boosted system reliability by 30% through automated E2E testing, identifying potential failure points, simulation of real-world scenarios, and implementing debugging strategies to ensure production stability",
      "Improved conversational accuracy by 12% through rigorous QA testing, ensuring expected outputs, fixing errors, documenting results, and providing feedback to the development team to improve the overall user experience",
      "Built an interactive data dashboard for the clients page, similar to Power BI, enabling real-time monitoring and visualization of key chatbot performance metrics to support client decision-making",
      "Used Python to automate repetitive data processing and reporting tasks, increasing efficiency and reducing manual workload"
    ],
    companyWebsite: "https://proa.ai",
    employmentType: "Full-Time Co-op"
  },
  {
    id: "providence",
    title: "Software Engineer",
    company: "Providence Health Care",
    logo: "/providence-logo.jpg",
    date: "Jan 2025 - Apr 2025",
    duration: "4 months",
    startDate: "2025-01",
    endDate: "2025-04",
    technologies: ["AI LLM", "Python", "Django", "REST API", "PostgreSQL", "Waterfall SDLC", "pgvector", "RAG Pipeline", "React", "ETL"],
    achievements: [
      "Reduced costs by 100% by deploying a local LLM to handle medical inquiries, ensuring faster processing times and data privacy, providing security of data and fast responses",
      "Improved response accuracy by 55% and reduced processing time by 30% by integrating pgvector for efficient storage and retrieval of medical data, and utilizing a RAG pipeline to inject personalized medical data into LLM prompts",
      "Improved system performance and security through the integration of a REST API in Django, connecting a PostgreSQL backend to a React frontend, organizing data flow, and enabling real-time communication for the full project stack",
      "Enhanced project delivery by implementing Waterfall SDLC, conducting weekly client meetings and user research",
      "Developed a conversational AI agent that increased patient interaction by 45%, allowing them to efficiently manage appointments and medications, thus improving user experience and accessibility",
      "Built an LLM-powered ETL pipeline to convert user-entered text into structured JSON, enabling clean data flow between frontend and backend systems"
    ],
    companyWebsite: "https://www.providencehealthcare.org",
    employmentType: "Full-Time Contract"
  },
  {
    id: "xlens",
    title: "Technical Lead Developer",
    company: "Xlens",
    logo: "/xlens-logo.png",
    date: "May 2025 - Present",
    duration: "4 months",
    startDate: "2025-05",
    endDate: "Present",
    technologies: ["Python", "AWS EC2", "InsightFace", "PostgreSQL", "pgvector", "Docker", "Vector Search", "Face Recognition", "Image Processing"],
    achievements: [
      "Architected AI-powered race photo platform processing thousands of images with state-of-the-art facial recognition, deploying optimized models and scalable pipelines",
      "Designed and implemented robust database architecture leveraging pgvector and high-dimensional face embeddings for advanced image similarity search at scale",
      "Engineered an automated pipeline for bulk photo upload, extraction, and metadata analysis leveraging Supabase storage, PostgreSQL, and custom SQL procedures",
      "Optimized database performance and AWS EC2 workflows through strategic indexing and batch processing, enabling fast and reliable photo-to-user matching across large datasets",
      "Reduced processing time and improved throughput with parallelized AWS APIs, automated pipelines, and advanced database triggers",
      "Built full-stack REST APIs for photo and metadata management, enhancing processing speed and integration with AWS EC2 infrastructure"
    ],
    companyWebsite: "https://xlens.ca",
    employmentType: "Full-Time"
  },
  {
    id: "uscanstartup",
    title: "Technical Lead Developer",
    company: "US CAN Startup",
    logo: "/uscan-logo.jpeg",
    date: "May 2025 - Present",
    duration: "4 months",
    startDate: "2025-05",
    endDate: "Present",
    technologies: ["Next.js 15", "TypeScript", "Sanity CMS", "AWS", "SEO Optimization", "REST API", "Vercel", "Performance Optimization"],
    achievements: [
      "Increased main website visibility and retention by 70% through improved SEO and scalable AWS-based architecture",
      "Redesigned and developed the company website, incorporating dynamic post pages, SEO metadata, and performance optimization—significantly improving search engine visibility",
      "Led multiple startup incubator initiatives, delivering full-stack modern web solutions using Next.js, React, TypeScript, and cloud-native deployments",
      "Implemented comprehensive content management system integration with Sanity CMS for dynamic content delivery",
      "Enhanced website performance through optimization techniques and scalable cloud infrastructure"
    ],
    companyWebsite: "https://www.uscanstartup.com",
    employmentType: "Full-Time"
  }
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const viewMoreRef = useRef<HTMLButtonElement | null>(null);
  const [pendingScroll, setPendingScroll] = useState(false);
  
  // Sort experiences by startDate (descending - newest first)
  const sortedExperiences = [...EXPERIENCES].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  // Show only first 2 experiences initially
  const visibleExperiences = showAll ? sortedExperiences : sortedExperiences.slice(0, 2);
  const hasMore = sortedExperiences.length > 2;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (pendingScroll && viewMoreRef.current) {
      const rect = viewMoreRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Scroll so the button is 100px below the top of the viewport
      window.scrollTo({
        top: rect.top + scrollTop - 480,
        behavior: 'smooth',
      });
      setPendingScroll(false);
    }
  }, [pendingScroll]);

  if (!isVisible) {
    return <SkeletonExperience count={2} />;
  }

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Centered Timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary-500 via-primary-500 to-secondary-500 hidden lg:block"></div>
      
      <div className="space-y-4 md:space-y-12">
        {visibleExperiences.map((exp, index) => {
          // Format date for display dynamically
          const formatDate = (date: Date) => {
            const month = date.toLocaleDateString('en', { month: 'short' });
            const year = date.getFullYear().toString().slice(-2);
            return `${month} ${year}`;
          };
          
          const startDate = new Date(exp.startDate);
          const endDate = exp.endDate === "Present" ? null : new Date(exp.endDate);
          const displayDate = endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : `${formatDate(startDate)}-Present`;
          
          // Position on opposite side of cards
          const isCardOnRight = index % 2 === 1; // Cards alternate left/right
          const timePosition = isCardOnRight ? 'right-14' : 'left-14';
          
          return (
            <div
              key={exp.id}
              className={`relative fade-in-up stagger-${Math.min(index % 6 + 1, 5)}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Timeline Point - CSS positioned relative to this card */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-6 z-10">
                <div className="flex flex-col items-center gap-2">
                  {/* Company Logo Space - Always in center */}
                  <div className="w-12 h-12 bg-white dark:bg-darkLight rounded-full border-2 border-primary-200 dark:border-primary-800 shadow-md flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="w-8 h-8 object-contain rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Time Period - Positioned opposite to cards */}
                  <div className={`absolute ${timePosition} transform top-1/2 -translate-y-1/2`}>
                    <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 bg-white dark:bg-darkLight px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                      {displayDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content - alternating left and right */}
              <div className={`lg:grid lg:grid-cols-2 lg:gap-16 ${index % 2 === 0 ? 'lg:grid-flow-col' : 'lg:grid-flow-col-dense'}`}>
                <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                  <div 
                    id={`card-${exp.id}`}
                    className="card p-6"
                  >
                    {/* Duration badge */}
                    {(() => {
                      // Calculate duration from startDate and endDate
                      const startDate = new Date(exp.startDate);
                      const endDate = exp.endDate === "Present" ? new Date() : new Date(exp.endDate);
                      
                      // Calculate months difference more accurately
                      const startYear = startDate.getFullYear();
                      const startMonth = startDate.getMonth();
                      const endYear = endDate.getFullYear();
                      const endMonth = endDate.getMonth();
                      
                      let months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
                      
                      // Adjust for partial months
                      const startDay = startDate.getDate();
                      const endDay = endDate.getDate();
                      
                      // If end day is before start day, subtract one month
                      if (endDay < startDay) {
                        months--;
                      }
                      
                      // Ensure minimum of 1 month for any employment
                      if (months < 1) months = 1;
                      
                      const years = Math.floor(months / 12);
                      const remainingMonths = months % 12;
                      
                      let durationStr = "";
                      if (years > 0) {
                        durationStr += `${years} yr${years > 1 ? "s" : ""}`;
                      }
                      if (remainingMonths > 0) {
                        if (durationStr) durationStr += " ";
                        durationStr += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
                      }
                      
                      return (
                        <div className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-primary-200 dark:border-primary-800 mb-3">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {durationStr}
                        </div>
                      );
                    })()}
                    
                    {/* Employment Type badge */}
                    {exp.employmentType && (
                      <div className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-700 dark:text-green-300 text-xs rounded-full font-medium border border-green-200 dark:border-green-800 mb-3 ml-2">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                        </svg>
                        {exp.employmentType}
                      </div>
                    )}
                    
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors mb-1">
                        {exp.title}
                      </h3>
                      <div className="mb-1">
                        {exp.companyWebsite ? (
                          <a
                            href={exp.companyWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center gap-1 group/link"
                            title="Visit company website"
                          >
                            {exp.company}
                            <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </span>
                        )}
                      </div>
                      {/* Show time period on small screens */}
                      <p className="text-base text-gray-500 dark:text-gray-400 font-medium lg:hidden">
                        {exp.date}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-primary-200 dark:border-primary-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <span className="text-primary-500 mt-1 flex-shrink-0">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden lg:block"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More/Less Button */}
      {hasMore && (
        <div className="text-center mt-8 fade-in-up">
          <button
            ref={viewMoreRef}
            onClick={() => {
              if (showAll) {
                setShowAll(false);
                setPendingScroll(true);
              } else {
                setShowAll(true);
              }
            }}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold transition-all duration-300 ease-out bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">
              {showAll ? 'View Less Experience' : 'View More Experience'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
    </div>
  );
} 