"use client";
import Image from "next/image";
import Skills from "./components/Skills";
import TextChange from "./components/TextChange";
import GithubRepos from "./components/projects";
import Experience from "./components/experience";
import ContactForm from "./components/ContactForm";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Background that extends to navbar */}
      <div className="fixed inset-0 bg-gradient-subtle overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-950/50 dark:to-secondary-950/50"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Hero Section */}
      <section 
        id="intro" 
        className="relative min-h-[90vh] flex items-center justify-center scroll-mt-16 z-10"
      >
        
        <div className="relative section-container text-center">
          <div className="max-w-4xl mx-auto">
            {/* Greeting */}
            <div className="fade-in-down">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-gray-600 dark:text-gray-300">
                Hello world! 👋
              </h1>
            </div>
            
            {/* Main Text Change Component */}
            <div className="fade-in-up stagger-1 mb-8">
              <TextChange />
            </div>
            
            {/* Description */}
            <div className="fade-in-up stagger-2 mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                <span className="text-gradient font-semibold">
                  Majoring in Computer Science
                </span>
                . A driven individual interested in building high-quality
                products. In the process of being a better programmer.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="btn-primary hover-lift px-8 py-4 text-lg font-semibold"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn-outline hover-lift px-8 py-4 text-lg font-semibold"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Scroll Indicator */}
            <div className="fade-in-up stagger-4 mt-12">
              <div className="flex flex-col items-center animate-bounce-subtle">
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="section relative bg-gradient-to-br from-lightLight to-light dark:from-darkDark dark:to-dark scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24 z-10"
      >
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Content */}
            <div className="flex-1 fade-in-right">
              <h2 className="section-title text-left mb-8">About Me</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Hey there, my name is <span className="font-semibold text-gradient">Joao Correa</span> and I am a computer science
                  student at Simon Fraser University. I have always been
                  interested in discovering new technologies and I find great joy
                  in exploring them. My main interest is to make something cool and
                  useful. It is amazing how a few lines of code can result in
                  something creative and innovative like this website. I also
                  consider myself a lifelong learner and a creative person.
                  Ultimately, my goal is to use my skills to make a positive
                  change and contribute to the improvement of the world.
                </p>
              </div>
              
              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Technical Skills</h3>
                <Skills />
              </div>
              
              {/* Languages */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Languages</h3>
                <LanguageProficiency />
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex-shrink-0 fade-in-left mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white dark:bg-darkLight rounded-2xl p-2 shadow-hard hover-lift">
                  <img
                    src="/image.png"
                    alt="Joao Correa's profile image"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="section relative bg-gradient-to-br from-light to-lightLight dark:from-dark dark:to-darkDark scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24 z-10"
      >
        <div className="section-container">
          <h2 className="section-title mb-4">Work Experience</h2>
          <p className="section-subtitle">My professional journey and key achievements</p>
          <Experience />
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="section relative bg-gradient-to-br from-lightLight to-light dark:from-darkDark dark:to-dark scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24 z-10"
      >
        <div className="section-container">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="section-subtitle">Check out some of my recent work and contributions</p>
          <GithubRepos />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 z-10"
      >
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Get in Touch</h2>
            <p className="section-subtitle max-w-3xl mx-auto text-black">
              I'm currently looking for <span className="font-semibold text-gradient">New Grad</span> opportunities starting September 2025! 
              I would love to get in contact, whether you have a question or want to know more about me!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-darkDark dark:bg-black py-8 z-10">
        <div className="section-container">
          <div className="text-center text-gray-400">
            <p className="text-sm">
              © 2025 Joao Correa.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

// Language Proficiency Component
const LanguageProficiency = () => {
  const languages = [
    { name: "English", level: "Fluent", percentage: 100 },
    { name: "Portuguese", level: "Native", percentage: 100 },
    { name: "Spanish", level: "Fluent", percentage: 100 },
    { name: "French", level: "Basic", percentage: 25 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {languages.map((lang, index) => (
        <div key={lang.name} className="card p-4 hover-lift stagger-1" style={{animationDelay: `${index * 0.1}s`}}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-800 dark:text-gray-200">{lang.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${lang.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

