import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useCareerContext } from './CareerContext';

const CareerExplorationQuiz = () => {
  const CAREER_FIELDS = [
    {
      name: 'Technology',
      description: 'Innovation, coding, problem-solving',
      icon: '💻'
    },
    {
      name: 'Healthcare',
      description: 'Helping others, medical sciences',
      icon: '🩺'
    },
    {
      name: 'Creative Arts',
      description: 'Design, imagination, expression',
      icon: '🎨'
    },
    {
      name: 'Business',
      description: 'Leadership, strategy, entrepreneurship',
      icon: '📊'
    },
    {
      name: 'Science',
      description: 'Research, discovery, analysis',
      icon: '🔬'
    },
    {
      name: 'Education',
      description: 'Teaching, mentoring, knowledge sharing',
      icon: '📚'
    },
    {
      name: 'Engineering',
      description: 'Problem-solving, design, innovation',
      icon: '🛠️'
    },
    {
      name: 'Finance',
      description: 'Numbers, investment, economic strategy',
      icon: '💰'
    },
    {
      name: 'Social Services',
      description: 'Community support, counseling',
      icon: '❤️'
    },
    {
      name: 'Marketing',
      description: 'Communication, strategy, creativity',
      icon: '📈'
    },
    {
      name: 'Environmental Studies',
      description: 'Sustainability, conservation',
      icon: '🌍'
    },
    {
      name: 'Media and Communication',
      description: 'Journalism, broadcasting, content creation',
      icon: '📡'
    }
  ];

  // Comprehensive Fallback Questions for ALL fields
  const FALLBACK_QUESTIONS = {
    'Technology': [
      {
        question: "What aspect of technology excites you most?",
        answers: [
          { text: "Solving complex technical problems", score: 2 },
          { text: "Creating innovative software", score: 1 },
          { text: "Exploring emerging technologies", score: 0 }
        ]
      },
      {
        question: "How do you approach learning new programming languages?",
        answers: [
          { text: "I enjoy diving deep into documentation and theory", score: 2 },
          { text: "I prefer hands-on projects to learn by doing", score: 1 },
          { text: "I find tutorials and guided courses most helpful", score: 0 }
        ]
      }
    ],
    'Healthcare': [
      {
        question: "What motivates you most about healthcare?",
        answers: [
          { text: "Helping people overcome illness and injury", score: 2 },
          { text: "The science behind medical treatments", score: 1 },
          { text: "The opportunity to work in a respected profession", score: 0 }
        ]
      },
      {
        question: "How do you handle high-pressure situations?",
        answers: [
          { text: "I remain calm and methodical", score: 2 },
          { text: "I focus on the immediate priorities", score: 1 },
          { text: "I seek guidance from more experienced people", score: 0 }
        ]
      }
    ]
  };

  // Default fallback questions that work for any career field
  const DEFAULT_FALLBACK_QUESTIONS = [
    {
      question: "What attracts you most to this field?",
      answers: [
        { text: "The opportunity to solve important problems", score: 2 },
        { text: "The career growth potential", score: 1 },
        { text: "The work-life balance and stability", score: 0 }
      ]
    },
    {
      question: "How do you prefer to work?",
      answers: [
        { text: "Independently with clear goals", score: 2 },
        { text: "In collaborative teams", score: 1 },
        { text: "With structured guidance and feedback", score: 0 }
      ]
    },
    {
      question: "What's most important to you in your career?",
      answers: [
        { text: "Making a positive impact", score: 2 },
        { text: "Professional growth and learning", score: 1 },
        { text: "Financial stability and compensation", score: 0 }
      ]
    }
  ];

  const navigate = useNavigate();
  const { updateCareerResults } = useCareerContext();

  const [currentField, setCurrentField] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fieldScores, setFieldScores] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quizProgress, setQuizProgress] = useState([]);
  const [apiErrorCount, setApiErrorCount] = useState(0);

  // Update this with your actual Gemini API key
  const GEMINI_API_KEY = "AIzaSyCOuCruM_Mqrr20Ykbs-xOKDOqOUfqXzfo"; 

  const generateFieldQuestions = async (field) => {
    setIsLoading(true);
    try {
      // If we've had too many API errors or no API key, use fallbacks immediately
      if (apiErrorCount > 2 || !GEMINI_API_KEY) {
        console.log("Using fallback questions due to previous API errors or missing API key");
        const fieldFallbacks = FALLBACK_QUESTIONS[field.name] || DEFAULT_FALLBACK_QUESTIONS;
        setQuestions(fieldFallbacks.slice(0, 3));
        setIsLoading(false);
        return;
      }

      const prompt = `Generate 3 career exploration questions for the ${field.name} field. 
      Each question should have 3 multiple-choice answers with scores (2 for best match, 1 for partial match, 0 for least match).
      Format response as JSON array:
      [
        {
          "question": "Specific question about ${field.name}?",
          "answers": [
              { "text": "Best match answer", "score": 2 },
              { "text": "Partial match answer", "score": 1 },
              { "text": "Least match answer", "score": 0 }
          ]
        }
      ]`;

      // Correct Google Generative AI API endpoint
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent", 
        {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024
          }
        },
        { 
          headers: { 
            'Content-Type': 'application/json',
            'x-goog-api-key': GEMINI_API_KEY
          },
          timeout: 15000 
        }
      );

      // Extract the text from the response
      let responseText = "";
      if (response.data.candidates && 
          response.data.candidates[0]?.content?.parts?.length > 0) {
        responseText = response.data.candidates[0].content.parts[0].text;
      }

      // Extract JSON from the response text
      const jsonMatch = responseText.match(/\[.*\]/s);
      let generatedQuestions = [];
      
      if (jsonMatch) {
        try {
          generatedQuestions = JSON.parse(jsonMatch[0]);
        } catch (parseError) {
          console.error('Error parsing JSON from API response:', parseError);
          throw new Error('Invalid JSON from API');
        }
      }

      if (generatedQuestions.length === 0) {
        throw new Error('No questions generated');
      }

      // Make sure each question has properly structured answers with scores
      generatedQuestions = generatedQuestions.map(q => {
        if (!q.answers || !Array.isArray(q.answers) || q.answers.length < 3) {
          q.answers = [
            { text: "Strongly agree", score: 2 },
            { text: "Somewhat agree", score: 1 },
            { text: "Disagree", score: 0 }
          ];
        }
        return q;
      });

      setQuestions(generatedQuestions.slice(0, 3));
      
    } catch (error) {
      console.error('Question generation error:', error);
      setApiErrorCount(prev => prev + 1);
      
      // Use field-specific fallbacks if available, otherwise use defaults
      const fieldFallbacks = FALLBACK_QUESTIONS[field.name] || DEFAULT_FALLBACK_QUESTIONS;
      setQuestions(fieldFallbacks.slice(0, 3));
    } finally {
      setIsLoading(false);
    }
  };
 
  useEffect(() => {
    if (CAREER_FIELDS.length > 0) {
      setCurrentField(CAREER_FIELDS[0]);
    }
  }, []);

  useEffect(() => {
    if (currentField) {
      setCurrentQuestionIndex(0); // Reset question index when field changes
      generateFieldQuestions(currentField);
    }
  }, [currentField]);

  const handleAnswer = (score) => {
    setFieldScores(prev => ({
      ...prev,
      [currentField.name]: {
        ...(prev[currentField.name] || {}),
        [`question${currentQuestionIndex + 1}`]: score
      }
    }));

    setQuizProgress(prev => [...prev, {
      field: currentField.name,
      question: currentQuestionIndex + 1,
      score: score
    }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const currentFieldIndex = CAREER_FIELDS.findIndex(f => f.name === currentField.name);
      if (currentFieldIndex < CAREER_FIELDS.length - 1) {
        setCurrentField(CAREER_FIELDS[currentFieldIndex + 1]);
      } else {
        completeQuiz();
      }
    }
  };

  const completeQuiz = () => {
    const totalScores = Object.entries(fieldScores).reduce((acc, [field, scores]) => {
      acc[field] = Object.values(scores).reduce((sum, score) => sum + score, 0);
      return acc;
    }, {});

    const sortedFields = Object.entries(totalScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name, score], index) => {
        const fieldDetails = CAREER_FIELDS.find(f => f.name === name);
        return {
          name,
          score,
          rank: index + 1,
          description: fieldDetails.description,
          icon: fieldDetails.icon
        };
      });

    const finalResults = {
      detailedScores: fieldScores,
      totalScores: totalScores,
      topFields: sortedFields,
      quizProgress: quizProgress,
      completedAt: new Date().toISOString()
    };

    updateCareerResults(finalResults);
    navigate('/skillfront');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">Loading questions for {currentField?.name}...</div>
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  // Safety check to make sure we have questions
  if (!questions || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading questions. Please try again.</p>
          <button 
            onClick={() => generateFieldQuestions(currentField)}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          {currentField.icon} {currentField.name} Career Exploration
        </h2>
        <div className="mb-4 text-sm text-gray-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {questions[currentQuestionIndex]?.question || "Loading question..."}
          </h3>
          <div className="space-y-3">
            {questions[currentQuestionIndex]?.answers?.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.score)}
                className="w-full p-3 bg-purple-100 hover:bg-purple-200 rounded-lg text-left transition"
              >
                {answer.text}
              </button>
            )) || <div>Loading answer choices...</div>}
          </div>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 flex justify-between">
          <div>Field {CAREER_FIELDS.findIndex(f => f.name === currentField.name) + 1} of {CAREER_FIELDS.length}</div>
          <div>{Math.round((CAREER_FIELDS.findIndex(f => f.name === currentField.name) / CAREER_FIELDS.length) * 100)}% complete</div>
        </div>
      </div>
    </div>
  );
};

export default CareerExplorationQuiz;