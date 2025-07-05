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
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="group flex relative w-16 h-16 items-center justify-center rounded-xl bg-white dark:bg-darkLight shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden"
      title={alt}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
      <picture className="relative z-10">
        <source srcSet={dark} media="(prefers-color-scheme: dark)" />
        <img 
          src={light} 
          alt={alt} 
          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 relative z-10" 
        />
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
        light: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        dark: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
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
      {
        light: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReHvByZkJhXRzuDuLPfYtmdNlOk6JsTRn1w&s",
        dark: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSReHvByZkJhXRzuDuLPfYtmdNlOk6JsTRn1w&s",
        alt: "Sanity CMS",
        href: "https://www.sanity.io/",
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
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        alt: "NumPy",
        href: "https://numpy.org/",
      },
      {
        light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
        dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
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
    <div className="space-y-8">
      {skills.map(({ title, items }, groupIndex) => (
        <div 
          key={title} 
          className={`fade-in-up stagger-${Math.min(groupIndex + 1, 5)}`}
          style={{animationDelay: `${groupIndex * 0.1}s`}}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
              <span className="text-primary-500">
                {getSkillGroupIcon(title)}
              </span>
              {title}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {items.map((item, itemIndex) => (
              <div
                key={item.alt}
                className={`fade-in-up stagger-${Math.min(itemIndex % 5 + 1, 5)}`}
                style={{animationDelay: `${(groupIndex * 0.1) + (itemIndex * 0.05)}s`}}
              >
                <SkillIcon {...item} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function getSkillGroupIcon(title: string): string {
  switch (title) {
    case "Programming Languages":
      return "💻";
    case "Frontend Frameworks":
      return "🎨";
    case "Backend & APIs":
      return "⚙️";
    case "DevOps & Cloud":
      return "☁️";
    case "Databases & Data":
      return "🗄️";
    case "Tools & IDEs":
      return "🔧";
    default:
      return "🚀";
  }
}
