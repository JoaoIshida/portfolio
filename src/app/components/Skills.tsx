import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 flex-wrap space-x-4 gap-x-[4rem] text-2xl">
      <h2 className="text-3xl font-bold">Skills:</h2>
      <div />
      <div>
        <h3 className="mb-[0.5rem]">Programming Languages</h3>

        <div className="flex flex-row">
          <a
            href="https://www.cprogramming.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
              alt="c"
              title="C"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a
            href="https://www.w3schools.com/cpp/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
              alt="cplusplus"
              title="C++"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a
            href="https://www.w3schools.com/cs/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              title="C#"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://www.java.com" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="java"
              title="Java"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              title="JavaScript"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              title="Python"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              title="TypeScript"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">Frontend Development</h3>

        <div className="flex flex-row">
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              title="CSS"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              title="HTML5"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              title="React.js"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              title="Tailwind CSS"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">Backend Development</h3>

        <div className="flex flex-row">
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              title="Node.js"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">AI/ML</h3>

        <div className="flex flex-row">
          <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
              alt="pandas"
              title="Pandas"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">Database</h3>

        <div className="flex flex-row">
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              title="MongoDB"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a
            href="https://www.microsoft.com/en-us/sql-server"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
              alt="mssql"
              title="Microsoft SQL Server"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
              alt="sqlite"
              title="SQLite"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">Software</h3>

        <div className="flex flex-row">
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              title="Figma"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              title="Git"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
              alt="linux"
              title="Linux"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
          <a href="https://www.mathworks.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.svgrepo.com/show/373830/matlab.svg"
              alt="matlab"
              title="MATLAB"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">Static Site Generators</h3>

        <div className="flex flex-row">
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
              alt="nextjs"
              title="Next.js"
              width={40}
              height={40}
              className="filter drop-shadow-[0px_0px_1px_rgba(0,0,0,0)] dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-[0.5rem]">Game Engines</h3>

        <div className="flex flex-row relative">
          <a href="https://unity.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
              alt="unity"
              title="Unity"
              width={40}
              height={40}
              className="filter dark:drop-shadow-[0px_0px_1px_rgba(200,200,200,1)]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
