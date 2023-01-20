import styled from "styled-components";

export const SkillsSection = styled.section`

`
export const SkillsContainer = styled.div`
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
export const SkillsHeader = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        align-items: flex-start;
    }

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
        @media screen and (max-width: 320px) {
            font-size: 2.6rem;
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
export const SkillsContent = styled.div`
    padding: 8rem 4rem 4rem 4rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

    @media screen and (max-width: 425px) {
            padding: 4rem 0;
    }      

`
export const Skill = styled.div`
    width: 200px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 4px;
    transition: all 0.3s ease-out;

    @media screen and (max-width: 425px) {
            font-size: 1.8rem;
            padding: 1rem;
            width: 140px;
    }      

    p {
        font-size: 2rem;

        @media screen and (max-width: 425px) {
            font-size: 1.2rem;
            font-weight: bold;
        }      
    }

    &:hover {
        border-color: ${props => props.theme.colors.primary2};
        color: ${props => props.theme.colors.primary2};
        transform: translateY(-5px) rotate(3deg);
    }
`