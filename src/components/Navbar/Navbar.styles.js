import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
     background-color: transparent;
     height: 100px;
     display: flex;
     align-items: center;
     
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