import React from 'react'
import {Nav,NavContainer,NavLogo} from './Styles'

const navBar = () => {
    return (
        <>
           <Nav>
             <NavContainer>
                <NavLogo to='/'><image src='../../images/BG.jpg' alt='cake picture' /></NavLogo>
             </NavContainer>
           </Nav>
        </>
    )
}

export default navBar
