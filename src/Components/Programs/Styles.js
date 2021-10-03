import styled from "styled-components";
import aboutBg from "../../images/replacementbkg.jpg";

export const ProgramsContent = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url(${aboutBg});
  background-size: cover;

  h1 {
    position: absolute;
    font-size: 2rem;
    color: #003366;
    left: 50px;
    top: 50px;
    width: 80%;
    border-bottom: 2px solid #a36a00;
  }
`;
export const ProgramsTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProgramsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
  overflow: hidden;
`;

export const ProgramsCard = styled.div`
  margin: 20px 10px 10px;
  height: 270px;
  width: 300px;
  border: 5px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: whitesmoke;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3), 0 0px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.03);
    margin: 0 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const ProgramsImg = styled.img`
  width: 300px;
  height: 190px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProgramsTitle = styled.h2`
  color: #003366;
  padding: 0 10px;
  font-size: 25px;
  font-weight: bold;
  width: 90%;
  border-bottom: 2px solid #a36a00;
`;

export const ProgramsDescription = styled.p`
  padding: 10px;
  font-size: 15px;
  color: #000;
`;
