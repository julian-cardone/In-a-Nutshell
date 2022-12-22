import './EventsIndex.css';
import { deleteEvent } from '../../store/events';

function EventCard({event}) {
    const removeEvent = (e) => {
        debugger;
        deleteEvent(event.id);
    }
    return (
        <>
        <div className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <button className="remove-event-card" type="submit"onClick={removeEvent}>Remove event</button>
        </div>
        </>
    )
}

export default EventCard;