import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo1 from '../../images/logoH.png';
import logo2 from '../../images/logoH2.png';
import {Nav,NavContainer,NavLogo,Logo1,Logo2,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLinks} from './Styles'

const navBar = ({toggle}) => {
    return (
        <>
           <Nav>
             <NavContainer>
                <NavLogo to='/'>
                  <Logo1 src={logo1} alt="Logo1"/>
                  <Logo2 src={logo2} alt="Logo2"/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='Accueil'>Accueil</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='À propos'>Àpropos</NavLinks>
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
                </NavMenu>
                <NavBtn>
                    <NavBtnLinks to='/SignIn'>S'abonner</NavBtnLinks>
                  </NavBtn>
             </NavContainer>
           </Nav>
        </>
    )
}

export default navBar
