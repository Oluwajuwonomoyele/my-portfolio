import { Nav, NavContainer, LogoContainer, LogoImg, Logo, LogoSpan, LinksContainer, NavLink, MenuBar, MobileNav, MobileNavLink, MenuBg, MenuLinks } from "./Navbar.styles";
import logo from '../../assets/logo.png';
import resume from '../../assets/Olutomisin Oluwajuwon Resume.pdf';
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({openNav, setOpenNav, navScroll}) => {
    return ( 
        <Nav navScroll={navScroll} openNav={openNav}>
            <NavContainer>
                <LogoContainer onClick={() => scroll.scrollToTop()}>
                    <LogoImg src={logo} />
                    <Logo>JUWON <LogoSpan>OLUTOMISIN</LogoSpan>.</Logo>
                </LogoContainer>

                <LinksContainer>
                    <NavLink to='projects' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Projects</NavLink>
                    <NavLink to='about' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>About Me</NavLink>
                    <NavLink to='contact' activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Contact Me</NavLink>
                    <a href={resume} download >Resume</a>
                </LinksContainer>

                <MenuBar onClick={() => setOpenNav(!openNav)} openNav={openNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </MenuBar>
                <MobileNav openNav={openNav}>
                    <MenuBg openNav={openNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuBg>
                    <MenuLinks>
                        <MobileNavLink to='projects' smooth={true} spy={true} duration={500} activeClass="active" offset={-120} onClick={() => setOpenNav(false)}>Projects</MobileNavLink>
                        <MobileNavLink to='about' smooth={true} spy={true} duration={500} activeClass="active" offset={-120} onClick={() => setOpenNav(false)}>About Me</MobileNavLink>
                        <MobileNavLink to='contact' smooth={true} spy={true} duration={500} activeClass="active" offset={-120} onClick={() => setOpenNav(false)}>Contact Me</MobileNavLink>
                        <a href={resume} download onClick={() => setOpenNav(false)}>Resume</a>
                    </MenuLinks>
                </MobileNav>
            </NavContainer>
        </Nav>
    );
}
 
export default Navbar;