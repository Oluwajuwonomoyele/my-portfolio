import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import ContactSliderLeft from "./components/ContactSliders/ContactSliderLeft";
import ContactSliderRight from "./components/ContactSliders/ContactSliderRight";
import ScrollToTop from "./ScrollToTop";
import AnimatedCursor from 'react-animated-cursor';

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
  const [navScroll, setNavScroll] = useState(false)
  const [isLeftOpen, setIsLeftOpen ] = useState(false)
  const [isRightOpen, setIsRightOpen ] = useState(false)
    
    const changeNavBg = () => {
        if(window.scrollY >= 50){
            setNavScroll(true)
        }else {
            setNavScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg)
    }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <AnimatedCursor 
           innerSize={15}
           outerSize={25}
           color='255, 197, 173'
           outerAlpha={0.5}
           innerScale={1}
           outerScale={2}
           clickables={[
             'a',
             'button',
             '.link' ]} />
          <Navbar openNav={openNav} setOpenNav={setOpenNav} navScroll={navScroll}/>
          <ContactSliderLeft setIsLeftOpen={setIsLeftOpen} isRightOpen={isRightOpen} setIsRightOpen={setIsRightOpen} />
          <ContactSliderRight setIsRightOpen={setIsRightOpen} isLeftOpen={isLeftOpen} setIsLeftOpen={setIsLeftOpen} />
          <Hero navScroll={navScroll}/>
          <Projects />
          <About />
          <Skills />
          <Contact />
        </ScrollToTop>
      </ThemeProvider>
    </Router>
  );
}

export default App;
