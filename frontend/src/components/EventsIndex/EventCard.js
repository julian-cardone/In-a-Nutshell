import './EventsIndex.css';
import { deleteEvent } from '../../store/events';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function EventCard({event}) {
    const dispatch = useDispatch();

    const removeEvent = (e) => {
        dispatch(deleteEvent(event._id));
    }
    
    return (
        <>
        <div className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <button onClick={removeEvent}>Remove Event</button>
        </div>
        </>
    )
}

export default EventCard;