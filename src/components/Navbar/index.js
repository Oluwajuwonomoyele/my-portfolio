import { Nav, NavContainer, LogoContainer, Logo, LogoSpan, LinksContainer, NavLink } from "./Navbar.styles";

const Navbar = () => {
    return ( 
        <Nav>
            <NavContainer>
                <LogoContainer>
                    <Logo>JUWON <LogoSpan>OLUTOMISIN</LogoSpan>.</Logo>
                </LogoContainer>

                <LinksContainer>
                    <NavLink to='projects' activeClass="active">Projects</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='resume'>Resume</NavLink>
                    <NavLink to='contact-me'>Contact Me</NavLink>
                </LinksContainer>

            </NavContainer>
        </Nav>
    );
}
 
export default Navbar;