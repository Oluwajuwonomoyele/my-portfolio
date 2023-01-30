import { SliderTwoContainer, BarContainerRight, BarRight, DetailsRight } from './ContactSlider.styles';
import { FiMail} from 'react-icons/fi';
import { useState } from 'react';

const ContactSliderRight = () => {
    const [ slideOut, setSlideOut ] = useState(false)

    const toggleSlideOut = () => {
        setSlideOut(!slideOut)
    }

    return (
        <SliderTwoContainer>
            <BarContainerRight>
                <BarRight onClick={() => toggleSlideOut()}></BarRight>
            </BarContainerRight>
            <DetailsRight slideOut={slideOut}>
                <a href="mailto:jolutomisin@gmail.com">
                    <FiMail />
                </a>
                <p>Email Me!</p>
            </DetailsRight>
        </SliderTwoContainer>
  )
}

export default ContactSliderRight;