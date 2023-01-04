import styled from "styled-components";

export const ProjectsSection = styled.section`
`
export const ProjectsContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem;  
`
export const ProjectsHeader = styled.div`
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
        color: ${props => props.theme.colors.primary2};
        opacity: 0.5;
    }
    div:nth-last-child(1) {
        background-color: ${props => props.theme.colors.white};
        height: 1px;
        width: 400px;
    }
`
export const ProjectDesigns = styled.div`
`