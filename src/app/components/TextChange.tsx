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
    <div className="flex flex-row text-5xl">
      <div className="flex flex-row">
        I am{" "}
        <span className="font-bold px-3 text-blue-600" ref={textRef}></span>
      </div>
    </div>
  );
};

export default TextChange;
