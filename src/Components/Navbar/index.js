import React from "react";
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

const navBar = ({ toggle }) => {

const toggleHome = ()=>{
  scroll.scrollToTop();
}

const toggleFooter = ()=>{
  scroll.scrollToBottom();
}

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo1 src={logo1} alt="Logo1" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/Apropos" activeClassName="active">Àpropos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Evenement" activeClassName="active">Evénement</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Programme" activeClassName="active">Programmes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Edition" activeClassName="active">Maison d'Editions</NavLinks>
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

export default navBar;
