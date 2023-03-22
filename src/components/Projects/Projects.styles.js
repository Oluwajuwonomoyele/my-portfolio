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
    @media screen and (max-width: 425px) {
        padding: 0 2rem 2rem 2rem;
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
            @media screen and (max-width: 600px) {
                font-size: 1.2rem;
            }
        }
    h2 {
        font-size: 7rem;
        letter-spacing: 3px;
        line-height: 7rem;
        color: ${props => props.theme.colors.primary};
        opacity: 0.5;

        @media screen and (max-width: 600px) {
            font-size: 6rem;
        }
        @media screen and (max-width: 425px) {
            font-size: 3rem;
            line-height: normal;
        }      
    }
    div:nth-last-child(1) {
        background-color: ${props => props.theme.colors.white};
        height: 1px;
        width: 400px;
        border-radius: 4px;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`
export const ProjectDesigns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 768px) {
        gap: 2rem;
        margin-top: 3rem;
    }      
`