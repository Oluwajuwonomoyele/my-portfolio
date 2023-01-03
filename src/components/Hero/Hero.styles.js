import styled from "styled-components";

export const HeroSection = styled.section`
    height: 87vh;
    display: flex;
    align-items: center;

`
export const HeroContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem;
    display: flex;
    align-items: center;
    gap: 4rem;
`
export const HeroImgContainer = styled.div`
`
export const HeroImg = styled.img`
    max-width: 550px;
`
export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const HeroHeader = styled.h1`
    font-size: 4rem;
    color: ${props => props.theme.colors.primary};
`
export const HeroText = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.white};
`
export const HeroText2 = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.white};

    a {
        color: ${props => props.theme.colors.primary};
    }
`