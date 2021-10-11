import styled from "styled-components";

export const ProgramsContent = styled.section`
  background:#fff;
  position: relative;
  overflow: hidden;

`;

export const Header = styled.div`
height: 60vh;
max-heigth: 1100px;
position: relative;
overflow: hidden;
&::before {
  content: "";
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 50vh;
  bottom: 0vh;
  left: 0;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
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
z-index:1;
`

export const ProgramsTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
`;

export const ProgramsCard = styled.div`
  margin: 20px 10px 10px;
  height: 500px;
  width: 90%;
  border: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: whitesmoke;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scaleX(1.005);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const ProgramsCard2 = styled.div`
  margin: 20px 10px 10px;
  height: 600px;
  width: 90%;
  border: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: #FAF5EF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scaleX(1.005);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;


export const ProgramsImg = styled.img`
position:absolute;
top:0;
width: 100%;
height: 50%;
object-fit: cover;
`;

export const ProgramsTitle = styled.h2`
  position:absolute;
  top:40%;
  width: 50%;
  color: #fff;
  padding: 0 10px;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 5px 5px 10px #000000;
`;

export const ProgramsDescription = styled.p`
  position:absolute;
  top:50%;
  width: 90%;
  height: 50%;
  text-align:center;
  padding: 10px;
  font-size: 15px;
  color: #003366;
`;
