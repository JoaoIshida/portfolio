"use client";
import Image from "next/image";
import Skills from "./components/Skills";
import TextChange from "./components/TextChange";
import GithubRepos from "./components/projects";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 max-w-screen-lg mx-[1rem] md:mx-auto md:gap-[3rem]">
      <section id="intro" className="scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24">
        <div className="flex flex-col gap-[2rem]">
          <div className="text-2xl">Hello world!</div>
          <div className="relative">
            <div className="absolute inset-0">
              <TextChange />
            </div>
          </div>
          <div className="text-3xl text-zinc-400 mt-[5rem] pr-[2rem]">
            <span className="text-dark dark:text-light">
              Majoring in Computer Science
            </span>
            . A driven individual interested in building high-quality
            products. In the process of being a better programmer.
          </div>
        </div>
      </section>

      <section id="about" className="flex flex-col md:flex-row gap-4 justify-around items-start mt-[1.5rem] scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24">
        <div className="mr-[3rem] flex flex-col gap-2">
          <div className="text-4xl font-bold border-b-2 border-zinc-400">
            About Me
          </div>
          <div className="text-2xl">
            Hey there, my name is Joao Correa and I am a computer science
            student at Simon Fraser University. I have always been
            interested in discovering new technologies and I find great joy
            in exploring it. My main interest is to make something cool and
            useful. It is amazing how a few lines of code can result in
            something creative and innovative like this website. I also
            consider myself a lifelong learner and a creative person.
            Ultimately, my goal is to use my skills to make a positive
            change and contribute to the improvement of the world.
          </div>
          <div className="py-2 flex flex-row gap-4 items-center">
            <Skills />
          </div>
          <div className=" py-2 flex flex-row gap-4 items-center">
            <div className="text-xl font-bold">Languages:</div>
            <div className="py-2 flex flex-wrap gap-4">
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                English - Fluent
                <div className="flex items-center gap-1">
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Portuguese - Native
                <div className="flex items-center gap-1">
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                Spanish - Fluent
                <div className="flex items-center gap-1">
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="px-[1rem] py-[0.25rem] rounded-full border border-opacity-50 border-black dark:border-white">
                French - Basic
                <div className="flex items-center gap-1">
                  <div className="h-2 w-1/4 bg-green-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-gray-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-gray-500 rounded-full"></div>
                  <div className="h-2 w-1/4 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:sticky md:top-[12rem] rounded scale-75 md:scale-150 md:mt-[2rem]">
          <img
            src="/image.png"
            alt="Joao Correa's profile image"
            className="object-cover"
          />
        </div>
      </section>

      <section id="projects" className="trasnslate-y-[-3rem] mt-[1.5rem] scroll-mt-[4rem] md:scroll-mt-[5rem] lg:scroll-mt-[7rem]">
          <GithubRepos />
      </section>

      <section
        className="content-container bg-lightLight dark:bg-darkLight p-[2rem] mt-[2rem] inline-flex flex-col gap-2"
        id="contact"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl border-b-2 border-zinc-400">
          Get in Touch
        </h2>
        <div>
          I’m currently looking for <b>New Grad</b> opportunities starting September 2025! I would
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

