import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
     background-color: transparent;
     height: 100px;
     display: flex;
     align-items: center;
     position: relative;
     z-index: 555;
     
`
export const NavContainer = styled.div`
    height: 100px;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const LogoContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
export const LogoImg = styled.img`
    max-width: 50px;
`
export const Logo = styled.h1`
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
    font-weight: bold;
    font-size: 1.5rem;
`
export const LogoSpan = styled.span`
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
`
export const LinksContainer = styled.div`
    display: flex;
    gap: 4rem;  
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavLink = styled(Link)`
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    padding-bottom: 0.2rem;
    font-weight: bold;
    transition: all 0.4s ease-out;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        border-radius: 3px;
        transition: all 0.4s ease-out;
        background-color: ${props => props.theme.colors.primary};
    }

    &:hover::after {
        width: 100%;
    }

    &:active {
        color: ${props => props.theme.colors.primary};
    }

    &:nth-last-child(1){
        border: 2px solid ${props => props.theme.colors.primary};
        padding: 0.5rem 1rem;
        border-radius: 3px;
        color: ${props => props.theme.colors.primary};
    }

    &:nth-last-child(1):hover::after {
        width: 0;
    }

    &:nth-last-child(1):hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
    }
`
export const MenuBar = styled.div`
    cursor: pointer;
    transition: transform 0.1s ease-out;
    position: relative;
    z-index: 999;
    transform: ${({openNav}) => openNav ? 'rotate(360deg)' : 'rotate(0deg)'};

    @media screen and (min-width: 790px) {
        display: none;
    }

    div {
        height: 4px;
        background-color: ${props => props.theme.colors.primary};
        margin-bottom: 0.5rem;
        transition: all 0.3s ease-out;
        border-radius: 3px;


        &:nth-child(1){
            width: 2.4rem;
            transform: ${({openNav}) => openNav ? 'translateY(10px) rotate(43deg)' : ''};
        }

        &:nth-child(2){
            width: 1.8rem;
            opacity: ${({openNav}) => openNav ? '0' : '1'}
        }

        &:nth-child(3){
            width: ${({openNav}) => openNav ? '2.4rem' : '1.2rem'};
            transform: ${({openNav}) => openNav ? 'translateY(-14px) rotate(-43deg)' : ''}
        }
    }
`
export const MobileNav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    z-index: ${({openNav}) => openNav ? '100' : '0'};
    opacity: ${({openNav}) => openNav ? '1' : '0'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: right;
    background-color: ${props => props.theme.colors.primary2};
    transition: all 0.3s ease-out;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: -0.5rem;
        bottom: 0;
        background-color: ${props => props.theme.colors.secondary};
        transform-origin: 0 0;
        transform: ${({openNav}) => openNav ? 'skew(-14deg) translateX(0)' : 'skew(-14deg) translateX(-120%)'};
        transition: all 0.2s ease-out;
    }

    a:nth-of-type(1){
        transform: ${({openNav}) => openNav ? 'translateX(2rem);' : 'translateX(10rem);'};
        opacity: ${({openNav}) => openNav ? '1' : '0'};
        transition-delay: 0.4s;
    }
    a:nth-of-type(2){
        transform: ${({openNav}) => openNav ? 'translateX(-2rem);' : 'translateX(-10rem);'};
        transition-delay: 0.45s;
        opacity: ${({openNav}) => openNav ? '1' : '0'};
    }
    a:nth-of-type(3){
        transform: ${({openNav}) => openNav ? 'translateX(2rem);' : 'translateX(10rem);'};
        transition-delay: 0.5s;
        opacity: ${({openNav}) => openNav ? '1' : '0'};
    }
    a:nth-of-type(4){
        transform: ${({openNav}) => openNav ? 'translateX(-2rem);' : 'translateX(-10rem);'};
        border: 3px solid ${props => props.theme.colors.primary};
        opacity: ${({openNav}) => openNav ? '1' : '0'};
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 4px;
        transition-delay: 0.55s;

        &:hover {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.secondary};
        }

    }
`

export const MobileNavLink = styled(Link)`
    position: relative;
    z-index: 200;
    color: ${props => props.theme.colors.primary};
    font-size: 2.5rem;
    font-weight: bold;
    transition: all 0.2s ease-out;
`