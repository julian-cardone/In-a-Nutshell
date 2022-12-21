import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearEventErrors, createEvent } from '../../store/events';
import "./NewEventForm.css"
import NewEventFormBox from './NewEventForm';

function NewEventForm () {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState( new Date())
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.events);

  useEffect(() => {
    return () => dispatch(clearEventErrors());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const event = ({
        title: title,
        description: description,
        eventDate: eventDate,
        status: status
    })
    dispatch(createEvent({ event })); 
  };

  const titleUpdate = e => setTitle(e.target.value);
  const descriptionUpdate = e => setDescription(e.target.value);
  const eventDateUpdate = e => setEventDate(e.target.value);
  const statusUpdate = e => setStatus(e.target.value);
  debugger;

  return (
    <>
      <form className="event-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          value={title}
          onChange={titleUpdate}
          placeholder="Title"
        />
        <input 
        type="text" 
        value={description}
        onChange={descriptionUpdate}
        placeholder="Description"
        />
        <input 
        type="datetime"
        value={eventDate}
        onChange= {eventDateUpdate}
        />
        Completed?
        <input 
        type="checkbox"
        value={status}
        onChange= {statusUpdate}
        placeholder="false"
        />
        <div className="errors">{errors && errors.event}</div>
        <input type="submit" value="Submit" />
      </form>
      <NewEventFormBox title={title} description={description} eventDate={eventDate} status={status} />
    </>
  )
}

export default NewEventForm;