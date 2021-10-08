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
  NavScrolls,
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
              <NavScrolls smooth to="#About">Àpropos</NavScrolls>
            </NavItem>
            <NavItem>
              <NavLinks to="/Events">Evénement</NavLinks>
            </NavItem>
            <NavItem>
              <NavScrolls smooth to="#Programs">Programmes</NavScrolls>
            </NavItem>
            <NavItem>
              <NavLinks to="/Edition">Maison d'Editions</NavLinks>
            </NavItem>
            <NavItem>
              <NavScrolls smooth to="#Footer">Contacts</NavScrolls>
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
