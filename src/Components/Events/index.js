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
  EventCardswrapper,
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
      <h1>Evénements</h1>
      <EventsTrail>
        <EventWrapper>
          <MainEventCard>
            <MainImageContainer>
              <MainEventImg src={Event1} alt={Event1} />
            </MainImageContainer>
            <MainDescriptionContainer>
              <MainEventTitle>Banquet d’Affaires de Tchegera</MainEventTitle>
              <MainEventDescription>
              Le Banquet d’Affaire de Tchegera est un cadre de découverte touristique, relationnelle et de partage d’expériences intergénérationnel pour les affaires dans les Grands-Lacs africains.
Étymologiquement, « Tchegera », issu de « Kuyegera » en langue Havu du Sud-Kivu, qui veut dire « rapprocher/se rapprocher »… l’île Tchegera doit son nom à sa position géographique face à la royauté de Bushi, au Sud-Kivu et de Bahunde, au Nord-Kivu, séparée par le lac Kivu. Par extension, Tchegera signifie : « proche du roi », car l’île était sous la propriété du roi.
L’île de Tchegera, est une merveilleuse île au nord du lac Kivu ravissant le souffle par sa beauté et par une très belle vue qu’elle offre sur la ville de Goma, le lac Kivu et tout au nord la chaine des montagnes de feu du Virunga. C’est un endroit idéal pour se détendre et respirer un air frais du lac Kivu, loin de la saturation des grandes agglomérations ; et surtout se créer des nouvelles relations d’affaires en passant des moments précieux de partage.
Ainsi, de part son attraction, son histoire et sa légende, « Tchegera » est pour nous une expression, un cadre d’honneur et de grandeur, invitant ses sujets à la croissance et à l’élévation : « proche du Roi ». 

              </MainEventDescription>
              <EventBtn>En savoir plus... </EventBtn>
            </MainDescriptionContainer>
          </MainEventCard>
          <EventCardswrapper>
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
          </EventCardswrapper>
        </EventWrapper>
      </EventsTrail>
    </EventsContent>
  );
};

export default Events;
