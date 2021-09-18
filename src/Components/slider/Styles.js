import styled, { css } from 'styled-components'
import {IoArrowForward,IoArrowBack} from 'react-icons/io5'

export const SliderSection=styled.section`
height:80vh;
max-heigth:1100px;
position:relative;
overflow:hidden;
`


export const SliderWrapper=styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
position:relative;
overflow:hidden;
`

export const HeroSlide=styled.div`
z-index:1;
width:100%;
height:100%;
`


export const HeroSlider=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`


export const HeroImage=styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;

&::before{
    content:'';
    position:absolute;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background:linear-gradient(0deg,rgba(0,0,0,0.8)0%,rgba(0,0,0,0.8)50%,rgba(0,0,0,0.6)100%);

}
`
export const HeroContent=styled.div`
position:relative;
z-index:10;
display:flex;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px);
color:#000;

h1{
    font-size:clamp(1rem,8vw,4rem);
    font-weight:500;
    text-align:left;
    margin-bottom:1rem;
}

p{
    font-size:clamp(1rem,8vw,2rem);
    font-weight:600;   
}
`

export const SliderButton=styled.div`
position:absolute;
bottom:50px;
right:50px;
display:flex;
z-index:10
`


export const arrowButtons=css`
width:50px;
height:50px;
color:#000;
cursor:pointer;
background:red;
border-radius:50px;
padding:10px;
margin-rigth:1rem;
user-selector: none;
transition:0.5s;

&:hover{
    background:green;
    transform: scale(1.05);  
}
`
export const PrevArrow=styled(IoArrowBack)`
${arrowButtons}
`
export const NextArrow=styled(IoArrowForward)`
${arrowButtons}
`