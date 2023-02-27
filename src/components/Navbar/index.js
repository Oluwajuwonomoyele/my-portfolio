import { Nav, NavContainer, LogoContainer, LogoImg, Logo, LogoSpan, LinksContainer, NavLink, MenuBar, MobileNav, MobileNavLink, MenuBg, MenuLinks } from "./Navbar.styles";
import logo from '../../assets/logo.webp';
import resume from '../../assets/Olutomisin Oluwajuwon Resume.pdf';
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({openNav, setOpenNav, navScroll}) => {

    return ( 
        <Nav navScroll={navScroll} openNav={openNav}>
            <NavContainer>
                <LogoContainer onClick={() => scroll.scrollToTop()}>
                    <LogoImg src={logo} alt='logo'/>
                    <Logo>JUWON <LogoSpan>OLUTOMISIN</LogoSpan>.</Logo>
                </LogoContainer>

                <LinksContainer>
                    <NavLink to='projects' href="#" activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Projects</NavLink>
                    <NavLink to='about' href="#" activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>About Me</NavLink>
                    <NavLink to='contact' href="#" activeClass="active" smooth={true} spy={true} duration={500} offset={-100}>Contact Me</NavLink>
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
                    <MenuLinks openNav={openNav}>
                        <MobileNavLink to='projects' href="#" smooth={true} spy={true} duration={500} activeClass="active" offset={-120} onClick={() => setOpenNav(false)}>Projects</MobileNavLink>
                        <MobileNavLink to='about' href="#" smooth={true} spy={true} duration={500} activeClass="active" offset={-120} onClick={() => setOpenNav(false)}>About Me</MobileNavLink>
                        <MobileNavLink to='contact' href="#" smooth={true} spy={true} duration={500} activeClass="active" offset={-120} onClick={() => setOpenNav(false)}>Contact Me</MobileNavLink>
                        <a href={resume} download onClick={() => setOpenNav(false)}>Resume</a>
                    </MenuLinks>
                </MobileNav>
            </NavContainer>
        </Nav>
    );
}
 
export default Navbar;