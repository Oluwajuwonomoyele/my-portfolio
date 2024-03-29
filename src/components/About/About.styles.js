import styled from "styled-components";

export const AboutSection = styled.section`

`

export const AboutContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem; 

    @media screen and (max-width: 1024px) {
        padding: 4rem;
    }
    @media screen and (max-width: 425px) {
        padding: 2rem;
    }      
`

export const AboutHeader = styled.div`
    display: flex;
    align-items: center;

    h1 {
            font-size: 2rem;
            color: ${props => props.theme.colors.white};

            @media screen and (max-width: 768px) {
                font-size: 1.5rem;
            }
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
export const AboutContent = styled.div`
    padding: 4rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: 1024px) {
       display: flex;
       flex-direction: column-reverse;
       padding: 4rem 0;
    }

    @media screen and (max-width: 1024px) {
        text-align: center;
    }      

    p {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.white};
        line-height: 3rem;   
    }

    img {
        max-width: 25rem;   
        width: 100%;
        height: 100%;
         
        @media screen and (max-width: 1024px) {
            max-width: 20rem;
        }
        @media screen and (max-width: 370px) {
            max-width: 16rem;
        }

    }
`