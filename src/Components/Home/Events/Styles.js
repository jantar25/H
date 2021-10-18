import styled from "styled-components";


export const EventsContent = styled.section`
  background: #f2f3f4;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin:20px;

`;

export const MainEventCard = styled.div`
  height: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
`;


export const MainImageContainer = styled.div`
width: 100%;
height: 60%;
&::before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 20%;
  bottom: 40%;
  left: 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

`


export const MainEventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

export const MainDescriptionContainer = styled.div`
height: 40%;
overflow:hidden;
overflow-y:scroll;
margin-bottom:10px;
`


export const MainEventTitle = styled.h2`
  color: #003366;
  padding: 0 10px;
  font-size: clamp(1rem, 4vw, 4rem);;
  font-weight: bold;
  width: 90%;
  margin-bottom:10px;
  z-index:1;
`;

export const MainEventDescription = styled.p`
  padding: 10px 40px 30px;
  font-size: 18px;
  color: #000;
`;


export const EventCardswrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr;
align-items: center;
justify-content: center;
position: relative;


@media screen and (max-width: 1260px) {
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 640px) {
  grid-template-columns: 1fr;
}
  
`;

export const EventCard = styled.div`
  margin: 20px 5px;
  height: 300px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  position: relative;
  background: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scaleX(1.03);
  }
`;


export const DescriptContainer = styled.div`
height: 40%;
overflow:hidden;
overflow-y:scroll;
padding:10px;
margin-bottom:10px;

`

export const ImageContainer = styled.div`
width: 100%;
height: 60%;
&::before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 20%;
  bottom: 40%;
  left: 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
`

export const EventsImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;



export const EventsTitle = styled.h2`
  color: #003366;
  padding: 0 10px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom:5px;
  z-index:1;
`;



export const EventsDescription = styled.p`
padding: 10px;
font-size: 15px;
color: #000;
`;


