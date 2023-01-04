import styled from "styled-components";

export const ProjectDesignSection = styled.div`
    padding: 4rem;
    display: flex;
    justify-content: space-between;
`
export const ImgDiv = styled.div`
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${props => props.theme.colors.primary2};
        width: 100%;
        height: 100%;
        opacity: 0.4;
        transition: all 0.4s ease-out;
    }
    &:hover::after {
        background-color: transparent;
    }
    img {
        width: 600px;
    }
`
export const ContentDiv = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.primary};
    }
    h2 {
        font-size: 2.5rem;
        line-height: 2rem;
        color: ${props => props.theme.colors.primary2};
    }
`
export const Desc = styled.div`
    position: absolute;
    margin-top: 6rem;
    width: 600px;
    padding: 1rem;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.secondary};;
    color: ${props => props.theme.colors.primary2};
    right: 0;
    font-size: 1.1rem;
    font-weight: bold;
    box-shadow: 0 2px 5px ${props => props.theme.colors.primary2};;

`
export const Links = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.5rem;
    
    a {
        color: ${props => props.theme.colors.primary};
    }
    a:hover {
        color: ${props => props.theme.colors.primary2};
        transition: all 0.4s ease-out;
    }
`
export const Lang = styled.div`
    margin-top: 9rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.white};
    font-family: calibri;
`