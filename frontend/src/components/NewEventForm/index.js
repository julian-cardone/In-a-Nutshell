import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearEventErrors, createEvent } from '../../store/events';
import "./NewEventForm.css"
import NewEventFormBox from './NewEventForm';

function NewEventForm ({ eventDateProp, showModal, setShowModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState( new Date())
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.events);
  const newEvent = useSelector(state => state.events.new)

  useEffect(() => {
    setEventDate(eventDateProp);
    return () => dispatch(clearEventErrors());
  }, [dispatch, eventDateProp]);

  const handleSubmit = e => {
    e.preventDefault();
    setShowModal(false);
    const event = {
        title,
        description,
        eventDate
    }
    dispatch(createEvent({ event })); 
  };

  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minutes = [];

  for (let i = 1; i < 60; i++){
    minutes.push(i);
  }

//   const titleUpdate = e => setTitle(e.currentTarget.value);
//   const descriptionUpdate = e => setDescription(e.currentTarget.value);
//   const eventDateUpdate = e => setEventDate(e.currentTarget.value);
//   const statusUpdate ==> { return (e) => setStatus(e.currentTarget.value);};
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
        default:
            throw Error("Unknown field")
    }

    return (e) => setState(e.currentTarget.value)
  }

  return (
    <>
    <div className='form-wrapper'>
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
        <select>
          {hours.map((hour)=>(
            <option>{hour}</option>
          ))}
        </select>
        <select>
          {minutes.map((minute)=>(
            <option>{minute}</option>
          ))}
        </select>
        <label>AM
        <input name="rad"type="radio"value="AM"></input>
        </label>
        <label>PM
        <input name="rad"type="radio"value="PM"></input>
        </label>
        {/* <div className="errors">{errors?.eventDate}</div>
        <input 
        type="datetime"
        value={eventDate}
        onChange= {update("eventDate")}
        /> */}
        {/* <div className="errors">{errors?.status}</div>
        Completed?
        <input 
        type="checkbox"
        value={status}
        onChange= {update("status")}
        placeholder="false"
        /> */}
        <div className="errors">{errors && errors.event}</div>
        <input type="submit" value="Submit" disabled={
            !title||
            !description ||
            !eventDate}/>
      </form>
      </div>
    </>
  )
}

export default NewEventForm;