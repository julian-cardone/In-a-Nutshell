import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEventErrors, updateEvent } from "../../store/events";
import "./UpdateModal.css";
import { getDay, getMonth, setHours, setMinutes } from "date-fns";
import { zonedTimeToUtc, formatInTimeZone } from 'date-fns-tz/esm'
import { EventContext } from "../../App";
import DatePicker from 'react-datepicker'



function UpdateForm({ event, showModal, setShowModal, setEventsInd }) {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [eventDate, setEventDate] = useState(event.eventDate);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.events);
  const newEvent = useSelector((state) => state.events.new);
  const [startDate, setStartDate] = useState(new Date());
  const eventInfo = useContext(EventContext);

  useEffect(() => {
    setEventDate(event.eventDate);
    return () => dispatch(clearEventErrors());
  }, [dispatch, event.eventDate]);



  const nyTime = formatInTimeZone(eventDate, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz')
  console.log(eventDate)
  // console.log(nyTime)

  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    const changedEvent = {
      id: event._id,
      title,
      description,
      nyTime,
    };

    setEventsInd("literally anything")
    // debugger
    dispatch(updateEvent(changedEvent));
    setShowModal(false);
    eventInfo.eventInfo[1]()
  };
  setEventsInd("literally anything else")

  const minutes = [];

  for (let i = 0; i < 60; i++) {
    if (i < 10) {
      minutes.push(`0${i}`);
    } else {
      minutes.push(i);
    }
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
      default:
        throw Error("Unknown field");
    }

    return (e) => setState(e.currentTarget.value);
  };

  // function handleHoursTwo(e) {
  //   e.preventDefault();
  //   setEventDate(setHours(new Date(eventDate), e.target.value));
  // }

  // function handleMinutesTwo(e) {
  //   // console.log(e.target.value);
  //   setEventDate(setMinutes(new Date(eventDate), e.target.value));
  // }

  function handleTime(e) {
    let time = e.target.value
    let hour = time.slice(0, 2)
    let minute = time.slice(3, 6)
   setEventDate(setHours(new Date(event.eventDate), e.target.value));
   setEventDate(setMinutes(new Date(event.eventDate), e.target.value));
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="event-form frm" onSubmit={handleSubmit}>
          <div className="errors">{errors?.title}</div>
          <input
            className={`txtField p2`}
            type="text"
            value={title}
            onChange={update("title")}
            placeholder="Title"
          />
          <div className="errors">{errors?.description}</div>
          <textarea
            className={`txtField p2`}
            type="text"
            value={description}
            onChange={update("description")}
            placeholder="Description"
            rows="8"
            cols="33"
          ></textarea>
          <div className={`timeMenu`}>
            <p>Select Time</p>
            {/* <input type="datetime-local" onChange={e => handleTime(e)}></input> */}
            <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
          </div>
          <div className="errors">{errors && errors.event}</div>
          <input
            className={`btn btnPrimary`}
            type="submit"
            value="Submit"
            disabled={!title || !description || !eventDate}
          />
        </form>
      </div>
    </>
  );
}

export default UpdateForm;
