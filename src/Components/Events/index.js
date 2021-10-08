import React from "react";
import {
  EventsContent,
  EventsTrail,
  EventWrapper,
  MainEventCard,
  MainEventImg,
  MainEventTitle,
  MainEventDescription,
  EventCards,
  EventCard,
  EventsImg,
  EventsTitle,
  EventsDescription,
  EventBtn,
} from "./Styles";
import Event1 from "../../images/Event1.JPG";
import Event3 from "../../images/Event3.JPG";

const Events = () => {
  return (
    <EventsContent id='Events'>
      <h1>Nos Evénements</h1>
      <EventsTrail>
        <EventWrapper>
          <MainEventCard>
            <MainEventImg src={Event1} alt={Event1} />
            <MainEventTitle>WAUMBA Festival</MainEventTitle>
            <MainEventDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable,We labour the land whith natural means,no chemical product in our
              vegetable,We labour the land whith natural means,no chemical product in our
              vegetable
            </MainEventDescription>
            <EventBtn>En savoir plus... </EventBtn>
          </MainEventCard>
          <EventCards>
            <EventCard>
            <EventsImg src={Event3} alt={Event3} />
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
            <EventCard>
            <EventsImg src={Event3} alt={Event3} />
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
            <EventCard>
            <EventsImg src={Event3} alt={Event3} />
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
            <EventCard>
            <EventsImg src={Event3} alt={Event3} />
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
          </EventCards>
        </EventWrapper>
      </EventsTrail>
    </EventsContent>
  );
};

export default Events;
