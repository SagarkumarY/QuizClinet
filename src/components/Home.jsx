import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [quizActive, setQuizActive] = useState(false);
  const toggleInfo = () => {
    setShowInfo(!showInfo);
    setQuizActive(!quizActive); // Toggle quizActive state
  };

  const exitQuiz = () => {
    setShowInfo(false);
    setQuizActive(false); // Set quizActive state to false when exiting quiz
  };
  return (
    <>
    {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 "></div> */}
      <div
        className={`quize flex justify-center  items-center w-full h-[90vh]
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
        `}
      >

        {!showInfo && (
          <div className="quize-content max-w-[700px] shadow flex items-center flex-col p-4  text-white rounded-sm
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
          ">
            <h1 className=" text-[70px] font-bold shadow-sm ">
              Quize - Webside
            </h1>
            <p className=" text-base text-center ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo harum possimus cum illo numquam aliquid laudantium ex
              necessitatibus natus? Sunt iste odio commodi quas rem, fuga omnis
              unde quaerat itaque!
            </p>
         
            <button onClick={toggleInfo} type="button" className=" my-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Start Quize</button>
          </div>
        )}
        
      </div>

      <div
        className={`pop-info  shadow  ${
          showInfo ? "opacity-100" : "opacity-0"
        } ${showInfo ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <h2 className=" text-5xl text-[#c40094] p-3">Quiz Guide</h2>
        <div className="info">
          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="info">
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="info">
          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="info">
          4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="info">
          5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>

        <div className="btns flex justify-between items-center mt-3">
            <button  onClick={exitQuiz}  type="button" className=" font-bold my-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Exit Quiz</button>

          <Link to="/quiz">
 
          <button  type="button" className=" font-bold my-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Continue</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
