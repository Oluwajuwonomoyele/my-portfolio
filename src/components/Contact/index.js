import { ContactSection, ContactContainer, ContactHeader, ContactContent, Acknowlodgment } from "./Contact.styles";
import { MdDoubleArrow } from 'react-icons/md'

const Contact = () => {
    return (  
        <ContactSection name='contact'>
            <ContactContainer>
                <ContactHeader data-aos='fade-right' data-aos-delay='200'>
                    <div>
                        <h1>Contact Me</h1>
                        <h2>Get In Touch</h2>
                    </div>
                    <div></div>
                </ContactHeader>
                <ContactContent data-aos='fade-up'>
                    <div>
                        <h1 data-aos='fade-up' data-aos-delay='200'>Let's make something great!</h1>
                        <p data-aos='fade-up' data-aos-delay='300'>Interested in working together? Or you have frontend related questions, feel free to hit me up and I'll get back to you as soon as I can. I'm currently AVAILABLE for any frontend projects.</p>
                    </div>
                    <div data-aos='fade-left' data-aos-delay='400'>
                        <a href="mailto:jolutomisin@yahoo.com" aria-label='Link to send me an email'><span>Hit Me Up</span> <MdDoubleArrow /></a>
                    </div>

                </ContactContent>
            </ContactContainer> 
            <Acknowlodgment>
                Designed and Built by Juwon Olutomisin
            </Acknowlodgment>
        </ContactSection>
    );
}
 
export default Contact;