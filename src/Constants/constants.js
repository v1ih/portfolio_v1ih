/*
  Copyright (C), 2025, Lavínia Ferraz Nogueira (v1ih)
    @author Lavínia Ferraz Nogueira
    FileName: constants.js
    @version: I
    Creation: 05/07/2025
    Last modification: -
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
} from '../assets';

import weather from '../assets/projects/weather.png';
import earth from '../assets/projects/earth.png';
import gradient from '../assets/projects/gradient-generator.png';
import chatbot from '../assets/projects/chatbot.png';
import animated from '../assets/projects/animated.png';
import memory from '../assets/projects/memory.png';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  weather,
  earth,
  chatbot,
  animated,
  memory,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there! Welcome to my portfolio.",

		"My name is Lavínia. I'm 20 years old, a senior Information Systems student, and also pursuing a degree in Computer Engineering. I have a strong passion for AI-related technologies, but I’m also deeply enthusiastic about frontend development.",
    "Outside of my academic life, I'm a bookworm, a boxing enthusiast, and a dog lover.",
    "I'm always excited to collaborate with individuals and teams who share my passion for creating extraordinary experiences. Thank you so much for visiting my portfolio!"
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Memory Game",
    description: 'Memory Game made with ReactJS and Vite, simple and pretty.',
    image: memory,
    source_code_link: 'https://github.com/v1ih/memory-game-react',
    demo_link: 'https://memory-game-lavinia.vercel.app/',
  },
  {
    name: 'Weather App',
    description: 'Project description: A website for you to check the weather, in real time. Has an API Key in the backend. Just type and search to get the weather.',
    image: weather,
    source_code_link: 'https://github.com/v1ih/weather-app',
    demo_link: 'https://v1ih.github.io/weather-app/',
  },
  {
    name: 'Chatbot AI',
    description: 'A fully functional AI chatbot using ReactJS and CSS, integrated with Gemini AI. The chatbot can answer any question in real time, working on mobile too!I created a fictional company called Aroma Beans Coffee. The chatbot is designed to respond to questions about the café\'\s menu opening hours, brewing tips, and more.',
    image: chatbot,
    source_code_link: 'https://github.com/v1ih/ai-chatbot',
    demo_link: 'https://ai-chatbot-lavinia.vercel.app/',
  },
  {
    name: 'Animated Portfolio',
    description: 'Very colorful and responsive portfolio created with HTML, CSS and JS, designed to all devices',
    image: animated,
    source_code_link: 'https://github.com/bl33h/clientServerChat',
    demo_link: 'https://youtu.be/Mk1BNqPz1n4',
  },
  {
    name: 'Gradient Generator',
    description: 'A gradient generator perfect for frontend developers.',
    image: gradient,
    source_code_link: 'https://github.com/v1ih/gradient-generator',
    demo_link: 'https://v1ih.github.io/gradient-generator/',
  },
  {
    name: '3D Model of Earth',
    description: '3D Model of Earth made with ThreeJS.',
    image: earth,
    source_code_link: 'https://github.com/v1ih/earth-3d',
    demo_link: 'https://v1ih.github.io/earth-3d/',
  },
  // {
  //   name: 'Movies App',
  //   description: 'An intelligent movie app that uses an API to analyze your search and recommend the top 5 movies for you to watch. Built with ReactJS and Vite, the app features: High-performance loading, Responsive design for all devices and Smart recommendation system. This project helped me explore API integration, UI/UX best practices, and performance optimization in modern front-end development.',
  //   image: "https://camo.githubusercontent.com/4c4ca68f5129db681313c44d9fe568db8dc6792412df4093dcb133371ca1a0cb/68747470733a2f2f6c756d696572652d612e616b616d616968642e6e65742f76312f696d616765732f65735f686f7573652d6f662d6469736e65792d706c75735f6d6f625f6d5f35376437663836652e6a7065673f726567696f6e3d302c302c3830302c3630302677696474683d373638",
  //   source_code_link: 'https://github.com/bl33h/disneyPlusReplica',
  //   demo_link: 'https://disneyplusreplica.netlify.app',
  // },
  // {
  //   name: 'Deep Dive Odyssey Raycasting',
  //   description: 'The code represents a raycasting graphics application with a Finding Pirate Treasure Under the Sea theme. It creates a 3D perspective effect by simulating rays of light and their interactions with a map.',
  //   image: "https://camo.githubusercontent.com/6f427dc9ed1d9f990ac1309c323449fc51322fc8c10990ddef9ad11f3e49350b/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966",
  //   source_code_link: 'https://github.com/bl33h/deepDiveOdysseyRaycasting',
  //   demo_link: 'https://camo.githubusercontent.com/94f800b79d759c06717af7d816a16ccff75a0101c942ca9ad3c562d0dd2c9404/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966',
  // },
  // {
  //   name: 'Fibonacci & Factorial',
  //   description: 'A project that includes two LISP programs: one for factorials and the other for Fibonacci sequences. They use recursion, prompt user input, and display results efficiently.',
  //   image: "https://i.pinimg.com/originals/96/c3/9a/96c39a5cb89092760fe11f355a32f4a4.gif",
  //   source_code_link: 'https://github.com/bl33h/fibonacciAndFactorial',
  //   demo_link: 'https://camo.githubusercontent.com/59b3c9969f369559fbeb1ed6a53f159e0e83b1151b82552b5b2165c4e9686e89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31612f4669626f6e616363695f63616c6c5f747265655f352e676966',
  // }
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'npm',
    title: 'npm',
    icon: npmIcon,
    description:
      'When it comes to building web applications, I prefer using npm as my runtime environment over Yarn. I have expertise to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Neo4j',
    icon: neoIcon,
    description:
      'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
