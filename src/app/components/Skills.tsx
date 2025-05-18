import React from "react";
import Image from "next/image";

type SkillItem = {
  light: string; // icon for light mode (white background)
  dark: string;  // icon for dark mode  (dark background)
  alt: string;
  href: string;
};

type SkillGroup = {
  title: string;
  items: SkillItem[];
};

function SkillIcon({ light, dark, alt, href }: SkillItem) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="shadow hover:opacity-90">
      <picture>
        <source srcSet={dark} media="(prefers-color-scheme: dark)" />
        <img src={light} alt={alt} title={alt} width={40} height={40} />
      </picture>
    </a>
  );
}

const icon = (id: string, theme: "light" | "dark") =>
  `https://skillicons.dev/icons?i=${id}&theme=${theme}`;

const skills: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      {
        light: icon("java", "light"),
        dark: icon("java", "dark"),
        alt: "Java",
        href: "https://www.java.com/",
      },
      {
        light: icon("c", "light"),
        dark: icon("c", "dark"),
        alt: "C",
        href: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      {
        light: icon("cpp", "light"),
        dark: icon("cpp", "dark"),
        alt: "C++",
        href: "https://isocpp.org/",
      },
      {
        light: icon("python", "light"),
        dark: icon("python", "dark"),
        alt: "Python",
        href: "https://www.python.org/",
      },
      {
        light: icon("kotlin", "light"),
        dark: icon("kotlin", "dark"),
        alt: "Kotlin",
        href: "https://kotlinlang.org/",
      },
      {
        light: icon("javascript", "light"),
        dark: icon("javascript", "dark"),
        alt: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        light: icon("typescript", "light"),
        dark: icon("typescript", "dark"),
        alt: "TypeScript",
        href: "https://www.typescriptlang.org/",
      },
      {
        light: icon("postgres", "light"),
        dark: icon("postgres", "dark"),
        alt: "SQL (PostgreSQL)",
        href: "https://www.postgresql.org/",
      },
      {
        light: icon("mongodb", "light"),
        dark: icon("mongodb", "dark"),
        alt: "NoSQL (MongoDB)",
        href: "https://www.mongodb.com/",
      },
      {
        light: icon("css", "light"),
        dark: icon("css", "dark"),
        alt: "CSS",
        href: "https://www.w3.org/Style/CSS/",
      },
      {
        light: icon("html", "light"),
        dark: icon("html", "dark"),
        alt: "HTML",
        href: "https://html.spec.whatwg.org/",
      },
      {
        light: icon("r", "light"),
        dark: icon("r", "dark"),
        alt: "R",
        href: "https://www.r-project.org/",
      },
    ],
  },
  {
    title: "Frontend Frameworks",
    items: [
      {
        light: icon("react", "light"),
        dark: icon("react", "dark"),
        alt: "React",
        href: "https://reactjs.org/",
      },
      {
        light: icon("nextjs", "light"),
        dark: icon("nextjs", "dark"),
        alt: "Next.js",
        href: "https://nextjs.org/",
      },
      {
        light: icon("tailwind", "light"),
        dark: icon("tailwind", "dark"),
        alt: "Tailwind CSS",
        href: "https://tailwindcss.com/",
      }, 
      {
        light: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png",
        dark: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png",
        alt: "Jetpack Compose",
        href: "https://developer.android.com/jetpack/compose",
      },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      {
        light: icon("nodejs", "light"),
        dark: icon("nodejs", "dark"),
        alt: "Node.js",
        href: "https://nodejs.org/",
      },
      {
        light: icon("django", "light"),
        dark: icon("django", "dark"),
        alt: "Django",
        href: "https://www.djangoproject.com/",
      },
      {
        light: icon("supabase", "light"),
        dark: icon("supabase", "dark"),
        alt: "Supabase",
        href: "https://supabase.com/",
      },
      {
        light: "https://cdn-lfs.hf.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/942cad1ccda905ac5a659dfd2d78b344fccfb84a8a3ac3721e08f488205638a0?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.svg%3B+filename%3D%22hf-logo.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1747554128&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0NzU1NDEyOH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzk0MmNhZDFjY2RhOTA1YWM1YTY1OWRmZDJkNzhiMzQ0ZmNjZmI4NGE4YTNhYzM3MjFlMDhmNDg4MjA1NjM4YTA%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=intGiF11EAGXxpD8WGJdS7wskdeQOfGmGj4W93Wqw13BWL2sX4pBG%7E-U0j72534f8HBmTwl2EodFu1FOWhTnmqD-5Z6RS-U6gJs%7EilC31gh29JBxXlH%7Edsp0a2t8am%7E5wBpQAhalW7Aq6ZOHpQAJOUZnbONKtU-kYfx1mgmoSdZsem8NKTba7Sr8rG%7EZYwWTqW%7EmyISsV-2WlecbMZ-4xqA06xoVeZZOjsh-PML7lAlXO-XuCu1bAaBD0ban9fdlJlSgzucVvBaHBYOI96Bp-GubxZns-CdVaCa3v-GqAPVglnX1IUD220STqA9pcyGRqp5XnLZ3LJxZWEDLK%7EVcRg__&Key-Pair-Id=K3RPWS32NSSJCE",
        dark: "https://cdn-lfs.hf.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/942cad1ccda905ac5a659dfd2d78b344fccfb84a8a3ac3721e08f488205638a0?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.svg%3B+filename%3D%22hf-logo.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1747554128&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0NzU1NDEyOH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5oZi5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzk0MmNhZDFjY2RhOTA1YWM1YTY1OWRmZDJkNzhiMzQ0ZmNjZmI4NGE4YTNhYzM3MjFlMDhmNDg4MjA1NjM4YTA%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=intGiF11EAGXxpD8WGJdS7wskdeQOfGmGj4W93Wqw13BWL2sX4pBG%7E-U0j72534f8HBmTwl2EodFu1FOWhTnmqD-5Z6RS-U6gJs%7EilC31gh29JBxXlH%7Edsp0a2t8am%7E5wBpQAhalW7Aq6ZOHpQAJOUZnbONKtU-kYfx1mgmoSdZsem8NKTba7Sr8rG%7EZYwWTqW%7EmyISsV-2WlecbMZ-4xqA06xoVeZZOjsh-PML7lAlXO-XuCu1bAaBD0ban9fdlJlSgzucVvBaHBYOI96Bp-GubxZns-CdVaCa3v-GqAPVglnX1IUD220STqA9pcyGRqp5XnLZ3LJxZWEDLK%7EVcRg__&Key-Pair-Id=K3RPWS32NSSJCE",
        alt: "Hugging Face",
        href: "https://huggingface.co/",
      },
      {
        light: "https://media.licdn.com/dms/image/v2/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=4QpsM1YKchLOfxVzpfFJAQWdkJ3vg3aKUWYL5tFVXXI",
        dark: "https://media.licdn.com/dms/image/v2/D5612AQE0nEZrPGv0JA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679583758253?e=2147483647&v=beta&t=4QpsM1YKchLOfxVzpfFJAQWdkJ3vg3aKUWYL5tFVXXI",
        alt: "REST API",
        href: "https://blog.postman.com/rest-api-examples/",
      },
      {
        light: icon("npm", "light"),
        dark: icon("npm", "dark"),
        alt: "NPM",
        href: "https://www.npmjs.com/",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        light: icon("docker", "light"),
        dark: icon("docker", "dark"),
        alt: "Docker",
        href: "https://www.docker.com/",
      },
      {
        light: icon("git", "light"),
        dark: icon("git", "dark"),
        alt: "Git",
        href: "https://git-scm.com/",
      },
      {
        light: icon("github", "light"),
        dark: icon("github", "dark"),
        alt: "GitHub",
        href: "https://github.com/",
      },
      {
        light: icon("vercel", "light"),
        dark: icon("vercel", "dark"),
        alt: "Vercel",
        href: "https://vercel.com/",
      },
      {
        light: icon("azure", "light"),
        dark: icon("azure", "dark"),
        alt: "Azure",
        href: "https://azure.microsoft.com/",
      },
      {
        light: icon("linux", "light"),
        dark: icon("linux", "dark"),
        alt: "Linux",
        href: "https://www.kernel.org/",
      },
      {
        light: "https://raw.githubusercontent.com/Whinarn/vscode-python-auto-venv/master/images/logo.png",
        dark: "https://raw.githubusercontent.com/Whinarn/vscode-python-auto-venv/master/images/logo.png",
        alt: "Python venv",
        href: "https://docs.python.org/3/library/venv.html",
      },
    ],
  },
  {
    title: "Databases & Data",
    items: [
      {
        light: icon("mongodb", "light"),
        dark: icon("mongodb", "dark"),
        alt: "MongoDB",
        href: "https://www.mongodb.com/",
      },
      {
        light: icon("postgres", "light"),
        dark: icon("postgres", "dark"),
        alt: "PostgreSQL",
        href: "https://www.postgresql.org/",
      },
      {
        light: "https://static-00.iconduck.com/assets.00/file-type-numpy-icon-950x1024-yxmpudmi.png",
        dark: "https://static-00.iconduck.com/assets.00/file-type-numpy-icon-950x1024-yxmpudmi.png",
        alt: "NumPy",
        href: "https://numpy.org/",
      },
      {
        light: "https://static-00.iconduck.com/assets.00/jupyter-icon-1748x2048-tdovt1s4.png",
        dark: "https://static-00.iconduck.com/assets.00/jupyter-icon-1748x2048-tdovt1s4.png",
        alt: "Jupyter",
        href: "https://jupyter.org/",
      },
    ],
  },
  {
    title: "Tools & IDEs",
    items: [
      {
        light: icon("postman", "light"),
        dark: icon("postman", "dark"),
        alt: "Postman",
        href: "https://www.postman.com/",
      },
      {
        light: icon("codepen", "light"),
        dark: icon("codepen", "dark"),
        alt: "CodePen",
        href: "https://codepen.io/",
      },
      {
        light: icon("pycharm", "light"),
        dark: icon("pycharm", "dark"),
        alt: "PyCharm",
        href: "https://www.jetbrains.com/pycharm/",
      },
      {
        light: icon("figma", "light"),
        dark: icon("figma", "dark"),
        alt: "Figma",
        href: "https://www.figma.com/",
      },
      {
        light: icon("androidstudio", "light"),
        dark: icon("androidstudio", "dark"),
        alt: "Android Studio",
        href: "https://developer.android.com/studio",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="grid grid-cols-2 gap-x-16 gap-y-8 text-2xl">
      <h2 className="col-span-2 text-3xl font-bold">Skills</h2>

      {skills.map(({ title, items }) => (
        <div key={title}>
          <h3 className="mb-2 font-semibold text-base dark:text-gray-300">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-[0.5rem]">
            {items.map((item) => (
              <SkillIcon key={item.alt} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
