import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const theme = {
    colors: {
      primary: '#ffc5ad',
      primary2: '#fb9a69',
      secondary: '#2d2c2c',
      white: '#e8e8e8'
    }
  }

  const [openNav,setOpenNav] = useState(false)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </ThemeProvider>
    </Router>
  );
}

export default App;
