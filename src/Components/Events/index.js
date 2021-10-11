import React from "react";
import {
  EventsContent,
  EventsTrail,
  EventWrapper,
  MainEventCard,
  MainImageContainer,
  MainEventImg,
  MainDescriptionContainer,
  MainEventTitle,
  MainEventDescription,
  EventCards,
  EventCard,
  ImageContainer,
  EventsImg,
  DescriptContainer,
  EventsTitle,
  EventsDescription,
  EventBtn,
} from "./Styles";
import Event1 from "../../images/Event1.JPG";
import Event2 from "../../images/Event2.JPG";
import Event3 from "../../images/Event3.JPG";
import Event4 from "../../images/Event4.JPG";
import Event5 from "../../images/Event5.JPG";

const Events = () => {
  return (
    <EventsContent>
      <h1>Nos Evénements</h1>
      <EventsTrail>
        <EventWrapper>
          <MainEventCard>
            <MainImageContainer>
              <MainEventImg src={Event1} alt={Event1} />
            </MainImageContainer>
            <MainDescriptionContainer>
              <MainEventTitle>WAUMBA Festival</MainEventTitle>
              <MainEventDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable,We labour the land whith natural means,no chemical product in our
                vegetable,We labour the land whith natural means,no chemical product in our
                vegetable
              </MainEventDescription>
              <EventBtn>En savoir plus... </EventBtn>
            </MainDescriptionContainer>
          </MainEventCard>
          <EventCards>
            <EventCard>
              <ImageContainer>
                <EventsImg src={Event2} alt={Event2} />
              </ImageContainer>
              <DescriptContainer>
                 <EventsTitle>TUCHEKE Pamoja</EventsTitle>
                  <EventsDescription>
                    We labour the land whith natural means,no chemical product in our
                    vegetable
                  </EventsDescription>
              </DescriptContainer>
            </EventCard>
            <EventCard>
            <ImageContainer>
              <EventsImg src={Event3} alt={Event3} />
            </ImageContainer>
            <DescriptContainer>
              <EventsTitle>TUCHEKE Pamoja</EventsTitle>
              <EventsDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable
              </EventsDescription>
            </DescriptContainer>
            </EventCard>
            <EventCard>
            <ImageContainer>
              <EventsImg src={Event4} alt={Event4} />
            </ImageContainer>
            <DescriptContainer>
              <EventsTitle>TUCHEKE Pamoja</EventsTitle>
              <EventsDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable
              </EventsDescription>
            </DescriptContainer>
            </EventCard>
            <EventCard>
            <ImageContainer>
              <EventsImg src={Event5} alt={Event5} />
            </ImageContainer>
            <DescriptContainer>
              <EventsTitle>TUCHEKE Pamoja</EventsTitle>
              <EventsDescription>
                We labour the land whith natural means,no chemical product in our
                vegetable
              </EventsDescription>
            </DescriptContainer>
            </EventCard>
          </EventCards>
        </EventWrapper>
      </EventsTrail>
    </EventsContent>
  );
};

export default Events;
