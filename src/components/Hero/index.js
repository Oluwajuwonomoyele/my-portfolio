import { HeroSection, HeroContainer, HeroImgContainer, HeroImg, HeroContent, HeroHeader, HeroText, HeroText2 } from "./Hero.styles";
import img from '../../assets/profile.svg'

const Hero = () => {
    return (  
        <HeroSection>
            <HeroContainer>
                <HeroImgContainer>
                    <HeroImg src={img} />
                </HeroImgContainer>

                <HeroContent>
                    <HeroHeader>Hello There!, Juwon Olutomisin Here.</HeroHeader>
                    <HeroText>I am frontend developer based in Lagos, Nigeria with 2+ years of developing mobile responsive, user-friendly web application frontends. From using CSS to implement pixel perfect designs to utilizing frontend frameworks to consume API,I make great web user interface experience for users.</HeroText>
                    <HeroText2>Learn more <a href="#">about me</a> or jump straight <a href="#">to my work</a></HeroText2>
                </HeroContent>

            </HeroContainer>
        </HeroSection>
    );
}
 
export default Hero;