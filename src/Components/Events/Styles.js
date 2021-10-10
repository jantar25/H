import styled from "styled-components";
import aboutBg from "../../images/EventsBkg.png";

export const EventsContent = styled.section`
  background-image: url(${aboutBg});
  background-size: cover;

  h1 {
    font-size: 2.5rem;
    color: #003366;
    margin: 30px 50px;
    width: 80%;
    border-bottom: 2px solid #a36a00;
  }
`;

export const EventsTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
  margin:20px;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const MainEventCard = styled.div`
  margin-right:10px;
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: whitesmoke;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
`;
export const EventCards = styled.div`
margin-left:10px;
height: 500px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
background: whitesmoke;
box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
transition: all 0.5s ease-in-out;
  }
`;

export const EventCard = styled.div`
  margin: 10px;
  height: 20%;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  }
`;

export const MainImageContainer = styled.div`
width: 100%;
height: 55%;
`


export const MainEventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
height: 100%;
width: 80%;
`

export const EventsImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`;

export const MainDescriptionContainer = styled.div`
height: 45%;
`


export const MainEventTitle = styled.h2`
  color: #003366;
  padding: 0 10px;
  font-size: 40px;
  font-weight: bold;
  width: 90%;
  border-bottom: 2px solid #a36a00;
  z-index:1;
`;

export const EventsTitle = styled.h2`
  color: #003366;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  align-text:center;
  width: 50%;
  height: 70%;
  border-bottom: 2px solid #a36a00;
`;

export const MainEventDescription = styled.p`
  padding: 10px;
  font-size: 18px;
  color: #000;
`;

export const EventsDescription = styled.p`
  padding: 10px;
  font-size: 15px;
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
