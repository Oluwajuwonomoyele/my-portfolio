import styled from "styled-components";

export const ContactSection = styled.section`

`
export const ContactContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem; 
`
export const ContactHeader = styled.div`
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

export const ContactContent = styled.div`
    margin: 4rem 0;
    width: 100%;
    padding: 4rem;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 9px;

`