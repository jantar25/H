import React from "react";
import {
  EventsContent,
  EventsTrail,
  EventWrapper,
  EventCard,
  EventImg,
  EventTitle,
  EventDescription,
  EventBtn,
} from "./Styles";
import Event1 from "../../images/Event1.JPG";
import Event2 from "../../images/Event2.JPG";
import Event3 from "../../images/Event3.JPG";

const Events = () => {
<<<<<<< HEAD
  return (
    <EventsContent>
      <h1>Nos Evénements</h1>
      <EventsTrail>
        <EventWrapper>
          <EventCard>
            <EventImg src={Event1} alt={Event1} />
            <EventTitle>WAUMBA Festival</EventTitle>
            <EventDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventDescription>
            <EventBtn>En savoir plus... </EventBtn>
          </EventCard>
          <EventCard>
            <EventImg src={Event2} alt={Event2} />
            <EventTitle>AMANI Festival</EventTitle>
            <EventDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventDescription>
            <EventBtn>En savoir plus... </EventBtn>
          </EventCard>
          <EventCard>
            <EventImg src={Event3} alt={Event3} />
            <EventTitle>TUCHEKE Pamoja</EventTitle>
            <EventDescription>
              We labour the land whith natural means,no chemical product in our
              vegetable
            </EventDescription>
            <EventBtn>En savoir plus... </EventBtn>
          </EventCard>
        </EventWrapper>
      </EventsTrail>
    </EventsContent>
  );
};
=======
    return (
        <EventsContent>
          <h1>EVENTS</h1> 
          <EventsTrail>
                    <EventWrapper>
                        <EventCard>
                            <EventImg src={Event1} alt={Event1} />
                            <EventTitle>WAUMBA Festival</EventTitle>
                            <EventDescription>We labour the land whith natural means,no chemical product in our vegetable</EventDescription>
                            <EventBtn>En Savoir Plus...</EventBtn>
                        </EventCard>
                        <EventCard>
                            <EventImg src={Event2} alt={Event2} />
                            <EventTitle>Tucheke Pamoja</EventTitle>
                            <EventDescription>We labour the land whith natural means,no chemical product in our vegetable</EventDescription>
                            <EventBtn>En Savoir Plus...</EventBtn>
                        </EventCard>
                        <EventCard>
                            <EventImg src={Event3} alt={Event3} />
                            <EventTitle>Sestri</EventTitle>
                            <EventDescription>We labour the land whith natural means,no chemical product in our vegetable</EventDescription>
                            <EventBtn>En Savoir Plus...</EventBtn>
                        </EventCard>
                    </EventWrapper>
                </EventsTrail> 
        </EventsContent>
    )
}
>>>>>>> d065706d0e03807f817b8b9b2669907cc0849f92

export default Events;
