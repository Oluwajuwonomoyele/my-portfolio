import styled from "styled-components";

export const ProjectDesignSection = styled.div`
    padding: 4rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    @media screen and (max-width: 768px) {
       padding: 2rem 0;
       border-radius: 20px;
       overflow: hidden;
    }
    @media screen and (max-width: 1024px) {
        padding: 4rem 0;
    }
    @media screen and (max-width: 425px) {
       padding: 2rem 0;
    }
`
export const ImgDiv = styled.div`
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    grid-area: ${({imgStart}) => imgStart ? '1 / 1 / -1 / 8' : '1 / 6 / -1 / 13'};
    z-index: 3;

    @media screen and (max-width: 1024px) {
       grid-column: 1 / -1;
       height: 100%;

       img {
            height: 100%;
            object-fit: cover;
       }
    }

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        background-color: ${props => props.theme.colors.primary2};
        opacity: 0.4;
        transition: all 0.4s ease-out;
        border-radius: 5px;
        overflow: hidden;

        @media screen and (max-width: 1024px) {
            opacity: 0.9;
            background-color: ${props => props.theme.colors.secondary};
        }
    }
    &:hover::after {
        background-color: transparent;

        @media screen and (max-width: 1024px) {
            opacity: 0.9;
            background-color: ${props => props.theme.colors.secondary};
        }
    }
    img {
        width: 100%;
        vertical-align: middle;
    }
`
export const ContentDiv = styled.div`
    text-align: ${({imgStart}) => imgStart ? 'right': 'left'};
    display: flex;
    flex-direction: column;
    align-items: ${({imgStart}) => imgStart ? 'end': 'start'};
    gap: 1.5rem;
    grid-area: ${({imgStart}) => imgStart ? '1 / 7 / -1 / 13': '1 / 1 / -1 / 7'};
    position: relative;
    z-index: 4;

    @media screen and (max-width: 1024px) {
       grid-column: 1 / -1;
       padding: 3rem 2rem;
    }

    h1 {
        font-size: 1rem;
        color: ${props => props.theme.colors.white};
    }
    h2 {
        font-size: 2rem;
        line-height: 2rem;
        color: ${props => props.theme.colors.primary};
    }
`
export const Desc = styled.div`
    padding: 1rem;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.secondary};;
    color: ${props => props.theme.colors.primary};
    font-size: 1.1rem;
    font-weight: bold;
    box-shadow: 0 3px 4px #664D42;
    line-height: 1.7rem;
    z-index: 6;

    @media screen and (max-width: 1024px) {
       box-shadow: none;
       background: transparent;
       padding: 0;
       margin-top: 1rem;
    }

`
export const LLDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: right;
`
export const Lang = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.white};
    font-family: calibri;
    display: flex;
    justify-content: ${({imgStart}) => imgStart ? 'end': 'start'};
    gap: 0.5rem;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
       p {
        background-color: ${props => props.theme.colors.secondary};
        border: 1.5px solid ${props => props.theme.colors.primary};
        padding: 0.3rem 0.5rem;
        border-radius: 5px;
       }
    }
`
export const Links = styled.div`
    display: flex;
    justify-content: ${({imgStart}) => imgStart ? 'end' : 'start'};
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    width: 100%;
    
    a {
        color: ${props => props.theme.colors.primary};
    }
    a:hover {
        color: ${props => props.theme.colors.primary2};
        transition: all 0.4s ease-out;
    }
`
