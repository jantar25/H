import styled from "styled-components";


export const Header = styled.div`
height: 60vh;
margin-top:-70px;
max-heigth: 1100px;
position: relative;
overflow: hidden;
&::before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 80vh;
  bottom: 0vh;
  left: 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );

`
export const Title = styled.h1`
position:absolute;
bottom:50px;
left:50px;
font-size: 4rem;
color: #a36a00;
margin: 30px 50px;
z-index:2;
`

export const HeaderImg = styled.img`
position:absolute;
top:0;
left:0;
object-fit:cover;
width:100%;
height: 60vh;
z-index:1;
`