import styled from 'styled-components'

export const AboutContent=styled.section`
height:100vh;
max-heigth:1100px;
position:relative;
overflow:hidden;
`

export const AboutSvg=styled.div`
 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

svg {
    position: relative;
    display: flex;
    width: calc(100% + 1.3px);
    height: 195px;
    transform: rotateY(180deg);
}

.shape-fill {
    fill: #000000;
}
`
export const AboutWrapper=styled.div`
display:grid;
z-index:1;
height:860px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
`

export const AboutRows=styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
align-items:center;


@media screen and (max-width:760px){
    grid-auto-columns:1fr;
}
`

export const AboutColumn1=styled.div`
margin-bottom:15px;
padding:0 16px;
grid-area:col1;
`
export const AboutColumn2=styled.div`
margin-bottom:15px;
padding:0 16px;
grid-area:col2;
`
export const Text=styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
`
export const Question=styled.div`
color:blue;
font-size:20px;
letter-spacing:1px;
font-weight:600;
margin-bottom:16px;
font-family: 'Patua One', cursive;
`

export const Heading=styled.h1`
color:cyan;
margin-bottom:24px;
font-weight:700;
font-family: 'Patua One', cursive;
font-size:30px;
`

export const Description=styled.div`
max-width:440px;
margin-bottom:24px;
font-family: 'Patua One', cursive;
font-size:15px;
color:red;
`

export const ImgWrap=styled.div`
max-width:555px;
height:100%;
`

export const Img=styled.img`
width:100%;
margin: 0 0 10px 0;
`


