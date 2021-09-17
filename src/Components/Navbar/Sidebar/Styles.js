import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'


export const SiderbarContainer=styled.aside`
position: fixed;
z-index: 99;
width: 100%;
heigth: 100%;
background:#000;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
top: 0;
opacity: ${({isOpen})=>(isOpen? '100%': '0')};
top:${({isOpen})=>(isOpen? '0%': '-100%')};
`


export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:tranparent;
font-size: 2rem;
cursor:pointer;
outline:none;
`

export const CloseIcon=styled(FaTimes)`
color:#BEBEBE;
`