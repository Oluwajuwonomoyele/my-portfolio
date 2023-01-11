import { ContactSection, ContactContainer, ContactHeader, ContactContent, Acknowlodgment } from "./Contact.styles";
import { MdDoubleArrow } from 'react-icons/md'

const Contact = () => {
    return (  
        <ContactSection name='contact'>
            <ContactContainer>
                <ContactHeader>
                    <div>
                        <h1>Contact Me</h1>
                        <h2>Get In Touch</h2>
                    </div>
                    <div>

                    </div>
                </ContactHeader>
                <ContactContent>
                    <div>
                        <h1>Let's make something great!</h1>
                        <p>Interested in working together? Or you have frontend related questions, feel free to hit me up and I'll get back to you as soon as I can. I'm currently AVAILABLE for any frontend projects.</p>
                    </div>
                    <div>
                        <a href="mailto:jolutomisin@yahoo.com"><span>Hit Me Up</span> <MdDoubleArrow /></a>
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