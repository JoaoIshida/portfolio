"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

  useEffect(() => {
    async function load() {
      try {
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
      }
    }

    load();
  }, [username, max]);

  if (error) {
    return (
      <p className="text-red-600 dark:text-red-400">
        Couldn’t load repos: {error}
      </p>
    );
  }

  const visible = repos.map((repo) => {
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

  return (
    <section
      id="github-repos"
      className="translate-y-[-3rem] mt-[1.5rem] scroll-mt-[4rem] md:scroll-mt-[5rem] lg:scroll-mt-[7rem]"
    >
      <p className="text-4xl font-bold border-b-2 border-zinc-400 mb-4">
        Latest&nbsp;GitHub&nbsp;Repos
      </p>

      {/* legend */}
      <div className="flex flex-wrap justify-center border border-zinc-400 rounded-md p-2 mb-4 gap-3">
        {STATUS_KEYWORDS.map((s) => (
          <span key={s} className="flex items-center gap-1 text-sm">
            {STATUS_ICON[s]} {s}
          </span>
        ))}
      </div>

      {/* repo cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((repo) => (
          <div
            key={repo.id}
            className="p-4 border border-black dark:border-white bg-light text-black dark:bg-dark dark:text-white rounded-md flex flex-col gap-3"
          >
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              {repo.name}
              {repo.status && (
                <span title={repo.status}>{STATUS_ICON[repo.status]}</span>
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
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-2 border bg-light dark:bg-dark border-black dark:border-white hover:bg-neutral-400 dark:hover:bg-neutral-700 text-center rounded-md"
              >
                Look&nbsp;repo
              </a>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-2 border bg-light dark:bg-dark border-black dark:border-white hover:bg-neutral-400 dark:hover:bg-neutral-700 text-center rounded-md"
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

