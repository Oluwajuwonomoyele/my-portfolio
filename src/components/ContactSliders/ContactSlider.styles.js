import styled from "styled-components";

export const SliderOneContainer = styled.section`
        @media screen and (min-width: 768px) {
        display: none;
    }
`

export const BarContainer = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.secondary};
    width: 5%;
    height: 9vh;
    left: 0;
    bottom: 5rem;
    z-index: 15;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`

export const Bar = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.primary};
    width: 0.2rem;
    height: 9vh;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: content-box;
    left: 12px;
    border-radius: 4px;

    &:hover {
        transition: width 0.3s;
        width: 0.5rem;
    }
`

export const Details = styled.div`
    position: fixed;
    left: ${({slideOut}) => slideOut ? '0' : '-200px'};
    background-color: ${props => props.theme.colors.secondary};
    bottom: 5rem;
    max-width: 80vw;
    min-height: 9vh;
    z-index: 10;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    font-size: 1.5rem;
    padding: 0 2rem 0 3rem;
    transition: left 0.3s ease;

    a {
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
        transition: all 0.3s ease-out;
    }
    a:hover {
        transform: translateY(-4px);
        color: ${props => props.theme.colors.primary2};
    }

`
export const SliderTwoContainer = styled.section`

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const BarContainerRight = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.secondary};
    width: 5%;
    height: 10vh;
    right: 0;
    bottom: 4.8rem;
    z-index: 15;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

export const BarRight = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.primary};
    width: 0.2rem;
    height: 10vh;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: content-box;
    right: 12px;
    border-radius: 4px;

    &:hover {
        transition: width 0.3s;
        width: 0.5rem;
    }
`

export const DetailsRight = styled.div`
    position: fixed;
    right: ${({slideOut}) => slideOut ? '0' : '-155px'};
    background-color: ${props => props.theme.colors.secondary};
    bottom: 4.8rem;
    max-width: 80vw;
    height: 10vh;
    z-index: 10;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 0 3rem 0 2rem;
    transition: right 0.3s ease;

    a {
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
        transition: all 0.3s ease-out;
    }
    a:hover {
        transform: translateY(-4px);
        color: ${props => props.theme.colors.primary2};
    }
    p {
        font-size: 0.9rem;
        letter-spacing: 1px;
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
    }

`