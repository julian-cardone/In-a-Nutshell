import './EventsIndex.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent, updateEvent } from '../../store/events';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
function EventCard({event}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [eventDate, setEventDate] = useState( new Date())
    const [status, setStatus] = useState(false)
    const errors = useSelector(state => state.errors.events);

    const removeEvent = () => {
        dispatch(deleteEvent(event._id));
    }

    const update = (field) => {
        let setState;
    
        switch (field) {
            case "title":
                setState = setTitle;
                break;
            case "description":
                setState = setDescription;
                break;
            case "eventDate":
                setState = setEventDate;
                break;
            case "status":
                setState = setStatus;
                break;
            // default:
            //     throw Error("Unknown field")
        }
    
        return (e) => setState(e.currentTarget.value)
      }

    const handleSubmit = e => {
        e.preventDefault();
        const event = {
            title,
            description,
            eventDate,
            status
        }
        dispatch(updateEvent({ event })); 
      };

    const updateClick = () => {
        return (
        <form className="event-form" onSubmit={handleSubmit}>
        <div className="errors">{errors?.title}</div>
          <input 
            type="text"
            value={title}
            onChange={update("title")}
            placeholder="Title"
          />
          <div className="errors">{errors?.description}</div>
          <input 
          type="text" 
          value={description}
          onChange={update("description")}
          placeholder="Description"
          />
          <div className="errors">{errors?.eventDate}</div>
          <input 
          type="datetime"
          value={eventDate}
          onChange= {update("eventDate")}
          />
          <div className="errors">{errors?.status}</div>
          Completed?
          <input 
          type="checkbox"
          value={status}
          onChange= {update("status")}
          placeholder="false"
          />
          <div className="errors">{errors && errors.event}</div>
          <input type="submit" value="Submit" disabled={
              !title||
              !description ||
              !eventDate||
              !status }/>
        </form>
        )
    }
    return (
        <>
        <div className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>
            <button onClick={removeEvent}>remove</button>
            <button onClick={updateClick}>update</button>
        </div>
        </>
    )
}

export default EventCard;