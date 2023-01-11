import { Nav, NavContainer, LogoContainer, LogoImg, Logo, LogoSpan, LinksContainer, NavLink, MenuBar, MobileNav, MobileNavLink } from "./Navbar.styles";
import logo from '../../assets/logo.png'

const Navbar = ({openNav, setOpenNav}) => {
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

                <MenuBar onClick={() => setOpenNav(!openNav)} openNav={openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuBar>
                <MobileNav openNav={openNav}>
                    <MobileNavLink to='projects' smooth={true} spy={true} duration={500} activeClass="active">Projects</MobileNavLink>
                    <MobileNavLink to='about' smooth={true} spy={true} duration={500} activeClass="active">About Me</MobileNavLink>
                    <MobileNavLink to='contact' smooth={true} spy={true} duration={500} activeClass="active">Contact Me</MobileNavLink>
                    <MobileNavLink to='resume' activeClass="active">Resume</MobileNavLink>
                </MobileNav>
            </NavContainer>
        </Nav>
    );
}
 
export default Navbar;