import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEventErrors, updateEvent } from "../../store/events";
import "./UpdateModal.css";
import { getDay, getMonth, setHours, setMinutes } from "date-fns";
import { zonedTimeToUtc, formatInTimeZone } from 'date-fns-tz/esm'
import { EventContext } from "../../App";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";




function UpdateForm({ event, showModal, setShowModal, setEventsInd }) {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [eventDate, setEventDate] = useState(event.eventDate);
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.events);
  const datething = new Date(event.eventDate)
  let offset = datething.getTimezoneOffset();
  let time = datething.getTime();
  let dateTime = new Date( time + (offset * 60000))
  // debugger
  const [startDate, setStartDate] = useState(
    dateTime
);
  // const localTime = formatInTimeZone(eventDate, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz')

  const eventInfo = useContext(EventContext);

  useEffect(() => {
    setEventDate(event.eventDate);
    return () => dispatch(clearEventErrors());
  }, [dispatch, event.eventDate]);

  let nyTime = startDate

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedEvent = {
      id: event._id,
      title,
      description,
      nyTime,
    };

    setEventsInd("literally anything")
    dispatch(updateEvent(changedEvent));
    setShowModal(false);
    eventInfo.eventInfo[1]()
  };
  setEventsInd("literally anything else")

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
          <div className="timeMenu">
            <p>Select Time</p>
            <div className="date-picker-container">
              <DatePicker
                className="date-picker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={5}
                minDate = {new Date()}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
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
