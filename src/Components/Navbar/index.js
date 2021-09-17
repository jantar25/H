import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logoH.png';
import {Nav,NavContainer,NavLogo,Logo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLinks} from './Styles'

const navBar = () => {
    return (
        <>
           <Nav>
             <NavContainer>
                <NavLogo to='/'><Logo src={logo} alt="Logo"/></NavLogo>
                <MobileIcon>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='Accueil'>Accueil</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='À propos'>À propos</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Programmes'>Programmes</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Evénement'>Evénement</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Festival'>Festival</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Editions'>Editions</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Contact'>Contact</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='Blog'>Blog</NavLinks>
                  </NavItem>
                  <NavBtn>
                    <NavBtnLinks to='/SignIn'>S'abonner</NavBtnLinks>
                  </NavBtn>
                </NavMenu>
             </NavContainer>
           </Nav>
        </>
    )
}

export default navBar
