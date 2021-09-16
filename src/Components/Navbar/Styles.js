import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
//import {Link as LinkScroll} from 'react-scroll'

export const Nav=styled.nav`
background:#000;
height:80px;
display: flex;
justify-content:center;
align-items:center;
font_zise: 1rem;
positionsticky;
top:0;
z-index:10;

@media screen and (max-width:960px) {
    transition: 1s all ease;
}
`

export const NavContainer=styled.div`
width:100%;
height:80px;
display: flex;
justify-content:center;
align-items:center;
padding:0 25px;
z-index:1;
`

export const NavLogo=styled(LinkRouter)`
color:Green;
display: flex;
justify-self:start;
align-items:center;
cursor:pointer;
font-size:2rem;
margin-left:10px;
text-decoration:none;
`