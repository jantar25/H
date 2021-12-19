import styled from "styled-components";


export const Container = styled.div`
flex:1;
margin:5px;
width:50%;
height:60vh;
display:flex;
overflow:hidden;
&:hover{
    background:rgba(0, 0, 0, 0.5); 
}
`
export const Card = styled.div`
position:relative;
display:flex;
flex-direction:column;
height:100%;
width:100%;

`

export const ImgContainer = styled.div`
position:absolute;
height:100%;
width:100%;
&::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 40%;
    bottom: 0%;
    left: 0;
    overflow: hidden;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`

export const Info = styled.div`
width:100%;
position:absolute;
display:flex;
flex-direction:column;
bottom:10%;
`

export const Title = styled.h3`
color:#003366;
margin-left:15px;
`

export const IconContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
position:absolute;
bottom:10px;
z-index:3;
padding: 0px 10px;
`

export const Desc = styled.span`
justify-content:center;
width:90%;
margin:10px;
font-size:15px;
color:white;
`
