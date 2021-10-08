import styled from "styled-components";
import aboutBg from "../../images/replacementbkg.jpg";

export const ProgramsContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
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
export const ProgramsTrail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProgramsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProgramsCard = styled.div`
  margin: 20px 10px 10px;
  height: 270px;
  width: 400px;
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
  width: 100%;
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
