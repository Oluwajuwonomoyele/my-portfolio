import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
    height: 87vh;
    display: flex;
    align-items: center;
    padding-top: 80px;
    transition: padding 0.5s ease;

    @media screen and (max-width: 768px) {
        height: auto;
    }

`
export const HeroContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem;
    display: flex;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 4rem;
    }
    @media screen and (max-width: 425px) {
        padding: 2rem;
        margin-bottom: 5rem;
    }      
`
export const HeroImgContainer = styled.div`
     @media screen and (max-width: 768px) {
        display: none;
    }

`
export const HeroImg = styled.img`
    max-width: 550px;
`
export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const flow = keyframes`
    0% {
        background-position: 50% 0%
    }
    50% {
        background-position: 20% 100%
    }
    70% {
        background-position: 50% 0%
    }
    100% {
        background-position: 0% 0%; 
    }
`
export const HeroHeader = styled.h1`
    font-size: 4rem;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient( 45deg, #ffc5ad, #fb9a69, #F5C2A9, #E87435 );
    background-size: 100% 400%;
    animation: ${flow} infinite 20s linear alternate forwards;

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }      
    @media screen and (max-width: 320px) {
        font-size: 2.6rem;
    }      
`
export const HeroText = styled.p`
    font-size: 1.2rem;
    line-height: 2rem;
    color: ${props => props.theme.colors.white};

    @media screen and (max-width: 768px) {
        line-height: 2.5rem;
    }
`
export const HeroText2 = styled.p`
    font-size: 1.2rem;
    line-height: 2rem;
    color: ${props => props.theme.colors.white};

    a {
        color: ${props => props.theme.colors.primary};
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        transition: all 0.3s ease-out;
        position: relative;
        cursor: pointer;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            border-radius: 3px;
            transition: all 0.3s ease-out;
            background-color: ${props => props.theme.colors.primary};
        }
        
        &:hover::after {
             width: 100%;
        }
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

    @media screen and (max-width: 768px) {
        display: none;
    }
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

    @media screen and (max-width: 768px) {
        display: none;
    }
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