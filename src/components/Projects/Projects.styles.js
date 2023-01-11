import styled from "styled-components";

export const ProjectsSection = styled.section`
`
export const ProjectsContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem;  

    @media screen and (max-width: 768px) {
        padding: 4rem;
    }
`
export const ProjectsHeader = styled.div`
    display: flex;
    align-items: center;

    h1 {
            font-size: 2rem;
            color: ${props => props.theme.colors.white};

            @media screen and (max-width: 768px) {
                font-size: 1.5rem;
            }
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
        border-radius: 4px;
    }
`
export const ProjectDesigns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`