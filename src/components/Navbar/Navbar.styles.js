import styled from "styled-components";
import { Link } from "react-scroll";
import navbg from '../../assets/navbg.gif';

export const Nav = styled.nav`
     background-color: ${({navScroll}) => navScroll ? '#2c2b2b' : 'transparent' };
     height: ${({navScroll, openNav}) => navScroll ? '80px' : navScroll && openNav ? '120px' : '100px' };
     display: flex;
     align-items: center;
     position: fixed;
     width: 100%;
     z-index: 19;
     filter: ${({navScroll, openNav}) => navScroll ? 'drop-shadow(0px 1px 2px #ffc5ad)': navScroll && openNav ? '' : '' };
     transition: all 0.3s ease;
     
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

    @media screen and (max-width: 425px) {
        padding: 0 2rem;
    }      
`
export const LogoContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 999;
`
export const LogoImg = styled.img`
    max-width: 40px;

    @media screen and (max-width: 600px) {
       max-width: 35px;
    }
`
export const Logo = styled.h1`
    color: ${props => props.theme.colors.white};
    letter-spacing: 0.1rem;
    font-weight: bold;
    font-size: 1.5rem;

    @media screen and (max-width: 600px) {
       font-size: 1rem;
    }
    @media screen and (max-width: 425px) {
       display: none;
    }
`
export const LogoSpan = styled.span`
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;

    @media screen and (max-width: 600px) {
       font-size: 1.5rem;
    }
    @media screen and (max-width: 375px) {
       font-size: 1.3rem;
    }
`
export const LinksContainer = styled.div`
    display: flex;
    gap: 4rem;  
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }

    a:nth-last-child(1){
        border: 2px solid ${props => props.theme.colors.primary};
        padding: 0.5rem 1rem;
        border-radius: 3px;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        transition: all 0.4s ease-out;

        &:hover {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.secondary};
        }
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
        transition: all 0.3s ease-out;
        background-color: ${props => props.theme.colors.primary};
    }

    &:hover::after {
        width: 100%;
    }

    &.active {
        color: ${props => props.theme.colors.primary2};
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
    @media screen and (max-width: 425px) {
       transform: scale(0.8);
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
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 66;

    @media screen and (min-width: 790px) {
        display: none;
    }

    a:nth-of-type(1){
        transform: ${({openNav}) => openNav ? 'translateX(2rem);' : 'translateX(10rem);'};
        opacity: ${({openNav}) => openNav ? '1' : '0'};
        transition: all 0.5s ease-out 0.4s;
    }
    a:nth-of-type(2){
        transform: ${({openNav}) => openNav ? 'translateX(-2rem);' : 'translateX(-10rem);'};
        transition: all 0.5s ease-out 0.45s;
        opacity: ${({openNav}) => openNav ? '1' : '0'};
    }
    a:nth-of-type(3){
        transform: ${({openNav}) => openNav ? 'translateX(2rem);' : 'translateX(10rem);'};
        transition: all 0.5s ease-out 0.5s;
        opacity: ${({openNav}) => openNav ? '1' : '0'};
    }
    a:nth-of-type(4){
        transform: ${({openNav}) => openNav ? 'translateX(-0.5rem);' : 'translateY(10rem);'};
        border: 3px solid ${props => props.theme.colors.primary};
        opacity: ${({openNav}) => openNav ? '1' : '0'};
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 4px;
        transition: all 0.5s ease-out 0.55s;
        color: ${props => props.theme.colors.primary};
        font-size: 2.5rem;
        font-weight: bold;

        &:hover {
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.secondary};
        }

        @media screen and (max-width: 425px) {
            font-size: 2rem;
        }      
    }
`
export const MenuBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    opacity: 0.9;

    span:nth-child(1) {
        transition: height 0.7s ease 0s;
        background-color: ${props => props.theme.colors.secondary};
        height: ${({openNav}) => openNav ? '100vh' : '0'};
    }
    span:nth-child(2) {
        transition: height 0.7s ease 0.3s;
        background-color: ${props => props.theme.colors.secondary};
        height: ${({openNav}) => openNav ? '100vh' : '0'};
    }
    span:nth-child(3){
        transition: height 0.7s ease 0.6s;
        background-color: ${props => props.theme.colors.secondary};
        height: ${({openNav}) => openNav ? '100vh' : '0'}; 
    }
    span:nth-child(4){
        transition: height 0.7s ease 0.9s;
        background-color: ${props => props.theme.colors.secondary};
        height: ${({openNav}) => openNav ? '100vh' : '0'};
    }
`

export const MenuLinks = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    text-align: right;
`

export const MobileNavLink = styled(Link)`
    color: ${props => props.theme.colors.primary};
    font-size: 2.5rem;
    font-weight: bold;

    @media screen and (max-width: 425px) {
        font-size: 2rem;
    }      
`