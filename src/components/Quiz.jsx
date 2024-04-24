import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionContext } from "../content/questionContext";
import LoadingSkeleton from './LoadingSkeleton'

function Quiz() {
  const { questions } = useContext(QuestionContext);

  // Shuffle function to randomize array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(questions);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    // Shuffle questions when component mounts
    setAnsweredQuestions(shuffleArray(questions));
  }, []);

  const currentQuestion = answeredQuestions[currentQuestionIndex];

  const handleOptions = (selectedOption) => {
    const correctAnswer = currentQuestion.answer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setScore(score + 1); // Increment score if the answer is correct
    } else {
      setShowCorrectAnswer(true); // Show correct answer if the answer is incorrect
    }
    setIsAnswered(true); // Mark the question as answered
    setSelectedOption(selectedOption); // Set the selected option

    // Check if there are unanswered questions
    const unansweredQuestions = questions.filter(
      (question, index) => index > currentQuestionIndex
    );

    // If there are unanswered questions, shuffle them and select the first one
    if (unansweredQuestions.length > 0) {
      const shuffledQuestions = shuffleArray(unansweredQuestions);
      const nextQuestion = shuffledQuestions[0];
      setAnsweredQuestions([...answeredQuestions, nextQuestion]);
    }
  };
  // Function to move to the next question
  const nextQuestion = () => {
    setSelectedOption(null); // Clear selected option
    setShowCorrectAnswer(false); // Hide correct answer
    setIsAnswered(false); // Mark the question as unanswered
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question

    // If all questions have been answered, navigate to the score page
    if (currentQuestionIndex >= 4) {
      localStorage.setItem("quizScore", score.toString());
      navigate("/score");
      return;
    }
  };

  return (
    <div className="  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-full h-screen flex justify-center items-center overflow-y-scroll py-4">
      {currentQuestion ? (
        <div className="quiz-section max-w-[700px] w-[550px] bg-transparent border-2 border-solid border-[#c40094] rounded-md flex flex-col py-3 px-5">
          <div className="quiz-box">
            <h1 className="quiz-heading">Uchia Quiz</h1>
            <div className="quiz-header flex justify-between items-center py-4">
              <span className="text-lg font-medium">Quiz</span>
              <span className="header-score text-lg font-medium bg-[#c40094] p-2 rounded-md">
                Score: {score} / 5
              </span>
            </div>
          </div>
          <h2 className="question-text text-2xl font-semibold py-2 w-full text-white">
            {currentQuestionIndex + 1} : {currentQuestion.question}
          </h2>

          <div className="options-list py-2 ">
            {currentQuestion?.options.map((option, index) => (
              <div
                key={index}
                // className="option w-full bg-transparent rounded text-base my-3 cursor-pointer"

                className={`option  text-white w-full rounded text-base my-3 cursor-pointer  ${
                  selectedOption === option
                    ? option === currentQuestion.answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : showCorrectAnswer && option === currentQuestion.answer
                    ? "bg-green-500"
                    : ""
                }`}
                style={{ pointerEvents: isAnswered ? "none" : "auto" }}
                onClick={() => handleOptions(option)}
              >
                <span>{option}</span>
              </div>
            ))}
          </div>

          <div className="quiz-footer flex justify-between items-center">
            <span className="text-base font-semibold text-white">
              {currentQuestionIndex + 1} of 5
            </span>
            <button
              className="next-btn w-[100px] h-[45px] text-white"
              onClick={nextQuestion}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <LoadingSkeleton/>
      )}
    </div>
  );
}

export default Quiz;

// className={`option w-full rounded text-base my-3 cursor-pointer ${
//   selectedOption === option
//     ? option === currentQuestion.answer
//       ? "bg-green-500  hover:touch-none"
//       : "bg-red-500"
//     : ""
// }`}

// useEffect(() => {
//   if (questions.length > 0) {
//     setAnsweredQuestions(shuffleArray(questions));
//     setLoading(false);
//   }
// }, [questions]);

// useEffect(() => {
//   if (!loading && answeredQuestions.length > 0) {
//     setCurrentQuestionIndex(0);
//   }
// }, [answeredQuestions, loading]);
