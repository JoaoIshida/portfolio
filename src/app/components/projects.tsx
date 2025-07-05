"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SkeletonProjects } from "./LoadingSkeleton";

type Status = "finished" | "in-progress" | "paused" | "planned";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string;
  topics?: string[];   // ← filled after the per-repo /topics call
  status?: Status;     // ← derived from topic or override
};

/* ───────── consts ───────── */
const STATUS_ICON: Record<Status, string> = {
  finished: "✅",
  "in-progress": "⏳",
  paused: "⛔",
  planned: "🚧",
};

const STATUS_KEYWORDS: Status[] = [
  "finished",
  "in-progress",
  "paused",
  "planned",
];

/* Any per-repo tweaks go here (image, live-site URL, …) */
const OVERRIDES: Record<
  string,
  | {
      img?: string;
      website?: string;
      description?: string;
      hide?: boolean;
      status?: Status;
    }
  | undefined
> = {
  Blokus_game: {
    img: "/blokus.png",
    website: "https://joaoishida.github.io/Blokus_game/",
    // no status override → will fall back to topic, if present
  },
  hangmangame: {
    img: "/hangman.png",
    //no website override → will fall back to repo website, if present
  },
};

export default function GithubRepos({
  username = "joaoishida",
  max = 15,
}: {
  username?: string;
  max?: number;
}) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        
        /* 1️⃣ List repos (most-recent push first) */
        const listRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=${max}&sort=pushed`
        );
        if (!listRes.ok) throw new Error(`GitHub ${listRes.status}`);
        const list: Repo[] = await listRes.json();

        /* 2️⃣ For each repo, get its topics (1 extra request each) */
        const withTopics: Repo[] = await Promise.all(
          list.map(async (repo) => {
            try {
              const tRes = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/topics`,
                {
                  headers: { Accept: "application/vnd.github+json" },
                }
              );
              if (tRes.ok) {
                const { names } = await tRes.json();
                repo.topics = names as string[];
              }
            } catch {
              /* ignore topic failures; leave topics undefined */
            }
            return repo;
          })
        );

        setRepos(withTopics);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [username, max]);

  if (loading) {
    return <SkeletonProjects count={6} />;
  }

  if (error) {
    return (
      <p className="text-red-600 dark:text-red-400">
        Couldn’t load repos: {error}
      </p>
    );
  }

  const allVisible = repos.map((repo) => {
    const o = OVERRIDES[repo.name] ?? {};

    const topicStatus = repo.topics?.find((t) =>
      STATUS_KEYWORDS.includes(t as Status)
    ) as Status | undefined;

    const status = o.status ?? topicStatus;

    return {
      ...repo,
      ...o,
      homepage: o.website ?? repo.homepage,
      status,
      o,
    };
  })
  .filter((r) => !r.topics?.includes("hide"));

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
      {/* Legend */}
      <div className="card p-4 mb-8 fade-in-up">
        <div className="flex flex-wrap justify-center gap-6">
          {STATUS_KEYWORDS.map((s) => (
            <div key={s} className="flex items-center gap-2 text-sm font-medium">
              <span className="text-lg">{STATUS_ICON[s]}</span>
              <span className="capitalize text-gray-600 dark:text-gray-300">{s.replace('-', ' ')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Repo Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((repo, index) => (
          <div
            key={repo.id}
            className={`card-interactive group p-6 h-full fade-in-up stagger-${Math.min(index % 6 + 1, 5)}`}
            style={{animationDelay: `${index * 0.1}s`}}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {repo.name.replace(/[_-]/g, ' ')}
              </h3>
              {repo.status && (
                <div className="flex items-center gap-1">
                  <span 
                    title={repo.status.replace('-', ' ')}
                    className="text-lg hover:scale-125 transition-transform"
                  >
                    {STATUS_ICON[repo.status]}
                  </span>
                </div>
              )}
            </div>

            {/* Project Image */}
            {repo.o?.img && (
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
                  <Image
                    src={repo.o.img}
                    width={500}
                    height={300}
                    alt={`${repo.name} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
              {repo.description || "No description available"}
            </p>

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                    +{repo.topics.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-auto flex gap-3">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-outline text-sm py-2 px-4 text-center hover:shadow-medium transition-all duration-200 group/btn"
              >
                <span className="group-hover/btn:text-white transition-colors">View Code</span>
              </a>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary text-sm py-2 px-4 text-center hover:shadow-medium transition-all duration-200"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More/Less Button */}
      {hasMore && (
        <div className="text-center mt-8 fade-in-up">
          <button
            onClick={() => setShowAll(true)}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold transition-all duration-300 ease-out bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
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
              // Scroll to the end of visible projects
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                const visibleProjects = projectsSection.querySelectorAll('.project-card');
                if (visibleProjects.length > 0) {
                  const lastVisibleProject = visibleProjects[visibleProjects.length - 1];
                  lastVisibleProject.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
              }
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
            href={`https://github.com/${username}?tab=repositories`}
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

