import { useEffect } from "react";
import EventCard from "./EventCard"
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import './EventsIndex.css';



function EventsIndex() {
    const events = useSelector(state => Object.values(state.eventsReducer.all));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents());
    }, [])
    return (
    <>
    <div className="outer-events-div" >
    
    <h1 className="title-for-events">Upcoming Interviews</h1>
    <div className="events-div" >
    
    {events.map(event => (
       <EventCard key={event.id} event={event}/>
    ))}
    </div>    
    </div>  
    </>
    )
}

export default EventsIndex;