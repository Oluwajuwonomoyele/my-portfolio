import { SliderOneContainer, BarContainer, Bar, Details } from './ContactSlider.styles';
import { FiGithub, FiTwitter, FiLinkedin} from 'react-icons/fi';
import { useState } from 'react';

const ContactSliderLeft = () => {
    const [ slideOut, setSlideOut ] = useState(false)

    const toggleSlideOut = () => {
        setSlideOut(!slideOut)
    }

    return (
        <SliderOneContainer>
            <BarContainer>
                <Bar onClick={() => toggleSlideOut()}></Bar>
            </BarContainer>
            <Details slideOut={slideOut}>
                <a href="https://github.com/oluwajuwonomoyele">
                    <FiGithub />
                </a>
                <a href="https://twitter.com/OlutomisinJuwon">
                    <FiTwitter />
                </a>
                <a href="https://www.linkedin.com/in/oluwajuwon-olutomisin/">
                    <FiLinkedin />
                </a>
            </Details>
        </SliderOneContainer>
  )
}

export default ContactSliderLeft;