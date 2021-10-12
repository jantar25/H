import React,{useState} from "react";
import { FaBars } from "react-icons/fa";
import logo1 from "../../images/logoH.png";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  Logo1,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLinks,
} from "./Styles";

const NavBar = ({ toggle }) => {
  const [navBar,setNavBar]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY>=70){
      setNavBar(true)
    } else{
      setNavBar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)

const toggleHome = ()=>{
  scroll.scrollToTop();
}

const toggleFooter = ()=>{
  scroll.scrollToBottom();
}

  return (
    <>
      <Nav className={navBar? 'active': null}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo1 src={logo1} alt="Logo1" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/Apropos" >Àpropos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Evenement" >Evénement</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Programme" >Programmes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Edition" >Maison d'Editions</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#footer" onClick={toggleFooter}>Contacts</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLinks to="/SignIn">S'abonner</NavBtnLinks>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
