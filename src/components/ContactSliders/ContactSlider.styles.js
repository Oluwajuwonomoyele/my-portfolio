import styled, {keyframes} from "styled-components";

export const SliderOneContainer = styled.section`
    position: relative;
    z-index: 10;

    @media screen and (min-width: 1025px) {
        display: none;
    }
`

export const BarContainer = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.secondary};
    width: 5%;
    height: 9vh;
    z-index: 15;
    left: 0;
    bottom: 5rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`
const ping = keyframes`
    0% {
        opacity: 0.5;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.5;
    }
`

export const Bar = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    width: 0.5rem;
    height: 9vh;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: content-box;
    left: 12px;
    border-radius: 4px;
    animation: ${ping} 3s infinite;

    &:hover {
        transition: width 0.3s;
        width: 0.2rem;
    }
`

export const Details = styled.div`
    position: fixed;
    left: ${({slideOut, isRightOpen}) => slideOut && !isRightOpen ? '0' : '-200px'};
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
    position: relative;
    z-index: 10;

    @media screen and (min-width: 1025px) {
        display: none;
    }
`

export const BarContainerRight = styled.div`
    position: fixed;
    background-color: ${props => props.theme.colors.secondary};
    width: 5%;
    height: 10vh;
    z-index: 15;
    right: 0;
    bottom: 4.8rem;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`

export const BarRight = styled.div`
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    width: 0.5rem;
    height: 10vh;
    cursor: pointer;
    transition: all 0.3s ease;
    box-sizing: content-box;
    right: 12px;
    border-radius: 4px;
    animation: ${ping} 3s infinite 1s;

    &:hover {
        transition: width 0.3s;
        width: 0.2rem;
    }
`

export const DetailsRight = styled.div`
    position: fixed;
    right: ${({slideOut, isLeftOpen}) => slideOut && !isLeftOpen ? '0' : '-155px'};
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