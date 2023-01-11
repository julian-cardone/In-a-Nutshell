import { useContext, useEffect } from "react";
import EventCard from "./EventCard"
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import './EventsIndex.css';
import { EventContext } from "../../App";



function EventsIndex({ setEventsInd }) {
    const eventInfo = useContext(EventContext);
    const events = eventInfo.eventInfo[2];
    // const events = useSelector(state => Object.values(state.events.all));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents());
    }, [])
    return (
    <>
    <div className="outer-events-div" >
     
    <h1 className="title-for-events">All Events</h1>
    <div className="events-div" >
    
    {events.map(event => (
       <EventCard key={event.id} event={event} setEventsInd={ setEventsInd }/>
    ))}
    </div>    
    </div>  
    </>
    )
}

export default EventsIndex;