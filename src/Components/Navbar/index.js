import React from "react";
import { FaBars } from "react-icons/fa";
import logo1 from "../../images/logoH.png";
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
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <Logo1 src={logo1} alt="Logo1" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks smooth to="#Slider">Àpropos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to="#Events">Evénement</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to="#Programs">Programmes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Edition">Maison d'Editions</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth to="#Footer">Contacts</NavLinks>
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
