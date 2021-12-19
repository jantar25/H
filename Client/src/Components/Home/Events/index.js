import {Container,Popular} from './Styles'
import Event from './Event/index'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'


const PopularsItems = () => {
    const [events,setEvents] = useState([]);

    useEffect(()=>{
        const getEvents= async ()=>{
            try {
                const res = await axios.get("http://localhost:5000/events")
                setEvents(res.data);
            } catch(err){
                console.log(err)
            }
        };
        getEvents();  
    },[])



    return (
        <Container>
            <Popular>
            {events.slice(0,8).map((item)=>(<Event item={item} key={item._id} />))}
            </Popular>
        </Container>
    )
}

export default PopularsItems