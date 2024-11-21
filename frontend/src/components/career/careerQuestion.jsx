import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What excites you the most?",
    answers: [
      { text: "Crunching numbers and analyzing data.", score: 0 },
      { text: "None of the Above", score: 0 },
      { text: "Sharing your thoughts and experiences.", score: 1 },
    ],
    typeOfQuestion: "Content Creator",
  },
  {
    question: "How do you prefer to express yourself?",
    answers: [
      {
        text: "Through creative writing or storytelling.",
        score: 1,
      },
      {
        text: "Through logical arguments and analysis.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Content Creator",
  },
  {
    question: "What platform do you find most engaging?",
    answers: [
      {
        text: " Academic journals and research papers.",
        score: 0,
      },
      {
        text: "Social media and online communities.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Content Creator",
  },
  {
    question: "How do you handle challenges?",
    answers: [
      {
        text: "Embrace them as opportunities for growth.",
        score: 1,
      },
      {
        text: "Seek proven solutions and established methods.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Content Creator",
  },
  {
    question: "What type of content do you enjoy consuming?",
    answers: [
      {
        text: "Lifestyle blogs, podcasts, or vlogs.",
        score: 1,
      },
      {
        text: "Financial reports and market analyses.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Content Creator", //Content Creater Questions End
  },
  {
    question: "What captures your attention the most?",
    answers: [
      {
        text: "Data visualizations and infographics.",
        score: 0,
      },
      {
        text: "Beautiful landscapes and moments.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Photography",
  },
  {
    question: "How do you view the world?",
    answers: [
      {
        text: "Through research and analysis, seeking patterns.",
        score: 0,
      },
      {
        text: "Through a lens, appreciating visual details.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Photography",
  },
  {
    question: "What kind of activities do you enjoy?",
    answers: [
      {
        text: "Exploring new places and experiences.",
        score: 1,
      },
      {
        text: "Solving puzzles and brain teasers.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Photography",
  },
  {
    question: "How do you handle stress?",
    answers: [
      {
        text: "Engaging in artistic and creative activities.",
        score: 1,
      },
      {
        text: "Organizing and planning to regain control.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Photography",
  },
  {
    question: "What type of magazines do you prefer?",
    answers: [
      {
        text: "Business and technology magazines.",
        score: 0,
      },
      {
        text: "Photography and travel magazines.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Photography", //Photography Questions End
  },
  {
    question: "What do you enjoy doing in your free time?",
    answers: [
      {
        text: "Physical activities and sports.",
        score: 1,
      },
      {
        text: "Reading and intellectual pursuits.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Fitness Trainer",
  },
  {
    question: "How do you approach challenges?",
    answers: [
      {
        text: "Through careful planning and strategic thinking.",
        score: 0,
      },
      {
        text: "With determination and physical effort.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Fitness Trainer",
  },
  {
    question: "What motivates you the most?",
    answers: [
      {
        text: "Achieving personal fitness goals.",
        score: 1,
      },
      {
        text: "Meeting academic or career milestones.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Fitness Trainer",
  },
  {
    question: "What type of people do you enjoy helping?",
    answers: [
      {
        text: "Those seeking to improve their health and well-being.",
        score: 1,
      },
      {
        text: "Those seeking advice on complex problems.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Fitness Trainer",
  },
  {
    question: "How do you recharge after a busy day?",
    answers: [
      {
        text: "Reflecting and contemplating in a quiet environment.",
        score: 0,
      },
      {
        text: "Engaging in physical exercise or outdoor activities.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Fitness Trainer", //Fitness Trainer Questions End
  },
  {
    question: "What type of gatherings do you find most exciting?",
    answers: [
      {
        text: "Weddings, parties, and social events.",
        score: 1,
      },
      {
        text: "Business conferences, seminars, and workshops.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Event Management",
  },
  {
    question: "How do you handle unexpected challenges?",
    answers: [
      {
        text: "Stick to the original plan and maintain stability.",
        score: 0,
      },
      {
        text: "Adapt quickly and find creative solutions.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Event Management",
  },
  {
    question: "What organizational skill do you consider most important?",
    answers: [
      {
        text: "Coordination and multitasking.",
        score: 1,
      },
      {
        text: "Strategic planning and decision-making.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Event Management",
  },
  {
    question:
      "How do you feel about working with diverse groups of people?",
    answers: [
      {
        text: "Enjoy collaborating with a variety of personalities.",
        score: 1,
      },
      {
        text: "Prefer working independently or with a small team.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Event Management",
  },
  {
    question: "What do you enjoy more?",
    answers: [
      {
        text: "Creating memorable experiences for others.",
        score: 1,
      },
      {
        text: "Analyzing data and optimizing processes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Event Management", //Event Management Questions End
  },
  {
    question: "What do you enjoy doing in front of an audience?",
    answers: [
      {
        text: "Giving presentations, leading discussions, or teaching.",
        score: 0,
      },
      {
        text: "Performing, expressing emotions, and storytelling.",
        score: 1,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Actor",
  },
  {
    question: "How do you handle rejection or criticism?",
    answers: [
      {
        text: "Use it as motivation to improve and grow.",
        score: 1,
      },
      {
        text: "Find alternative solutions to avoid criticism.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Actor",
  },
  {
    question: "What type of movies or shows do you find most appealing?",
    answers: [
      {
        text: "Dramas, comedies, or artistic films.",
        score: 1,
      },
      {
        text: "Documentaries, news programs, or educational content.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Actor",
  },
  {
    question:
      "How comfortable are you with stepping into different roles?",
    answers: [
      {
        text: "Enjoy exploring diverse characters and personas.",
        score: 1,
      },
      {
        text: "Prefer stability and consistency in your role.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Actor",
  },
  {
    question: "What energizes you the most?",
    answers: [
      {
        text: "Being in the spotlight and entertaining others.",
        score: 1,
      },
      {
        text: "Achieving goals through strategic planning and analysis.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Actor", //Actor Questions End
  },
  {
    question: "What type of music do you enjoy performing the most?",
    answers: [
      {
        text: "Various genres and styles.",
        score: 1,
      },
      {
        text: "Music that conveys a specific message or theme.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Singer",
  },
  {
    question: "How do you express your emotions best?",
    answers: [
      {
        text: "Through singing, music, and artistic expression.",
        score: 1,
      },
      {
        text: "Through logical reasoning and verbal communication.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Singer",
  },
  {
    question: "What is your preferred way of connecting with others?",
    answers: [
      {
        text: "Through the emotional impact of music.",
        score: 1,
      },
      {
        text: "Through intellectual discussions and debates.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Singer",
  },
  {
    question: "How do you handle performance anxiety?",
    answers: [
      {
        text: "Embrace it as part of the artistic process.",
        score: 1,
      },
      {
        text: "Prepare thoroughly to minimize anxiety.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Singer",
  },
  {
    question: "What do you enjoy most about music?",
    answers: [
      {
        text: "Its ability to evoke emotions and tell stories.",
        score: 1,
      },
      {
        text: "Its structure, theory, and technical aspects.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Singer", //Singer Questions End
  },
  {
    question: "What aspect of fashion excites you the most?",
    answers: [
      {
        text: "Creating unique and stylish looks for individuals.",
        score: 1,
      },
      {
        text: "Analyzing fashion trends and industry data.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stylist",
  },
  {
    question:
      "How do you approach selecting clothing for yourself or others?",
    answers: [
      {
        text: "Based on personal style preferences and creativity.",
        score: 1,
      },
      {
        text: "Following established fashion guidelines and rules.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stylist",
  },
  {
    question: "What kind of fashion content do you enjoy the most?",
    answers: [
      {
        text: "Fashion blogs, style magazines, and runway shows.",
        score: 1,
      },
      {
        text: "Business reports on the economic aspects of the fashion industry.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stylist",
  },
  {
    question:
      "How do you handle the challenge of working with diverse client preferences?",
    answers: [
      {
        text: "Tailor recommendations to each client's individual style.",
        score: 1,
      },
      {
        text: "Suggest a standardized and universally accepted wardrobe.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stylist",
  },
  {
    question: "What motivates you in the field of styling?",
    answers: [
      {
        text: "Helping individuals express themselves through fashion.",
        score: 1,
      },
      {
        text: "Achieving personal career goals and financial success in the industry.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stylist", //Stylist Questions End
  },
  {
    question: "What brings you the most satisfaction?",
    answers: [
      {
        text: "Helping others understand and succeed in their studies.",
        score: 1,
      },
      {
        text: "Achieving personal academic or professional goals.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Tutor",
  },
  {
    question:
      "How do you handle challenges in teaching or explaining concepts?",
    answers: [
      {
        text: "Break down complex topics into simpler, understandable parts.",
        score: 1,
      },
      {
        text: "Provide resources and encourage independent learning.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Tutor",
  },
  {
    question: "What kind of environment do you enjoy the most?",
    answers: [
      {
        text: "Interacting with students and facilitating discussions.",
        score: 1,
      },
      {
        text: "Working independently on research or projects.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Tutor",
  },
  {
    question:
      "How do you approach adapting to different learning styles?",
    answers: [
      {
        text: "Tailor your teaching methods to accommodate various learning styles.",
        score: 1,
      },
      {
        text: "Stick to a standardized teaching approach.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Tutor",
  },
  {
    question: "What motivates you in an educational setting?",
    answers: [
      {
        text: "Witnessing the growth and success of your students.",
        score: 1,
      },
      {
        text: "Achieving personal academic or career milestones.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Tutor", //Tutor Questions End
  },
  {
    question: "What type of content do you enjoy creating the most?",
    answers: [
      {
        text: "Travel stories, experiences, and recommendations.",
        score: 1,
      },
      {
        text: "Analytical articles or research-based content.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Professional Travel Blogger",
  },
  {
    question:
      "How do you handle unexpected challenges during your travels?",
    answers: [
      {
        text: "Embrace them as opportunities for unique content.",
        score: 1,
      },
      {
        text: "Seek comfort and stability to minimize disruptions.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Professional Travel Blogger",
  },
  {
    question: "What do you enjoy about exploring new places?",
    answers: [
      {
        text: "Immersing yourself in different cultures and experiences.",
        score: 1,
      },
      {
        text: "Analyzing and understanding the historical or economic aspects.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Professional Travel Blogger",
  },
  {
    question: "How do you engage with your audience?",
    answers: [
      {
        text: "Through visual content, storytelling, and interaction.",
        score: 1,
      },
      {
        text: "Through well-researched articles or thought-provoking discussions.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Professional Travel Blogger",
  },
  {
    question: "What energizes you the most about travel blogging?",
    answers: [
      {
        text: "Sharing experiences and connecting with a global audience.",
        score: 1,
      },
      {
        text: "Conducting in-depth research and providing valuable insights.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Professional Travel Blogger", //Travel Blogger Questions End
  },
  {
    question: "What aspect of gaming do you find most appealing?",
    answers: [
      {
        text: "Immersive storytelling and character development.",
        score: 1,
      },
      {
        text: "Strategic planning, problem-solving, and competition.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Gamer",
  },
  {
    question: "How do you handle challenges or obstacles in games?",
    answers: [
      {
        text: "Experiment with different approaches and learn from failures.",
        score: 1,
      },
      {
        text: "Prefer games with clear rules and predictable outcomes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Gamer",
  },
  {
    question: "What type of games do you enjoy the most?",
    answers: [
      {
        text: "Role-playing games, simulations, or narrative-driven games.",
        score: 1,
      },
      {
        text: "Strategy games, puzzles, or competitive multiplayer games.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Gamer",
  },
  {
    question:
      "How do you feel about collaborating with others in a gaming environment?",
    answers: [
      {
        text: "Enjoy team-based gameplay and social interaction.",
        score: 1,
      },
      {
        text: "Prefer solo play and individual achievements.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Gamer",
  },
  {
    question: "What motivates you to play games?",
    answers: [
      {
        text: "Escaping reality and experiencing virtual worlds.",
        score: 1,
      },
      {
        text: "Achieving goals, mastering skills, and completing challenges.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Gamer", //Game Questions End
  },
  {
    question: "How do you handle risk and uncertainty?",
    answers: [
      {
        text: "Comfortable taking calculated risks for potential gains.",
        score: 1,
      },
      {
        text: "Prefer stability and avoiding financial risks.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stock Analyst",
  },
  {
    question: "What excites you about financial markets?",
    answers: [
      {
        text: "Analyzing trends and making strategic investment decisions.",
        score: 1,
      },
      {
        text: "Following established financial plans and investment strategies.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stock Analyst",
  },
  {
    question: "How do you respond to market fluctuations?",
    answers: [
      {
        text: "Adapt trading strategies based on changing market conditions.",
        score: 1,
      },
      {
        text: "Stick to a long-term investment plan regardless of short-term changes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stock Analyst",
  },
  {
    question: "What type of news interests you the most?",
    answers: [
      {
        text: "Economic indicators, market news, and financial reports.",
        score: 1,
      },
      {
        text: "News related to politics, social issues, and global events.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stock Analyst",
  },
  {
    question: "How do you feel about continuous learning in finance?",
    answers: [
      {
        text: "Excited to stay updated on market trends and investment strategies.",
        score: 1,
      },
      {
        text: "Prefer a stable approach without frequent updates or changes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Stock Analyst", //Stock Analyst Questions End
  },
  {
    question: "What do you enjoy most about cooking?",
    answers: [
      {
        text: "Creativity in developing new recipes and dishes.",
        score: 1,
      },
      {
        text: "Following established recipes and cooking techniques.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Chef",
  },
  {
    question: "How do you handle the pressure of a busy kitchen?",
    answers: [
      {
        text: "Thrive in a fast-paced environment and enjoy multitasking.",
        score: 1,
      },
      {
        text: "Prefer a calm and organized kitchen with minimal chaos.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Chef",
  },
  {
    question: "What type of cuisine interests you the most?",
    answers: [
      {
        text: "Exploring and mastering diverse international cuisines.",
        score: 1,
      },
      {
        text: "Focusing on traditional or classic recipes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Chef",
  },
  {
    question: "How do you approach food presentation?",
    answers: [
      {
        text: "Emphasize artistic and visually appealing presentations.",
        score: 1,
      },
      {
        text: "Prioritize efficiency and speed over presentation details.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Chef",
  },
  {
    question: "What motivates you in the culinary field?",
    answers: [
      {
        text: "Creating memorable dining experiences for people.",
        score: 1,
      },
      {
        text: "Achieving personal goals and recognition in the industry.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Chef", //Chef Questions End
  },
  {
    question: "What aspect of marketing interests you the most?",
    answers: [
      {
        text: "Creating engaging content and developing creative campaigns.",
        score: 1,
      },
      {
        text: "Analyzing data and optimizing marketing strategies.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Digital Marketer",
  },
  {
    question: "How do you approach reaching a target audience?",
    answers: [
      {
        text: "Through social media, storytelling, and visual content.",
        score: 1,
      },
      {
        text: "Through data-driven analysis and targeted advertising.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Digital Marketer",
  },
  {
    question: "What marketing channels do you find most exciting?",
    answers: [
      {
        text: "Social media, blogs, and influencer marketing.",
        score: 1,
      },
      {
        text: "Traditional media and established advertising platforms.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Digital Marketer",
  },
  {
    question: "How do you handle changes in marketing trends?",
    answers: [
      {
        text: "Adapt strategies to align with evolving trends.",
        score: 1,
      },
      {
        text: "Stick to proven and traditional marketing methods.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Digital Marketer",
  },
  {
    question: "What motivates you in the field of digital marketing?",
    answers: [
      {
        text: "Connecting with a global audience through online channels.",
        score: 1,
      },
      {
        text: "Achieving measurable results and return on investment.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Digital Marketer", //Digital Marketer Questions End
  },
  {
    question: "What aspect of public service appeals to you the most?",
    answers: [
      {
        text: "Making a positive impact on society and community.",
        score: 1,
      },
      {
        text: "Achieving personal career and financial goals.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Civil Services",
  },
  {
    question: "How do you approach solving community issues?",
    answers: [
      {
        text: "Collaborate with diverse stakeholders to find solutions.",
        score: 1,
      },
      {
        text: "Follow established procedures and regulations.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Civil Services",
  },
  {
    question: "What type of work environment do you prefer?",
    answers: [
      {
        text: "Dynamic and varied, involving different challenges.",
        score: 1,
      },
      {
        text: "Stable and structured, with a clear hierarchy and guidelines.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Civil Services",
  },
  {
    question: "How do you respond to changes in public policies?",
    answers: [
      {
        text: "Adapt strategies to align with evolving policies.",
        score: 1,
      },
      {
        text: "Prefer a stable and consistent policy environment.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Civil Services",
  },
  {
    question: "What motivates you in pursuing a career in civil service?",
    answers: [
      {
        text: "Contributing to the greater good and societal well-being.",
        score: 1,
      },
      {
        text: "Achieving personal success and recognition in a specific field.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Civil Services", //Civil Services Questions End
  },
  {
    question: "What aspect of animation excites you the most?",
    answers: [
      {
        text: "Creativity in character design and storytelling.",
        score: 1,
      },
      {
        text: "Technical aspects of animation production and software.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Animator",
  },
  {
    question: "How do you approach bringing characters to life?",
    answers: [
      {
        text: "Emphasize emotions, expressions, and storytelling.",
        score: 1,
      },
      {
        text: "Focus on precise movement and technical accuracy.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Animator",
  },
  {
    question:
      "What type of animation projects do you find most appealing?",
    answers: [
      {
        text: "Narrative-driven animations, films, or series.",
        score: 1,
      },
      {
        text: "Technical and instructional animations, simulations, or games.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Animator",
  },
  {
    question: "How do you handle creative challenges in animation?",
    answers: [
      {
        text: "Experiment with different styles and techniques.",
        score: 1,
      },
      {
        text: "Follow established animation principles and norms.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Animator",
  },
  {
    question: "What motivates you in the field of animation?",
    answers: [
      {
        text: "Creating immersive and visually stunning experiences.",
        score: 1,
      },
      {
        text: "Achieving technical mastery and precision in animation production.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Animator", //Animatior Questions End
  },
  {
    question: "What do you find most intriguing about current events?",
    answers: [
      {
        text: "Investigating and reporting on newsworthy stories.",
        score: 1,
      },
      {
        text: "Analyzing data and trends for research purposes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "News Reporter",
  },
  {
    question: "How do you handle tight deadlines and pressure?",
    answers: [
      {
        text: "Thrive in fast-paced environments and enjoy the urgency.",
        score: 1,
      },
      {
        text: "Prefer a calm and structured approach to tasks.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "News Reporter",
  },
  {
    question: "What type of news interests you the most?",
    answers: [
      {
        text: "Breaking news, human interest stories, and interviews.",
        score: 1,
      },
      {
        text: "Analytical pieces, research, and in-depth reporting.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "News Reporter",
  },
  {
    question: "How do you feel about being in the public eye?",
    answers: [
      {
        text: "Comfortable and enjoy the visibility of reporting.",
        score: 1,
      },
      {
        text: "Prefer a more behind-the-scenes role.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "News Reporter",
  },
  {
    question: "What motivates you in the field of journalism?",
    answers: [
      {
        text: "Informing the public and raising awareness.",
        score: 1,
      },
      {
        text: "Achieving personal career goals and financial success.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "News Reporter", //News Reporter Questions End
  },
  {
    question: "What aspect of filmmaking excites you the most?",
    answers: [
      {
        text: "Creative storytelling and visual direction.",
        score: 1,
      },
      {
        text: "Technical aspects of cinematography and editing.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Film Director",
  },
  {
    question: "How do you handle creative differences with team members?",
    answers: [
      {
        text: "Encourage collaboration and find common ground.",
        score: 1,
      },
      {
        text: "Prefer to have the final say to maintain the director's vision.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Film Director",
  },
  {
    question: "What type of films do you find most appealing?",
    answers: [
      {
        text: "Narrative-driven films with strong character development.",
        score: 1,
      },
      {
        text: "Experimental films, documentaries, or technical showcases.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Film Director",
  },
  {
    question: "How do you handle challenges on a film set?",
    answers: [
      {
        text: "Adapt and find creative solutions on the spot.",
        score: 1,
      },
      {
        text: "Follow established protocols and avoid unnecessary risks.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Film Director",
  },
  {
    question: "What motivates you in the field of film directing?",
    answers: [
      {
        text: "Creating impactful and memorable cinematic experiences.",
        score: 1,
      },
      {
        text: "Achieving technical mastery and precision in filmmaking.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Film Director", //Film Director Questions End
  },
  {
    question: "What aspect of art do you enjoy the most?",
    answers: [
      {
        text: "Creating detailed sketches and illustrations.",
        score: 1,
      },
      {
        text: "Analyzing art history, theory, and criticism.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Sketch Artist",
  },
  {
    question:
      "How do you approach capturing a scene or subject in a sketch?",
    answers: [
      {
        text: "Emphasize creativity, spontaneity, and personal style.",
        score: 1,
      },
      {
        text: "Follow established techniques and methods for accuracy.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Sketch Artist",
  },
  {
    question:
      "What type of sketching projects do you find most interesting?",
    answers: [
      {
        text: "Expressive and imaginative sketches.",
        score: 1,
      },
      {
        text: "Technical and precise architectural or scientific sketches.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Sketch Artist",
  },
  {
    question: "How do you handle creative blocks or lack of inspiration?",
    answers: [
      {
        text: "Experiment with new styles and ideas to break through.",
        score: 1,
      },
      {
        text: "Prefer structured processes to avoid creative blocks.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Sketch Artist",
  },
  {
    question: "What motivates you in the field of sketch artistry?",
    answers: [
      {
        text: "Creating visually compelling and thought-provoking artwork.",
        score: 1,
      },
      {
        text: "Achieving technical proficiency and recognition in the art world.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Sketch Artist", //Sketch Artist Questions End
  },
  {
    question: "What aspect of psychology interests you the most?",
    answers: [
      {
        text: "Interacting with and helping individuals with mental health challenges.",
        score: 1,
      },
      {
        text: "Conducting research and contributing to theoretical knowledge.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Psychiatrist",
  },
  {
    question: "How do you approach building trust with patients?",
    answers: [
      {
        text: "Empathy, active listening, and building personal connections.",
        score: 1,
      },
      {
        text: "Maintaining professional boundaries and adhering to protocols.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Psychiatrist",
  },
  {
    question: "What type of psychiatric work appeals to you?",
    answers: [
      {
        text: "Clinical practice, counseling, and therapy.",
        score: 1,
      },
      {
        text: "Academic research, teaching, or policy development.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Psychiatrist",
  },
  {
    question:
      "How do you handle challenging and emotionally charged situations?",
    answers: [
      {
        text: "Comfortable providing emotional support and guidance.",
        score: 1,
      },
      {
        text: "Prefer objective analysis and problem-solving without emotional involvement.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Psychiatrist",
  },
  {
    question: "What motivates you in the field of psychiatry?",
    answers: [
      {
        text: "Making a positive impact on individuals' mental health and well-being.",
        score: 1,
      },
      {
        text: "Achieving personal career goals and contributions to the field.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Psychiatrist", // Psychiatrist Questions End
  },
  {
    question: "What aspect of flying excites you the most?",
    answers: [
      {
        text: "Operating an aircraft and navigating through the skies.",
        score: 1,
      },
      {
        text: "Understanding the technical mechanics and engineering of aircraft.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Airline Pilot",
  },
  {
    question:
      "How do you handle high-pressure situations in the cockpit?",
    answers: [
      {
        text: "Stay calm and focused, making quick and informed decisions.",
        score: 1,
      },
      {
        text: "Prefer clear procedures and avoiding high-pressure situations.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Airline Pilot",
  },
  {
    question:
      "What type of flying experience do you find most appealing?",
    answers: [
      {
        text: "Commercial flights, passenger interactions, and global travel.",
        score: 1,
      },
      {
        text: "Experimental or test flights, technical challenges, and research.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Airline Pilot",
  },
  {
    question: "How do you approach continuous learning in aviation?",
    answers: [
      {
        text: "Embrace new technologies and training to stay updated.",
        score: 1,
      },
      {
        text: "Prefer a stable and consistent approach to flying without frequent changes.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Airline Pilot",
  },
  {
    question: "What motivates you in the field of aviation?",
    answers: [
      {
        text: "Being in command and responsible for the safety of passengers.",
        score: 1,
      },
      {
        text: "Achieving technical mastery and precision in piloting.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Airline Pilot", //Airline Pilot Questions End
  },
  {
    question: "What aspect of entrepreneurship excites you the most?",
    answers: [
      {
        text: "Creating and developing innovative business ideas.",
        score: 1,
      },
      {
        text: "Analyzing market trends and business strategies.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Entrepreneur",
  },
  {
    question: "How do you handle uncertainty and risk in business?",
    answers: [
      {
        text: "Comfortable taking calculated risks for potential gains.",
        score: 1,
      },
      {
        text: "Prefer stable and proven business models to minimize risk.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Entrepreneur",
  },
  {
    question: "What type of business projects interest you?",
    answers: [
      {
        text: "Startups and ventures with potential for growth and impact.",
        score: 1,
      },
      {
        text: "Established businesses with a focus on efficiency and stability.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Entrepreneur",
  },
  {
    question: "How do you approach decision-making in business?",
    answers: [
      {
        text: "Entrepreneurial intuition and adaptability.",
        score: 1,
      },
      {
        text: "Data-driven analysis and strategic planning.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Entrepreneur",
  },
  {
    question: "What motivates you in the field of entrepreneurship?",
    answers: [
      {
        text: "Creating value, solving problems, and making a positive impact.",
        score: 1,
      },
      {
        text: "Achieving personal career goals and financial success in business.",
        score: 0,
      },
      {
        text: "None of the Above",
        score: 0,
      },
    ],
    typeOfQuestion: "Entrepreneur", //Entrepreneur Questions End
  },
 
];
const App = () => {
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
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center">
        <header className="bg-white shadow-md w-full p-4 fixed top-0">
          <nav className="flex justify-between items-center max-w-4xl mx-auto">
            <a href="/" className="flex items-center space-x-3">
              <img src="/img/logo.png" alt="Logo" className="h-10" />
              <span className="text-xl font-semibold text-gray-800">AI Guruji</span>
            </a>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
              Sign In
            </button>
          </nav>
        </header>
  
        <main className="flex flex-col items-center mt-28 w-full px-4">
          <motion.h1
            className="text-4xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Non-Conventional Career Test
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
              <button
                onClick={restartQuiz}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-indigo-600"
              >
                Restart Quiz
              </button>
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
  
  
export default App;
