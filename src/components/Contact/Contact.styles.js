import styled from "styled-components";

export const ContactSection = styled.section`

`
export const ContactContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem; 

    @media screen and (max-width: 768px) {
        padding: 4rem;
    }

    @media screen and (max-width: 425px) {
        padding: 2rem;
    }      
`
export const ContactHeader = styled.div`
    display: flex;
    align-items: center;

    h1 {
            font-size: 2rem;
            color: ${props => props.theme.colors.white};

            @media screen and (max-width: 425px) {
            font-size: 1.2rem;
            }      
        }
    h2 {
        font-size: 7rem;
        letter-spacing: 3px;
        line-height: 7rem;
        color: ${props => props.theme.colors.primary};
        opacity: 0.3;

        @media screen and (max-width: 425px) {
            font-size: 3rem;
            line-height: normal;
        }      
    }
    div:nth-last-child(1) {
        background-color: ${props => props.theme.colors.white};
        height: 1px;
        width: 400px;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`

export const ContactContent = styled.div`
    margin: 4rem 0;
    width: 100%;
    padding: 4rem;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 9px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 2.5rem;
    }

    @media screen and (max-width: 425px) {
            padding: 2rem;
    }      

    div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 8;
    }
    div:nth-child(2) {
        grid-area: 1 / 8 / 2 / 13;
        align-self: flex-end;
        justify-self: end;

        @media screen and (max-width: 768px) {
            align-self: flex-start;
            justify-self: auto;
        }
    }

    h1 {
        font-size: 4rem;
        text-transform: uppercase;
        color: ${props => props.theme.colors.primary};

        @media screen and (max-width: 425px) {
            font-size: 3rem;
        }      
        @media screen and (max-width: 320px) {
            font-size: 2.6rem;
        }
    }
    p {
        font-size: 1.3rem;
        line-height: 3rem;
        color: ${props => props.theme.colors.white};

        @media screen and (max-width: 425px) {
            margin-top: 1rem;
            font-size: 1.2rem;
        }      
    }
    a {
        padding: 1rem;
        color: ${props => props.theme.colors.primary};
        position: relative;
        border-radius: 5px;
        z-index: 22;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        @media screen and (max-width: 768px) {
            display: inline-flex;
        }

        span {
            font-size: 1rem;
            font-weight: bold;
        }

        &::before {
            content: '';
            position: absolute;
            width: 20%;
            height: 100%;
            inset: 0;
            background-color: ${props => props.theme.colors.primary};
            border-radius: 5px;
            opacity: 0.4;
            transition: all 0.3s ease-out;
        }
        &:hover::before {
            width: 100%;
        }
    }
`
export const Acknowlodgment = styled.p`
    text-align: center;
    font-weight: bold;
    color: ${props => props.theme.colors.primary2};
    padding: 0 3rem 1rem 3rem

`