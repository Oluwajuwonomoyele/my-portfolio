import { AboutSection, AboutContainer, AboutHeader, AboutContent } from './About.styles';
import aboutPic from '../../assets/about me.svg';

const About = () => {
    return (  
        <AboutSection name='about'>
            <AboutContainer>
                <AboutHeader>
                    <div>
                        <h1>Get To Know Me</h1>
                        <h2>About Me</h2>
                    </div>
                    <div></div>
                </AboutHeader>
                <AboutContent>
                    <p>Hello again!😎 Thanks for scrolling this far!! Yes as you already know I am a frontend web developer, I started my coding journey about two years ago and I'm grateful for how far I've come and enthusiastic about the future. 
                    Other than coding, I am currently a student of the University of Lagos, Nigeria majoring in Bachelor of Science in Mathematics. I enjoy lots of music and movies, also feel free to reach out to me with book recommendations (doesn't necessarily have to be about coding).
                    </p>
                    <img src={aboutPic} alt="about me" loading='lazy'/>

                </AboutContent>
            </AboutContainer>
        </AboutSection>
    );
}
 
export default About;