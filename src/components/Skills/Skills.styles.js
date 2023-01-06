import styled from "styled-components";

export const SkillsSection = styled.section`

`
export const SkillsContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 4rem 10rem; 
`
export const SkillsHeader = styled.div`
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
export const SkillsContent = styled.div`
    padding: 8rem 4rem 4rem 4rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

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

    p {
        font-size: 2rem;
    }

    &:hover {
        border-color: ${props => props.theme.colors.primary2};
        color: ${props => props.theme.colors.primary2};
        transform: translateY(-5px) rotate(3deg);
    }
`