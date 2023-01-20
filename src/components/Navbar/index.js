import { Nav, NavContainer, LogoContainer, LogoImg, Logo, LogoSpan, LinksContainer, NavLink, MenuBar, MobileNav, MobileNavLink } from "./Navbar.styles";
import logo from '../../assets/logo.png'

const Navbar = ({openNav, setOpenNav, navScroll}) => {
    return ( 
        <Nav navScroll={navScroll}>
            <NavContainer>
                <LogoContainer>
                    <LogoImg src={logo} />
                    <Logo>JUWON <LogoSpan>OLUTOMISIN</LogoSpan>.</Logo>
                </LogoContainer>

                <LinksContainer>
                    <NavLink to='projects' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Projects</NavLink>
                    <NavLink to='about' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>About Me</NavLink>
                    <NavLink to='contact' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Contact Me</NavLink>
                    <NavLink to='resume' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Resume</NavLink>
                </LinksContainer>

                <MenuBar onClick={() => setOpenNav(!openNav)} openNav={openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuBar>
                <MobileNav openNav={openNav}>
                    <MobileNavLink to='projects' smooth={true} spy={true} duration={500} activeClass="active" offset={-200} onClick={() => setOpenNav(false)}>Projects</MobileNavLink>
                    <MobileNavLink to='about' smooth={true} spy={true} duration={500} activeClass="active" offset={-200} onClick={() => setOpenNav(false)}>About Me</MobileNavLink>
                    <MobileNavLink to='contact' smooth={true} spy={true} duration={500} activeClass="active" offset={-200} onClick={() => setOpenNav(false)}>Contact Me</MobileNavLink>
                    <MobileNavLink to='resume' activeClass="active" offset={-200} onClick={() => setOpenNav(false)}>Resume</MobileNavLink>
                </MobileNav>
            </NavContainer>
        </Nav>
    );
}
 
export default Navbar;