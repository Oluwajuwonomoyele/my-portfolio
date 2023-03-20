import { PreloaderSection, PreloaderContainer, Title, Block1, Role, Block2 } from "./Preloader.styles";

const Preloader = () => {
    return (  
        <PreloaderSection>
            <PreloaderContainer>
                <Title>
                    <Block1></Block1>
                    <h1>Juwon Olutomisin <span></span></h1>
                </Title>

                <Role>
                    <Block2></Block2>
                    <p>Frontend Developer</p>
                </Role>
            </PreloaderContainer>
        </PreloaderSection>
    );
}
 
export default Preloader;