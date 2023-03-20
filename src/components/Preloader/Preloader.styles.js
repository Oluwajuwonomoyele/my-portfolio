import styled, {keyframes} from "styled-components";

const mainBlock = keyframes`
    0% {
        width: 0%;
        left: 0;
    }
    50% {
        width: 100%;
        left: 0;
    }
    100% {
        width: 0;
        left: 100%;
    }
`
const secBlock = keyframes`
    0% {
      width: 0%;
      left: 0;
  
    }
    50% {
      width: 100%;
      left: 0;
  
    }
    100% {
      width: 0;
      left: 100%;
    }
`  
const mainFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const popIn = keyframes`
    0% {
        width: 0px;
        height: 0px;
        background: #ffc5ad;
        border: 0px solid #ddd;
        opacity: 0;
    }
    50% {
        width: 10px;
        height: 10px;
        background: #fb9a69;
        opacity: 1;
        bottom: 45px;
    }
        65% {
        width: 7px;
        height: 7px;
        bottom: 0px;
        width: 15px
        }
        80% {
        width: 10px;
        height: 10px;
        bottom: 20px
        }
    100% {
        width: 7px;
        height: 7px;
        background: #ffc5ad;
        border: 0px solid #222;
        bottom: 13px;
    }
`
const secFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.5;
    }
`

export const PreloaderSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d2c2c;
    overflow: hidden;
`
export const PreloaderContainer = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-direction: column;

    @media screen and (max-width: 425px) {
        width: auto;
        gap: 0;
    }    
`
export const Title = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;

    h1 {
        font-size: 40px;
        font-family: 'Poppins';
        animation: ${mainFadeIn} 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;
        color: #E87435;

        @media screen and (max-width: 425px) {
            font-size: 1.8rem;
        }    

        span {
            width: 0px;
            height: 0px;
            border-radius: 50%;
            background-color: #ffc5ad;
            animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
            animation-delay: 2s;
            margin-left: 5px;
            margin-top: -10px;
            position: absolute;
            bottom: 13px;
            right: -12px;
        }
    }
`
export const Block1 = styled.span`
    width: 0%;
    height: inherit;
    background-color: #ffc5ad;
    position: absolute;
    animation: ${mainBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    display: flex;

`
export const Role = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    margin-top: -10px;

    p {
        animation: ${secFadeIn} 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        font-weight: 400;
        color: #ffffff;
        font-family: 'Lato';
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 5px;

        @media screen and (max-width: 425px) {
            font-size: 0.7rem;
        }    
    }
`
export const Block2 = styled.div`
    width: 0%;
    height: inherit;
    background-color: #E87435;
    position: absolute;
    animation: ${secBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    animation-delay: 2s;
    display: flex;
`

