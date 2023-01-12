import './EventsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, updateEvent } from '../../store/events';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import UpdateModal from "../UpdateModal/UpdateModal";
import { EventContext } from "../../App";
import { format, addMinutes } from "date-fns";

function EventCard({event, setEventsInd}) {
    const dispatch = useDispatch();
    const history = useHistory();  
    const eventInfo = useContext(EventContext);
    const [showModal, setShowModal] = useState(false);
    const removeEvent = () => {
        dispatch(deleteEvent(event._id));
        setEventsInd(null);
      };


    const [description, setDescription] = useState('')
    const [eventDate, setEventDate] = useState( new Date())
    const [status, setStatus] = useState(false)
    const errors = useSelector(state => state.errors.events);

    const updateClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    const handleClick = (event) =>{
      // console.log(event);
      eventInfo.eventInfo[1](event);
    }

    return (
        <>
        <div className="event-card"onClick={()=> handleClick(event)}>
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <div className='event-card-date'>
            <p>
                    {format(
                      addMinutes(
                        new Date(event.eventDate),
                        new Date(
                          event.eventDate
                        ).getTimezoneOffset()
                      ),
                      "p"
                    )}
                    {/* {new Date(eventInfo.eventInfo[0].eventDate).getTimezoneOffset()} */}
                  </p>
                  <p>
                    {format(new Date(event.eventDate), "eeee")}
                    ,{" "}
                    {format(
                      new Date(event.eventDate),
                      "MMMM do"
                    )}{" "}
                  </p>
                </div>
                <div className='index-container'>
                <span className="updateButton p4" onClick={updateClick}>
                    Update Event
                  </span>
                  <span className="deleteButton p4" onClick={removeEvent}>
                    Delete Event
                  </span>
                </div>
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