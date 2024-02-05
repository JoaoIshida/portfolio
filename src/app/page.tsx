import Image from "next/image";
import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import ThemeSwitch from "./components/ThemeSwitch";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 max-w-screen-lg mx-[1rem] md:mx-auto md:gap-[3rem]">
      <div id="intro" className="flex flex-col gap-[2rem]">
        <div className="flex flex-col gap-[2rem]">
          <div className="text-2xl text-blue-6s00">Hello world! My name is</div>
          <div className="text-5xl font-bold">Joao Correa</div>
          <div className="text-3xl text-zinc-400">
            <span className="text-dark dark:text-light">
              Majoring in Computer Science
            </span>
            . A driven individual interested in building high-quality products.
            In the process of being a better programmer.
          </div>
        </div>
        <div className=" flex flex-row gap-4">
          <a
            href="https://github.com/joaoishida"
            target="_blank"
            className="hover:-translate-y-1 rounded-full bg-lightDark dark:bg-darkLight flex flex-row items-center p-2 gap-[0.5rem]"
          >
            <RiGithubFill />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joaoishida"
            target="_blank"
            className="hover:-translate-y-1 rounded-full bg-lightDark dark:bg-darkLight flex flex-row items-center p-2 gap-[0.5rem]"
          >
            <RiLinkedinBoxFill />
            LinkedIn
          </a>
          <a
            href="mailto:jvi2@sfu.ca"
            target="_blank"
            className="hover:-translate-y-1 rounded-full bg-lightDark dark:bg-darkLight flex flex-row items-center p-2 gap-[0.5rem]"
          >
            <RiMailFill />
            Email
          </a>
        </div>
      </div>
      <div id="about"></div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-[1.5rem]">
        <div className="mr-[2rem] flex flex-col gap-2">
          <div className="text-4xl font-bold border-b-2 border-zinc-400">
            About Me
          </div>
          <div className="text-2xl">
            Hey there, my name is Joao Correa and I am a computer science
            student at Simon Fraser University. I have always been interested in
            discovering new technologies and I find great joy in exploring it.
            My main interest is to make something cool and useful. It is amazing
            how a few lines of code can result in something creative and
            innovative like this website. I also consider myself a lifelong
            learner and a creative person. Ultimately, my goal is to use my
            skills to make a positive change and contribute to the improvement
            of the world.
          </div>
          <div className="py-2 flex flex-row gap-4 items-center">
            <div className="text-xl font-bold">Languages:</div>
            <div className="py-2 flex flex-wrap gap-4">
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                HTML
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                C++
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                C
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                SQL
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Java
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Pyth
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                CSS
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                JS
              </div>
            </div>
          </div>
          <div className="py-2 flex flex-row gap-4 items-center">
            <div className="text-xl font-bold">Technical:</div>
            <div className="py-2 flex flex-wrap gap-4">
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Debugging
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Teamwork
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Git/GitHub
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Test Development
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Self-Learn
              </div>
            </div>
          </div>
          <div className=" py-2 flex flex-row gap-4 items-center">
            <div className="text-xl font-bold">Fluency:</div>
            <div className="py-2 flex flex-wrap gap-4">
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                English
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Portuguese
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Spanish
              </div>
            </div>
          </div>
        </div>
        <div className="translate-y-[-4rem] rounded scale-75 md:scale-150 ">
          <img
            src="/image.png"
            alt="Joao Correa's profile image"
            className="object-cover"
          />
        </div>
      </div>
      <div id="projects"></div>
      <div className="trasnslate-y-[-3rem] mt-[1.5rem]">
        <p className="text-4xl font-bold border-b-2 border-zinc-400 mb-4">
          Projects
        </p>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div>
            <h3 className="text-3xl font-bold">Python Blokus Board Game</h3>
            <div className="text-2xl">
              The project involves creating a Blokus board game using Python and
              PyQt5. It includes AI bot players and a high-quality GUI. The
              software development process follows modern practices, including
              requirements gathering, analysis, documentation, design,
              implementation, testing, and maintenance. A UML diagram aids in
              software development and project management. Students complete a
              team project using an iterative development process, addressing
              major tasks and project management issues.
            </div>
            <Image
              src="/blokus.png"
              width={500}
              height={500}
              alt="hangman game image"
              className="rounded-md my-[1rem]"
            ></Image>
            <div className="flex flex-col md:flex-row gap-2">
              <a
                href="https://github.com/JoaoIshida/Blokus_game"
                className="p-2 border border-black dark:border-white bg-light text-black dark:bg-dark dark:text-white hover:bg-neutral-700"
              >
                Play Game
              </a>
              <a
                href="https://github.com/JoaoIshida/Blokus_game"
                className="p-2 border border-black dark:border-white bg-light text-black dark:bg-dark dark:text-white hover:bg-neutral-700"
              >
                Check project code
              </a>
            </div>
          </div>

          <div className="">
            <h3 className="text-3xl font-bold">Hangman</h3>
            <div className="text-2xl">
              This was a simple side project made using HTML, CSS, and mostly
              JavaScript. My intentions with this project were to test a bit
              more of JavaScript and CSS, what cool features and codes I could
              use to make an interactive and good-looking game as well as being
              fun. The game has simple words and hints to help throughout the
              gameplay. I did this as I was learning more of the languages. I
              did not have many problems with the code, and some were easy to
              fix after testing and trying different methods. After all, I could
              have a decent game to have some fun, test more of my knowledge in
              the web development, and practice for future projects.
            </div>
            <Image
              src="/hangman.png"
              width={500}
              height={500}
              alt="hangman game image"
              className="rounded-md my-[1rem]"
            ></Image>
            <div className="flex flex-col md:flex-row gap-2">
              <a
                href="https://joaoishida.github.io/hangmangame/"
                className="p-2 border border-black dark:border-white bg-light text-black dark:bg-dark dark:text-white hover:bg-neutral-700"
              >
                Play Game
              </a>
              <a
                href="https://github.com/JoaoIshida/hangmangame"
                className="p-2 border border-black dark:border-white bg-light text-black dark:bg-dark dark:text-white hover:bg-neutral-700"
              >
                Check project code
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        className="content-container bg-lightLight dark:bg-darkLight p-[2rem] inline-flex flex-col gap-2"
        id="contact"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl border-b-2 border-zinc-400">
          Get in Touch
        </h2>
        <div>
          I’m currently looking for coop opportunities for Summer 2024! I would
          love to get in contact, whether you have a question or want to know
          more about me!
        </div>
        <p className="text-lg md:text-xl lg:text-2xl">
          Press the following button. Feel free to email me!
        </p>
        <a
          href="mailto:jvi2@sfu.ca"
          target="_blank"
          className="w-fit border dark:text-light text-dark bg-zinc-500 border-black dark:border-light rounded-full p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800"
        >
          Say Hello!
        </a>
      </section>

      {/* Copyright section */}
      <nav>
        <div className="navbar-name">
          <p> &ensp; Copyright &copy; 2023 Joao Correa </p>
        </div>
      </nav>
    </main>
  );
};

export default Home;
