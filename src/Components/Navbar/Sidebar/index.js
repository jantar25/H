import React from 'react'
import {SiderbarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './Styles'


const Sidebar = () => {
    return (
        <SiderbarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                  <SidebarMenu>
                    <SidebarLink to='Accueil'>Accueil</SidebarLink>
                    <SidebarLink to='À propos'>Àpropos</SidebarLink>
                    <SidebarLink to='Programmes'>Programmes</SidebarLink>
                    <SidebarLink to='Evénement'>Evénement</SidebarLink>
                    <SidebarLink to='Festival'>Festival</SidebarLink>
                    <SidebarLink to='Editions'>Editions</SidebarLink>
                    <SidebarLink to='Contact'>Contact</SidebarLink>
                    <SidebarLink to='Blog'>Blog</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to='/SignIn'>S'abonner</SidebarRoute>
            </SideBtnWrap>
        </SiderbarContainer>
    )
}

export default Sidebar
