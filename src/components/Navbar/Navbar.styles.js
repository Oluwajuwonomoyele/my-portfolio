import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`

`

export const NavContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    cursor: pointer;
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
    gap: 3rem
`
export const NavLink = styled(Link)`
    color: ${props => props.theme.colors.white};
    padding: 1rem;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.4s ease-out;

    &:active {
        color: ${props => props.theme.colors.primary};
    }
`