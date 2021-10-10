import React from "react";
import {
  SiderbarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./Styles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SiderbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/Apropos" onClick={toggle}>
            Àpropos
          </SidebarLink>
          <SidebarLink to="/Programme"  onClick={toggle}>
            Programmes
          </SidebarLink>
          <SidebarLink to="/Evenement" onClick={toggle}>
            Evénement
          </SidebarLink>
          <SidebarLink to="/Edition" onClick={toggle}>
            Maison d'Editions
          </SidebarLink>
          <SidebarLink to="/Contact" onClick={toggle}>
            Contacts
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        <SidebarRoute to="/SignIn">S'abonner</SidebarRoute>
      </SideBtnWrap>
    </SiderbarContainer>
  );
};

export default Sidebar;
