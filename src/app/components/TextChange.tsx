"use client";
import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const TextChange: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const options = {
        strings: [
          "Joao Correa",
          "a Software Engineer",
          "a Problem Solver",
          "a Fast-learner",
          "Creative",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };
      const typed = new Typed(textRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="">
      <div className="wrapper text-5xl">
        I am <span className="font-bold text-blue-600" ref={textRef}></span>
      </div>
    </div>
  );
};

export default TextChange;
