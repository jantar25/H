import React from "react";
import {
  Header,
  HeaderImg,
  Title,
  ProgramsContent,
  ProgramsTrail,
  ProgramsWrapper,
  ProgramsCard,
  ProgramsImg,
  ProgramsTitle,
  ProgramsDescription,
} from "./Styles";
import Event1 from "../../images/Event1.JPG";
import Event2 from "../../images/Event2.JPG";
import Event3 from "../../images/Event3.JPG";

const Programs = () => {
  return (
    <ProgramsContent>
      <Header>
        <HeaderImg src={Event1} alt={Event1} />
        <Title>Nos Programmes</Title>
      </Header>
      <ProgramsTrail>
        <ProgramsWrapper>
          <ProgramsCard>
            <ProgramsImg src={Event1} alt={Event1} />
            <ProgramsTitle>WAUMBA Festival</ProgramsTitle>
            <ProgramsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </ProgramsDescription>
          </ProgramsCard>
          <ProgramsCard>
            <ProgramsImg src={Event1} alt={Event1} />
            <ProgramsTitle>WAUMBA Festival</ProgramsTitle>
            <ProgramsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </ProgramsDescription>
          </ProgramsCard>
          <ProgramsCard>
            <ProgramsImg src={Event2} alt={Event2} />
            <ProgramsTitle>AMANI Festival</ProgramsTitle>
            <ProgramsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </ProgramsDescription>
          </ProgramsCard>
          </ProgramsWrapper>
          <ProgramsWrapper>
          <ProgramsCard>
            <ProgramsImg src={Event3} alt={Event3} />
            <ProgramsTitle>TUCHEKE Pamoja</ProgramsTitle>
            <ProgramsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </ProgramsDescription>
          </ProgramsCard>
          <ProgramsCard>
            <ProgramsImg src={Event3} alt={Event3} />
            <ProgramsTitle>TUCHEKE Pamoja</ProgramsTitle>
            <ProgramsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </ProgramsDescription>
          </ProgramsCard>
          <ProgramsCard>
            <ProgramsImg src={Event3} alt={Event3} />
            <ProgramsTitle>TUCHEKE Pamoja</ProgramsTitle>
            <ProgramsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </ProgramsDescription>
          </ProgramsCard>
        </ProgramsWrapper>
      </ProgramsTrail>
    </ProgramsContent>
  );
};

export default Programs;
