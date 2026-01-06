"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { STATIC_PROJECTS, StaticProject, Status } from "../data/projectOverrides";

type Repo = StaticProject;

/* ───────── consts ───────── */
const STATUS_ICON: Record<Status, string> = {
  finished: "✅",
  "in-progress": "⏳",
  paused: "⛔",
  planned: "🚧",
};

export default function StaticProjects() {
  const [showAll, setShowAll] = useState(false);
  const viewMoreRef = useRef<HTMLButtonElement | null>(null);
  const [pendingScroll, setPendingScroll] = useState(false);

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

  // Use static projects data directly
  const allVisible = STATIC_PROJECTS;

  // Determine how many projects to show
  const getProjectLimit = () => {
    if (showAll) return allVisible.length;
    // Default limits: 6 for desktop, 4 for mobile
    return typeof window !== 'undefined' && window.innerWidth >= 1024 ? 6 : 4;
  };

  const visible = allVisible.slice(0, getProjectLimit());
  const hasMore = allVisible.length > getProjectLimit() && !showAll;

  return (
    <div>
      {/* Repo Cards */}
      <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((repo, index) => (
          <div
            key={repo.id}
            className={`card-interactive group p-6 h-full flex flex-col fade-in-up stagger-${Math.min(index % 6 + 1, 5)}`}
            style={{animationDelay: `${index * 0.1}s`}}
          >

            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {repo.name.replace(/[_-]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase())}
                </h3>
                {/* {repo.status && (
                  <div className="flex items-center gap-1">
                    <span 
                      title={repo.status.replace('-', ' ')}
                      className="text-lg transition-transform"
                    >
                      {STATUS_ICON[repo.status]}
                    </span>
                  </div>
                )} */}
              </div>

              {/* Project Image/Video */}
              {repo.img && (
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
                    <Image
                      src={repo.img}
                      width={500}
                      height={300}
                      alt={`${repo.name} preview`}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  </div>
                </div>
              )}
              
              {repo.video && (
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
                    <video
                      src={repo.video}
                      controls
                      muted
                      controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
                      disablePictureInPicture
                      className="w-full h-full object-cover transition-transform duration-300"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {repo.description || "No description available"}
              </p>

              {/* Skills/Tools Tags */}
              {repo.skills && repo.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.skills.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}              
            </div>

            {/* Action Buttons */}
            <div className="mt-auto flex gap-3">
              {repo.html_url && repo.html_url !== "#" && !repo.hideCode && (
              <a
                href={repo.html_url + '#readme'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-outline text-sm py-2 px-4 text-center hover:shadow-medium transition-all duration-200 group/btn"
              >
                <span className="group-hover/btn:text-white transition-colors">View More About Project</span>
              </a>
              )}
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${repo.html_url && repo.html_url !== "#" && !repo.hideCode ? "flex-1" : "w-full"} btn-primary text-sm py-2 px-4 text-center hover:shadow-medium transition-all duration-200`}
                >
                  {(repo.name === "Xlens" || repo.name === "US CAN Startup" || repo.name === "WatchHive") ? "View Website" : "Live Demo"}
                </a>
              )}

              {/* Custom status messages for specific projects */}
              {repo.name === "GeoCreate" && (
                <div className="w-full text-center py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600">
                  Not Available to Public Yet
                </div>
              )}

              {repo.name === "NOVA" && (
                <div className="w-full text-center py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-600">
                  Not Available to Public Yet
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More/Less Button */}
      {hasMore && (
        <div className="text-center mt-8 fade-in-up">
          <button
            ref={viewMoreRef}
            onClick={() => setShowAll(true)}
            className="view-more group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold transition-all duration-300 ease-out bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View More Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
      
      {/* View Less Button */}
      {showAll && allVisible.length > (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 6 : 4) && (
        <div className="text-center mt-8 fade-in-up">
          <button
            onClick={() => {
              setShowAll(false);
              setPendingScroll(true);
            }}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold transition-all duration-300 ease-out bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Less Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
      
      {/* View All Repositories Link */}
      {showAll && (
        <div className="text-center mt-8 fade-in-up">
          <a
            href="https://github.com/joaoishida?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hover-lift px-6 py-3 inline-flex items-center gap-2"
          >
            <span>View All Repositories</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}