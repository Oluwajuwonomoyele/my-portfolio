import styled from "styled-components";

export const AboutSection = styled.section`

`

export const AboutContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem; 
`

export const AboutHeader = styled.div`
    display: flex;
    align-items: center;

    h1 {
            font-size: 2rem;
            color: ${props => props.theme.colors.white};
        }
    h2 {
        font-size: 7rem;
        letter-spacing: 3px;
        line-height: 7rem;
        color: ${props => props.theme.colors.primary};
        opacity: 0.5;
    }
    div:nth-last-child(1) {
        background-color: ${props => props.theme.colors.white};
        height: 1px;
        width: 400px;
    }
`
export const AboutContent = styled.div`
    padding: 4rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    gap: 3rem;

    p {
        font-size: 1.3rem;
        color: ${props => props.theme.colors.white};
        line-height: 3rem;
    }

    img {
        width: 25rem;
    }
`