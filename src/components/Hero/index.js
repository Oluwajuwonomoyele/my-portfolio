import { HeroSection, HeroContainer, HeroImgContainer, HeroImg, HeroContent, HeroHeader, HeroText, HeroText2, ContactsContainer, ContactsContainer2, Contacts, Line, Scroll, ScrollContainer, Bolt, Lining, Arrows } from "./Hero.styles";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from "react-scroll";
import Typed from "react-typed";
import img from '../../assets/profile.svg';

const Hero = () => {
    return (  
        <HeroSection>
            <HeroContainer>
                <HeroImgContainer>
                    <HeroImg src={img} />
                </HeroImgContainer>

                <HeroContent>
                    <HeroHeader>
                        <Typed showCursor={false} 
                        strings={['Hello There! Juwon Olutomisin Here.']}
                        typeSpeed={80}
                        />
                    </HeroHeader>
                    <HeroText>I am a frontend web developer based in Lagos, Nigeria able to develop responsive, user-friendly web application for all devices. From using CSS to implement frontend designs to utilizing frontend frameworks for optimal consumption of APIs, I make great web user interface experience for users.</HeroText>
                    <HeroText2>Learn more <Link to='about' href="#" smooth={true} spy={true} duration={500} offset={-100}>about me</Link> or jump straight to <Link to='projects' href="#" smooth={true} spy={true} duration={500} offset={-100}>my work</Link>.</HeroText2>
                </HeroContent>

                <Scroll>
                    <ScrollContainer>
                        <Lining>
                            <Bolt></Bolt>
                        </Lining>
                        <Arrows>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9L12 17L20 9" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9L12 17L20 9" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9L12 17L20 9" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </Arrows>
                    </ScrollContainer>
                </Scroll>
            </HeroContainer>

            <ContactsContainer>
                <Contacts>
                    <a href="https://github.com/oluwajuwonomoyele" aria-label='Link to my github profile'>
                        <FiGithub />
                    </a>
                    <a href="https://twitter.com/OlutomisinJuwon" aria-label='Link to my twitter profile'>
                        <FiTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/oluwajuwon-olutomisin/" aria-label='Link to my linkedin profile'>
                        <FiLinkedin />
                    </a>
                </Contacts>
                <Line></Line>
            </ContactsContainer>

            <ContactsContainer2>
                <Contacts>
                    <a href="mailto:jolutomisin@gmail.com" aria-label='Link to send me a mail'>
                        <FiMail />
                    </a>
                    <p>jolutomisin@gmail.com</p>
                </Contacts>
                <Line></Line>
            </ContactsContainer2>
        </HeroSection>
    );
}
 
export default Hero;