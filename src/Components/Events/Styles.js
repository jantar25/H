import styled from "styled-components";
import aboutBg from "../../images/EventsBkg.png";

export const EventsContent = styled.section`
height:120vh;
max-heigth:1100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position:relative;
overflow:hidden;
background-image: url(${aboutBg});
background-size: cover;

h1 {
    position:absolute;
    font-size: 2rem;
    color: #003366;
    left:50px;
    top:50px;
    width:80%;
    border-bottom: 2px solid #a36a00;  
   
`;
export const EventsTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
  overflow: hidden;
`;

<<<<<<< HEAD
export const EventCard = styled.div`
  margin: 20px 10px 10px;
  height: 550px;
  width: 400px;
  border: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: whitesmoke;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
=======
export const EventCard=styled.div`
margin: 10px 10px 30px;
height: 550px;
width: 400px;
border: 5px;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
background:whitesmoke;
box-shadow: 0 14px 28px rgba(0,0,0,0.7), 0 10px 10px rgba(0,0,0,0.22);
transition: all 0.5s ease-out;
>>>>>>> d065706d0e03807f817b8b9b2669907cc0849f92

  &:hover {
    transform: scale(1.03);
    margin: 0 10px;
<<<<<<< HEAD
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7), 0 10px 10px rgba(0, 0, 0, 0.22);
=======
    transition: all 0.5s ease-out;
>>>>>>> d065706d0e03807f817b8b9b2669907cc0849f92
  }
`;

<<<<<<< HEAD
export const EventImg = styled.img`
  width: 400px;
  height: 425px;
  object-fit: cover;
`;

export const EventTitle = styled.h2`
  color: #003366;
  padding: 0 10px;
  font-size: 40px;
  font-weight: bold;
  width: 90%;
  border-bottom: 2px solid #a36a00;
`;
=======
`

export const EventImg=styled.img`
width: 400px;
height: 425px;
object-fit: cover;

`

export const EventTitle=styled.h2`
color: #003366;
padding: 0 10px;
font-size: 40px;
font-weight: bold;
transition: all 1s ease-in-out;
border-bottom: 5px solid #a36a00; 
`

export const EventDescription=styled.p`
padding: 10px;
font-size: 18px;
transition: all 1s ease-in-out;
color: #000;
`
export const EventBtn=styled.button`
width: 200px;
padding: 10px;
border: none;
outline: none;
text-decoration: none;
margin-left: 10px;
margin-bottom: 10px;
font-size: 20px;
font-weight: bold;
border-radius: 5px;
background-color: #861657;
background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%);
transition: all 1s ease-in-out;
cursor: pointer;
`
>>>>>>> d065706d0e03807f817b8b9b2669907cc0849f92

export const EventDescription = styled.p`
  padding: 10px;
  font-size: 18px;
  color: #000;
`;
export const EventBtn = styled.button`
  width: 200px;
  padding: 10px;
  border: none;
  outline: none;
  text-decoration: none;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #861657;
  background: linear-gradient(to right, #a36a00 0%, #f09819 100%);
  transition: all 1s ease-in-out;
  cursor: pointer;
`;
