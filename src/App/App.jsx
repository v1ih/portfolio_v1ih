/*
  Copyright (C), 2025, Lavínia Ferraz Nogueira (v1ih)
    @author Lavínia Ferraz Nogueira
    FileName: index.html
    @version: I
    Creation: 05/07/2025
    Last modification: -
*/

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;