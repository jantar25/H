import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav=styled.nav`
background: #003366;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
font_zise: 1.5rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width:945px) {
    transition: all 1s ease;
}
`

export const NavContainer=styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
z-index: 1;
max-width: 1200px;
`

export const NavLogo=styled(LinkRouter)`
display: flex;
justify-self: flex-start;
align-items:center;
cursor:pointer;
`
export const Logo1 = styled.img`
    width: 100%;
    height: 60px;
    @media screen and (max-width:1090px) {
        display: none;
    }
    @media screen and (max-width:945px) {
        display: flex;
    }
`
export const Logo2 = styled.img`
display: none;
    @media screen and (max-width:1090px) {
        display: flex;
        width: 100%;
        height: 60px;
    }
    @media screen and (max-width:945px) {
        display: none;
    }
`

export const MobileIcon=styled.div`
display: none;

@media screen and (max-width:945px) {
    display: block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size: 2rem;
    cursor:pointer;
    color: #BEBEBE;
}
`

export const NavMenu=styled.ul`
display: flex;
align-items:center;
list-style:none;
text_align:center;
font-size:1.1rem;



@media screen and (max-width:945px) {
    display: none;
}
`

export const NavItem=styled.li`
height: 70px;
`

export const NavLinks=styled(LinkScroll)`
color:#f5f5f5;
height: 100%;
display: flex;
align-items:center;
text-decoration:none;
cursor:pointer;
padding:0 1rem;
transition: all 0.3s ease-in-out; 

&:hover{
    border-bottom: 5px solid #a36a00;  
}

&.active{
    border-bottom: 5px solid #a36a00;
}
`

export const NavBtn=styled.nav`
display: flex;
align-items:center;

@media screen and (max-width:945px) {
    display: none;
}
`

export const NavBtnLinks=styled(LinkRouter)`
border-radius:50px;
background: #a36a00 ;
white-space:nowrap;
padding: 10px 20px;
color:#000;
font-size:1.1rem;
outline:none;
border:none;
text-decoration:none;
cursor:pointer;
transition: all 1.5s ease-in-out;

&:hover{
    transition: all 0.5s ease-in-out; 
    background: #ffb62e; 
    color:#f5f5f5;
}
`