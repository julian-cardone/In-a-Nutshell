import './EventsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, updateEvent } from '../../store/events';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import UpdateModal from "../UpdateModal/UpdateModal";
import { EventContext } from "../../App";

function EventCard({event, setEventsInd}) {
    const dispatch = useDispatch();
    const history = useHistory();  
    const eventInfo = useContext(EventContext);
    const [showModal, setShowModal] = useState(false);
    const removeEvent = () => {
        dispatch(deleteEvent(eventInfo.eventInfo[0]._id));
        setEventsInd(null);
        eventInfo.eventInfo[1](null);
      };


    const [description, setDescription] = useState('')
    const [eventDate, setEventDate] = useState( new Date())
    const [status, setStatus] = useState(false)
    const errors = useSelector(state => state.errors.events);

    const updateClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    }
    return (
        <>
        <div className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <p className="event-description">{event.eventDate}</p>
            <span className="remove-event-button" onClick={removeEvent}>remove</span>
            <span className="update-event-button" onClick={updateClick}>update</span>
        </div>
        {showModal && (
            <UpdateModal
              event={event}
              setEventsInd={setEventsInd}
              showModal={showModal}
              setShowModal={setShowModal}
              onClose={() => setShowModal(false)}
            />
          )}
        </>
    )
}

export default EventCard;