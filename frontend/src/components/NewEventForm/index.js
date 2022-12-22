import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearEventErrors, createEvent } from '../../store/events';
import "./NewEventForm.css"
import NewEventFormBox from './NewEventForm';
import { getDay, getMonth, setHours, setMinutes } from 'date-fns';

function NewEventForm ({ eventDateProp, showModal, setShowModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [eventDate, setEventDate] = useState( new Date())
  const [status, setStatus] = useState(false)
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors.events);
  const newEvent = useSelector(state => state.events.new)

  // const [hour, setTheHour] = useState(null);
  // const [minute, setTheMinute] = useState();

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
    debugger
    dispatch(createEvent({ event })); 
  };

  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const minutes = [];

  for (let i = 1; i < 60; i++){
    if (i < 10){
      minutes.push(`0${i}`)
    } else {
      minutes.push(i);
    }
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

// function handleHours(e){
//   let cHour = e.targer.value;
//   setTheHour(cHour);
//   }

//   function handleMinutes(e){
//     let cMinute = e.target.value;
//     setTheMinute(cMinute)
//   }

  function handleHoursTwo(e){
    console.log(e.target.value)
    // setTheHour(e.target.value);
    // console.log(hour);
    setEventDate(setHours(new Date(eventDate), e.target.value));
  }

  function handleMinutesTwo(e){
    console.log(e.target.value)
    // setTheHour(e.target.value);
    // console.log(hour);
    setEventDate(setMinutes(new Date(eventDate), e.target.value));
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

        <select onChange={(e) => handleHoursTwo(e)}>
          {hours.map((hour)=>(
            <option className='hour-option'value={hour}>{hour}</option>
          ))}
        </select>
        <select onChange={(e) => handleMinutesTwo(e)}>
          {minutes.map((minute)=>(
            <option className='minute-option'value={minute}>{minute}</option>
          ))}
        </select>

        {/* <label>AM
        <input name="rad"type="radio"value="AM"></input>
        </label>
        <label>PM
        <input name="rad"type="radio"value="PM"></input>
        </label> */}

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