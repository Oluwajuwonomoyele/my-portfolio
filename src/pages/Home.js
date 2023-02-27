
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";
import ContactSliderLeft from "../components/ContactSliders/ContactSliderLeft";
import ContactSliderRight from "../components/ContactSliders/ContactSliderRight";

const Home = () => {
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
        <>
            <Navbar openNav={openNav} setOpenNav={setOpenNav} navScroll={navScroll}/>
            <ContactSliderLeft setIsLeftOpen={setIsLeftOpen} isRightOpen={isRightOpen} setIsRightOpen={setIsRightOpen} />
            <ContactSliderRight setIsRightOpen={setIsRightOpen} isLeftOpen={isLeftOpen} setIsLeftOpen={setIsLeftOpen} />
            <Hero navScroll={navScroll}/>
            <Projects />
            <About />
            <Skills />
            <Contact />
        </>
    );
}
 
export default Home;