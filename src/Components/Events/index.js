import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
  AOS.init()

  return (
    <EventsContent>
      <h1>Nos Evénements</h1>
      <EventsTrail>
        <EventWrapper>
          <MainEventCard data-aos="zoom-in-right" >
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
            <EventCard data-aos="fade-down-left" data-aos-duration="500">
            <ImageContainer>
              <EventsImg src={Event2} alt={Event2} />
            </ImageContainer>
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
            <EventCard data-aos="fade-down-left" data-aos-duration="600">
            <ImageContainer>
              <EventsImg src={Event3} alt={Event3} />
            </ImageContainer>
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
            <EventCard data-aos="fade-down-left" data-aos-duration="700">
            <ImageContainer>
              <EventsImg src={Event4} alt={Event4} />
            </ImageContainer>
            <EventsTitle>TUCHEKE Pamoja</EventsTitle>
            <EventsDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventsDescription>
            </EventCard>
            <EventCard data-aos="fade-down-left" data-aos-duration="800">
            <ImageContainer>
              <EventsImg src={Event5} alt={Event5} />
            </ImageContainer>
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
