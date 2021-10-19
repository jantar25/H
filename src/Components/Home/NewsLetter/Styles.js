import styled from "styled-components";


export const NewsContainer = styled.section`
height:50vh;
display:flex;
justify-content:center;
align_items:center;
position:relative;
`
export const NewsContainerCard = styled.div`
display:flex;
flex-direction: column;
align_items:center;
position:absolute;
top:20%;
width:70%;

h1{
    font-size: clamp(0.8rem, 4vw, 2rem);
    background: #005C97; 
    background: linear-gradient(to right, #363795, #005C97); 
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin-bottom: 10px;
    text-align:center;

}
`

export const EmailContain = styled.div`
display: grid;
grid-template-columns: 70% 30%;
grid-row: 1fr;
align-items: center;
justify-content: center;
margin:2rem;

input{
    width:100%;
    padding: 10px 15px;
    margin:5px;
    border-color:#0575E6;
}
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    height: 40px;
    width: 100%;
    text-decoration: none;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    background: #0575E6;  
    background: -webkit-linear-gradient(to right, #021B79, #0575E6); 
    background: linear-gradient(to right, #021B79, #0575E6);
    transition: all 1s ease; 
    margin-left: 10px;

`
