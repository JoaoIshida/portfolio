"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string;
};

type Status = "finished" | "in-progress" | "paused" | "planned";

const STATUS_ICON: Record<Status, string> = {
  finished: "✅",
  "in-progress": "⏳",
  paused: "⛔",
  planned: "🚧",
};


/* ──────────────── 1. Custom rules go here ──────────────── */
const OVERRIDES: Record<
  string,
  | {
      img?: string;      // e.g. "/blokus.png"
      website?: string;  // e.g. "https://blokus.io"
      description?: string;
      hide?: boolean;    // true = don’t show at all
      status?: Status;
    }
  | undefined
> = {
  Blokus_game: {
    img: "/blokus.png",
    website: "https://joaoishida.github.io/Blokus_game/",
    status: "finished",
  },
  hangmangame: {
    img: "/hangman.png",
    status: "finished",
    /* ignore to keep GitHub homepage field instead of hard-coding website */
  },
  "dio_challenges": { hide: true }, // example of hidden repo
};

/* ───────────────────────────────────────────────────────── */
export default function GithubRepos({
  username = "joaoishida",
  max = 15,
}: {
  username?: string;
  max?: number;
}) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  /* ── fetch repos once ────────────────────────────────── */
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${max}&sort=pushed`
    )
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub ${r.status}`);
        return r.json();
      })
      .then((data: Repo[]) => setRepos(data))
      .catch((e) => setError(e.message));
  }, [username, max]);

  if (error) {
    return (
      <p className="text-red-600 dark:text-red-400">
        Couldn’t load repos: {error}
      </p>
    );
  }

  /* ── merge overrides & filter hidden repos ───────────── */
  const visible = repos
    .map((repo) => {
      const o = OVERRIDES[repo.name] ?? {};
      return { ...repo, ...o, homepage: o.website ?? repo.homepage, o };
    })
    .filter((r) => !(r.o?.hide));

  /* ── render ──────────────────────────────────────────── */
  return (
    <section
      id="github-repos"
      className="translate-y-[-3rem] mt-[1.5rem] scroll-mt-[4rem] md:scroll-mt-[5rem] lg:scroll-mt-[7rem]"
    >
      <p className="text-4xl font-bold border-b-2 border-zinc-400 mb-4">
        Latest GitHub Repos 
      </p>
        <div className="flex justify-center border-b-2 border border-zinc-400 m-4 rounded-md">
            <h2>status indicates progress which are:</h2>
            <ul className="flex gap-2">
                {Object.entries(STATUS_ICON).map(([status, icon]) => (
                <li key={status} className="flex items-center gap-1">
                    <span>{icon}</span>
                    <span>{status}</span>
                </li>
                ))}
            </ul>
        </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((repo) => (
          <div
            key={repo.id}
            className="p-4 border border-black dark:border-white bg-light text-black dark:bg-dark dark:text-white hover:bg-neutral-700 rounded-md flex flex-col gap-3"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
            <span>{repo.name}</span>
            {repo.o?.status && (
                <span title={repo.o.status} >
                  {STATUS_ICON[repo.o.status]}
                </span>
            )}
            </h3>

            {repo.o?.img && (
              <Image
                src={repo.o.img}
                width={500}
                height={300}
                alt={`${repo.name} preview`}
                className="rounded-md"
              />
            )}

            <p className="text-md mb-2">
              {repo.description ?? "No description"}
            </p>

            <div className="mt-auto flex gap-2">
              {/* View code (always) */}
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2 border bg-light dark:bg-dark border-black dark:border-white hover:bg-neutral-700 text-center"
              >
                Look&nbsp;repo
              </a>

              {/* Live site (only if provided) */}
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2 border bg-light dark:bg-dark border-emerald-600 hover:bg-neutral-700 text-center"
                >
                  Look&nbsp;website/app
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
