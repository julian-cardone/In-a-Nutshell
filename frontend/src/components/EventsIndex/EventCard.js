import './EventsIndex.css';
function EventCard({event}) {
    return (
        <>
        <div className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
        </div>
        </>
    )
}

export default EventCard;