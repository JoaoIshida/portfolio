"use client";
import React from "react";
import Typical from "react-typical";

const TextChange: React.FC = () => {
  return (
    <div className="flex flex-row text-5xl">
      <div className="flex flex-row">
        I am{" "}
        <span className="font-bold px-3">
          <Typical
            steps={[
              "Joao Correa",
              2000,
              "a Software Engineer",
              2000,
              "a Problem Solver",
              2000,
              "Fast-learner",
              2000,
              "Creative",
              2000,
            ]}
            wrapper="p"
            loop={Infinity}
            className="text-blue-600"
            options={{
              cursor: false,
              delay: 2000, // Decreased typing speed
              typist: {
                blink: true,
                blinkSpeed: 1000,
              },
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default TextChange;
