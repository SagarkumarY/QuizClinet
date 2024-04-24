// QuestionContext.js
import React, { createContext, useState, useEffect } from 'react';

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8000/questions');
      const data = await response.json();
      setQuestions(data);
    
    } catch (error) {
      console.error('Error fetching questions:', error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <QuestionContext.Provider value={{ questions ,loading}}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
