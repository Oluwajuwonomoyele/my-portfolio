import { Nav, NavContainer, LogoContainer, LogoImg, Logo, LogoSpan, LinksContainer, NavLink } from "./Navbar.styles";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return ( 
        <Nav>
            <NavContainer>
                <LogoContainer>
                    <LogoImg src={logo} />
                    <Logo>JUWON <LogoSpan>OLUTOMISIN</LogoSpan>.</Logo>
                </LogoContainer>

                <LinksContainer>
                    <NavLink to='projects' activeClass="active">Projects</NavLink>
                    <NavLink to='about' activeClass="active">About Me</NavLink>
                    <NavLink to='contact-me' activeClass="active">Contact Me</NavLink>
                    <NavLink to='resume' activeClass="active">Resume</NavLink>
                </LinksContainer>

            </NavContainer>
        </Nav>
    );
}
 
export default Navbar;