import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";

function Score() {
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   // Retrieve score from localStorage when component mounts
  //   const storedScore = localStorage.getItem("quizScore");
  //   if (storedScore) {
  //     setScore(parseInt(storedScore, 10));
  //   }
  // }, []);

  // Calculate percentage
  // const percentage = (score / 5) * 100;

  useEffect(() => {
    // Retrieve score from localStorage when component mounts
    const storedScore = localStorage.getItem("quizScore");
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }

    // Animate the progress increase
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= score * 20 ? newPercentage : score * 20;
      });
    }, 20);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [score]);

  return (
    <div>
      <Navbar/>
      <div className="quiz-containerw-full  h-[90vh]  flex justify-center items-center
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      
      ">
        <div className="quiz-result w-[500px] h-fit  flex flex-col justify-center items-center ">
          <h2 className=" text-center text-[40px] font-semibold pt-2 text-white">
            Quiz Result
          </h2>
          <div className="percentage-container w-[300px] flex items-center justify-center flex-col my-5">
            <div
              style={{
                background: `conic-gradient(#c40094,${
                  percentage * 3.6
                }deg,rgba(255,255,255,.1)0deg)`,
              }}
              className="circural-progress relative w-[250px] h-[250px] rounded-full flex items-center justify-center"
            >
              <span className="progress-value text-4xl font-semibold relative text-white">
                {percentage}%
              </span>
            </div>

            <span className="score-text-value font-medium text-2xl mt-4  text-white">
              Your Score {score} Our of 5
            </span>
          </div>
          <div className="button flex gap-5">
            <Link to="/quiz">
              <button className="w-[120px] bg-[#c40094]  hover:bg-pink-800 font-semibold rounded shadow-sm outline-none border-2 border-solid border-[#c40094]  h-10 text-white">
                Try Again
              </button>
            </Link>

            <Link to="/">
              <button className="w-[120px] bg-[#c40094]  text-white hover:bg-pink-800 font-semibold rounded shadow-sm outline-none border-2 border-solid border-[#c40094] h-10">
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Score;
