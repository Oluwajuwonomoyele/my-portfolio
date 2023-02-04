import { SliderTwoContainer, BarContainerRight, BarRight, DetailsRight } from './ContactSlider.styles';
import { FiMail} from 'react-icons/fi';
import { useState } from 'react';

const ContactSliderRight = ({setIsRightOpen, isLeftOpen, setIsLeftOpen}) => {
    const [ slideOut, setSlideOut ] = useState(false)

    const toggleSlideOut = () => {
        if(isLeftOpen){
            setIsLeftOpen(false)
            setIsRightOpen(true)
            setSlideOut(true)
        }else {
            setSlideOut(!slideOut)
            setIsRightOpen(true)
        }
    }


    return (
        <SliderTwoContainer>
            <BarContainerRight>
                <BarRight onClick={() => toggleSlideOut()}></BarRight>
            </BarContainerRight>
            <DetailsRight slideOut={slideOut} isLeftOpen={isLeftOpen}>
                <a href="mailto:jolutomisin@gmail.com">
                    <FiMail />
                </a>
                <p>Email Me!</p>
            </DetailsRight>
        </SliderTwoContainer>
  )
}

export default ContactSliderRight;