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
} from "./Styles";
import Event1 from "../../../images/Event1.JPG";
import Event2 from "../../../images/Event2.JPG";
import Event3 from "../../../images/Event3.JPG";
import Event4 from "../../../images/Event4.JPG";
import Event5 from "../../../images/Event5.JPG";

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
             <b>Le Banquet d’Affaire de Tchegera</b> est un cadre de découverte touristique, 
                relationnelle et de partage d’expériences intergénérationnel pour les affaires 
                dans les Grands-Lacs africains.<br/>
              Étymologiquement, <b>« Tchegera »</b>, issu de <b>« Kuyegera »</b> en langue Havu du Sud-Kivu,
              qui veut dire « rapprocher/se rapprocher »… l’île Tchegera doit son nom à sa position géographique
              face à la royauté de Bushi, au Sud-Kivu et de Bahunde, au Nord-Kivu, séparée par le lac Kivu.<br/><br/>
              Par extension, Tchegera signifie : <b>« proche du roi »</b>, car l’île était sous la propriété du roi.
              L’île de Tchegera, est une merveilleuse île au nord du lac Kivu ravissant le souffle par sa beauté
              et par une très belle vue qu’elle offre sur la ville de Goma, le lac Kivu et tout au nord 
              la chaine des montagnes de feu du Virunga. C’est un endroit idéal pour se détendre et respirer 
              un air frais du lac Kivu, loin de la saturation des grandes agglomérations ; et surtout se créer 
              des nouvelles relations d’affaires en passant des moments précieux de partage.<br/><br/>
              Ainsi, de part son attraction, son histoire et sa légende, « Tchegera » est pour nous une expression,
              un cadre d’honneur et de grandeur, invitant ses sujets à la croissance et à l’élévation :
                « proche du Roi ». 
               </MainEventDescription>
            </MainDescriptionContainer>
          </MainEventCard>
          <EventCardswrapper>
            <EventCard>
              <ImageContainer>
                <EventsImg src={Event2} alt={Event2} />
              </ImageContainer>
              <DescriptContainer>
                 <EventsTitle>Bot’elengi : Des lettes et des images</EventsTitle>
                  <EventsDescription>
                  <b>« Bot’elengi : Des lettres et des images »</b> est un salon littéraire itinérant, 
                  une plateforme qui se veut être un espace de dissémination des savoirs africains 
                  (africains et afrodescendants) via le patrimoine oral, linguistique, 
                  et la littérature africaine. Il met en avant la culture de la lecture et 
                  le développement de la pensée critique par le questionnement de la production 
                  littéraire et son impact sur les communautés africaines et afrodescendantes.<br/>
                  <b>« Bot’elengi »</b> est un concept issu du lingala, il est utilisé 
                  pour signifier qu’une femme a bien enfanté et par ricochet, c’est le nom de la fête du nouveau-né.<br/>
                  Par extension, Bot’elengi est la célébration des nouveaux-nés, les œuvres littéraires, 
                  qui à travers les lettres transforment notre perception du monde et de l’image 
                  que nous avons les uns des autres.<br/>
                  Ce salon littéraire itinérant va d’un lieu à un autre, dans le but de faire découvrir
                  la culture locale via les écrivains locaux, mais aussi, en venant avec des œuvres littéraires 
                  de différents auteurs afin de créer un débat autour du livre. 
                  Ayant l’idée d’offrir une tribune d’expression pour tous, en tenant compte de la
                    diversité culturelle et linguistique pour ainsi donner la voix aux communautés minoritaires 
                    et marginalisées.<br/><br/>
                  Le but est de questionner les images peintes dans différents ouvrages et d’encourager 
                  des productions littéraires originales, qui renforcent les diverses identités culturelles des 
                  communautés africaines et afro-descendantes. Mais aussi, rappeler le rôle de la littérature 
                  dans un continent en course vers sa renaissance, en mettant un accent sur la notion des langues africaines
                  comme voie de cohésion, avec le Swahili en particulier qui est la langue la plus parlée de l’Afrique noire.
                  </EventsDescription>
              </DescriptContainer>
            </EventCard>
            <EventCard>
            <ImageContainer>
              <EventsImg src={Event3} alt={Event3} />
            </ImageContainer>
            <DescriptContainer>
              <EventsTitle>Goma Ni Ngoma</EventsTitle>
              <EventsDescription>
              <b>« GOMA NI NGOMA »</b> : un mythe de force, un espace d’expression culturelle où 
              les jeunes de Goma exposent leurs passions et leurs talents, en se servant de l’art 
              comme thérapie pour se guérir de leurs maux et transcender les épreuves de leur quotidien, 
              en projetant un futur plein de lumière.<br/>
              3ème plus grande agglomération de la <b>République Démocratique du Congo</b> avec plus de deux million d’habitants,
              la ville de Goma, une perle touristique au pied des Virunga, est une jeune ville en plein essor 
              économique et dynamique sur le plan socioculturel.<br/><br/>
              Autrefois, elle fut une terre de rencontre spirituelle et de partage culturel 
              entre plusieurs peuples de la région des Grands-Lacs.
              Dans plusieurs cultures africaines, le tamtam, <b>« Ngoma »</b> en Swahili est un instrument
              au cœur des festivités. Par ses rythmes variés et sa vitesse, les chants et les cris qui l’accompagnent,
                les Ngoma ramènent ses auditeurs à la dance et à la transe grâce aux puissantes énergies qu’ils 
                communiquent, il est ainsi symbole d’alerte, de dynamisme et de vitalité.<br/><br/>
              La ville de Goma doit son nom et ses énergies aux sons des tamtams qui y raisonnaient 
              pendant les festivités culturelles et coutumières d’autrefois ayant imprégnés cette terre de leur réputation.
              Goma, est par-là devenu une terre auto-thérapeutique malgré la sombritude de son histoire et les blessures
                de son peuple, elle ne cesse de guérir de ses maux et de revivre, année après année.
              « GOMA NI NGOMA » est un concept, un mythe de force, un espace d’expression culturelle où les jeunes
              de Goma exposent leurs passions et leurs talents. Ils se servent de leur art comme thérapie pour
                se guérir et transcender les difficultés de leur quotidien, en projetant un futur plein des lumières 
                et de joie.

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
