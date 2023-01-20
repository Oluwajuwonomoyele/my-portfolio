import { HeroSection, HeroContainer, HeroImgContainer, HeroImg, HeroContent, HeroHeader, HeroText, HeroText2, ContactsContainer, ContactsContainer2, Contacts, Line } from "./Hero.styles";
import img from '../../assets/profile.svg'
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from "react-scroll";

const Hero = () => {
    return (  
        <HeroSection>
            <HeroContainer>
                <HeroImgContainer>
                    <HeroImg src={img} />
                </HeroImgContainer>

                <HeroContent>
                    <HeroHeader>Hello There! Juwon Olutomisin Here.</HeroHeader>
                    <HeroText>I am frontend developer based in Lagos, Nigeria with 2+ years of developing mobile responsive, user-friendly web application frontends. From using CSS to implement pixel perfect designs to utilizing frontend frameworks to consume API,I make great web user interface experience for users.</HeroText>
                    <HeroText2>Learn more <Link to='about' smooth={true} spy={true} duration={500} offset={-100}>about me</Link> or jump straight to <Link to='projects' smooth={true} spy={true} duration={500} offset={-100}>my work</Link>.</HeroText2>
                </HeroContent>
            </HeroContainer>
            <ContactsContainer>
                <Contacts>
                    <a href="https://github.com/oluwajuwonomoyele">
                        <FiGithub />
                    </a>
                    <a href="https://twitter.com/OlutomisinJuwon">
                        <FiTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/oluwajuwon-olutomisin/">
                        <FiLinkedin />
                    </a>

                </Contacts>
                <Line></Line>
            </ContactsContainer>
            <ContactsContainer2>
                <Contacts>
                    <a href="mailto:jolutomisin@gmail.com">
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