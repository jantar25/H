import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'


export const SiderbarContainer=styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background:#003366;
display: grid;
align-items:center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen? '100%': '0')};
top:${({isOpen})=>(isOpen? '0%': '-100%')};
`


export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size: 2rem;
cursor:pointer;
outline:none;
`

export const CloseIcon=styled(FaTimes)`
color:#BEBEBE;
`

export const SidebarWrapper=styled.div`
color:#f5f5f5;
`
export const SidebarMenu=styled.ul`
display: grid;
grid-template-columns:1fr;
grid-template-rows:repeat(8,50px);
text-align:center;


@media screen and (max-width:480px) {
    grid-template-rows:repeat(8,35px);
}
`

export const SidebarLink=styled(LinkScroll)`
display: flex;
align-items:center;
justify-content:center;
text-decoration:none;
list-style:none;
font-size:1.2rem;
transition:0.3s ease-in-out;
cursor:pointer;

&:hover{
    transition: 0.5s ease-in-out; 
    color:#ffb62e;
}
`
export const SideBtnWrap=styled.div`
display: flex;
justify-content:center;
`


export const SidebarRoute=styled(LinkRouter)`
text-align:center;
border-radius:50px;
background: #a36a00 ;
white-space:nowrap;
padding: 10px 20px;
color:#000;
width:60%;
font-size:1.3rem;
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