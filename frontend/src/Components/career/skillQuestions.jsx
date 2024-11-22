/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const questions = [
    {
      question: "What does CPU stand for?",
      answers: [
        {
          text: "Central Processing Unit",
          score: 1,
        },
        {
          text: "Central Programming Unit",
          score: 0,
        },
        {
          text: "Core Processing Unit",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "What is the main purpose of an operating system?",
      answers: [
        {
          text: "To serve as a bridge between hardware and software",
          score: 1,
        },
        {
          text: "To compile programs into machine code",
          score: 0,
        },
        {
          text: "To design the graphical user interface",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "Which of the following is not a programming language?",
      answers: [
        {
          text: "Python",
          score: 0,
        },
        {
          text: "HTML",
          score: 1,
        },
        {
          text: "Java",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "What is the output of 2 + 3 * 4 in most programming languages?",
      answers: [
        {
          text: "20",
          score: 0,
        },
        {
          text: "14",
          score: 1,
        },
        {
          text: "24",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "Which data structure uses the FIFO (First In, First Out) principle?",
      answers: [
        {
          text: "Stack",
          score: 0,
        },
        {
          text: "Queue",
          score: 1,
        },
        {
          text: "Linked List",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "What is the full form of SQL?",
      answers: [
        {
          text: "Sequential Query Language",
          score: 0,
        },
        {
          text: "Structured Query Language",
          score: 1,
        },
        {
          text: "Standardized Query Language",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "What is the base of the binary number system?",
      answers: [
        {
          text: "8",
          score: 0,
        },
        {
          text: "10",
          score: 0,
        },
        {
          text: "2",
          score: 1,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "What does HTTP stand for in web technology?",
      answers: [
        {
          text: "HyperText Transfer Protocol",
          score: 1,
        },
        {
          text: "High Transfer Text Protocol",
          score: 0,
        },
        {
          text: "HyperText Transition Protocol",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "In object-oriented programming, what does 'inheritance' allow?",
      answers: [
        {
          text: "Sharing variables between unrelated classes",
          score: 0,
        },
        {
          text: "A class to acquire properties and methods of another class",
          score: 1,
        },
        {
          text: "Declaring global functions",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
    {
      question: "Which of the following is a type of loop in programming?",
      answers: [
        {
          text: "if-else",
          score: 0,
        },
        {
          text: "for",
          score: 1,
        },
        {
          text: "switch",
          score: 0,
        },
      ],
      typeOfQuestion: "Skill",
    },
  ];
  
const SkillQuestions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({});
    const [totalScore, setTotalScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleAnswer = (score, type, index) => {
      setSelectedAnswer(index);
      const updatedScores = { ...scores };
      updatedScores[type] = (updatedScores[type] || 0) + score;
      setScores(updatedScores);
      setTotalScore(totalScore + score);
  
      setTimeout(() => {
        setSelectedAnswer(null);
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowResult(true);
        }
      }, 1000); // Delay to show selected answer animation
    };
  
    const restartQuiz = () => {
      setCurrentQuestionIndex(0);
      setScores({});
      setTotalScore(0);
      setShowResult(false);
    };
  
    useEffect(() => {
      if (showResult) {
        localStorage.setItem(
          "nonConventionalTestScores",
          JSON.stringify({ scores, totalScore })
        );
      }
    }, [showResult, scores, totalScore]);
  
    return (
      <div className="min-h-screen flex flex-col bg-purple-200 items-center">
  
        <main className="flex flex-col items-center mt-28 w-full px-4">
          <motion.h1
            className="text-4xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skill Assessment Test
          </motion.h1>
          {showResult ? (
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-lg mb-4">Your Scores:</p>
              <ul className="mb-4">
                {Object.entries(scores).map(([key, value]) => (
                  <li key={key} className="text-sm text-gray-600">
                    {key}: {value}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold">Total Score: {totalScore}</p>
              {/* <button
                onClick={restartQuiz}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-indigo-600"
              >
                Restart Quiz
              </button> */}
              <Link to="/dashboard"> 
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-6 ml-4 hover:bg-indigo-600"
              >
                Go Ahead
              </button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-bold mb-4">
                {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestionIndex].answers.map((answer, index) => (
                  <motion.button
                    key={index}
                    onClick={() =>
                      handleAnswer(
                        answer.score,
                        questions[currentQuestionIndex].typeOfQuestion,
                        index
                      )
                    }
                    className={`py-3 px-4 rounded-lg ${
                      selectedAnswer === index
                        ? "bg-green-300"
                        : "bg-gray-200 hover:bg-gray-300"
                    } text-left`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {answer.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>
    );
  };
  
  
export default SkillQuestions;
