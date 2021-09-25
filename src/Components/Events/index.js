import React from 'react'
import {EventsContent,EventsTrail,EventWrapper,EventCard,EventImg,EventTitle,EventDescription,EventBtn} from './Styles'
import Event1 from '../../images/Event1.JPG'
import Event2 from '../../images/Event2.JPG'
import Event3 from '../../images/Event3.JPG'


const Events = () => {
    return (
        <EventsContent>
          <h1>EVENTS</h1> 
          <EventsTrail>
                    <EventWrapper>
                        <EventCard>
                            <EventImg src={Event1} alt={Event1} />
                            <EventTitle>Meat Variety</EventTitle>
                            <EventDescription>We labour the land whith natural means,no chemical product in our vegetable</EventDescription>
                            <EventBtn>Purchase</EventBtn>
                        </EventCard>
                        <EventCard>
                            <EventImg src={Event2} alt={Event2} />
                            <EventTitle>Meat Variety</EventTitle>
                            <EventDescription>We labour the land whith natural means,no chemical product in our vegetable</EventDescription>
                            <EventBtn>Purchase</EventBtn>
                        </EventCard>
                        <EventCard>
                            <EventImg src={Event3} alt={Event3} />
                            <EventTitle>Meat Variety</EventTitle>
                            <EventDescription>We labour the land whith natural means,no chemical product in our vegetable</EventDescription>
                            <EventBtn>Purchase</EventBtn>
                        </EventCard>
                    </EventWrapper>
                </EventsTrail> 
        </EventsContent>
    )
}

export default Events
