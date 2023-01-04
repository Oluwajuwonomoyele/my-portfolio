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
export const ContactsContainer = styled.div`
    position: fixed;
    margin-left: 8rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
export const ContactsContainer2 = styled.div`
    position: fixed;
    right: 0;
    margin-right: 7rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.5rem;

    a {
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
        transition: all 0.3s ease-out;
    }
    a:hover {
        transform: translateY(-4px);
        color: ${props => props.theme.colors.primary2};
    }
    p {
        text-orientation: mixed;
        writing-mode: vertical-rl;
        font-size: 1rem;
        cursor: default;
        color: ${props => props.theme.colors.primary};
    }
`
export const Line = styled.div`
    width: 2px;
    height: 100px;
    background-color: ${props => props.theme.colors.primary};
`