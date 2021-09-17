import React from 'react'
import {SiderbarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './Styles'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SiderbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                  <SidebarMenu>
                    <SidebarLink to='Accueil' onClick={toggle}>Accueil</SidebarLink>
                    <SidebarLink to='À propos' onClick={toggle}>Àpropos</SidebarLink>
                    <SidebarLink to='Programmes' onClick={toggle}>Programmes</SidebarLink>
                    <SidebarLink to='Evénement' onClick={toggle}>Evénement</SidebarLink>
                    <SidebarLink to='Festival' onClick={toggle}>Festival</SidebarLink>
                    <SidebarLink to='Editions' onClick={toggle}>Editions</SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>Contact</SidebarLink>
                    <SidebarLink to='Blog' onClick={toggle}>Blog</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to='/SignIn'>S'abonner</SidebarRoute>
            </SideBtnWrap>
        </SiderbarContainer>
    )
}

export default Sidebar
