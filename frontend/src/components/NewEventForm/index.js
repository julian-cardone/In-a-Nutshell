import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearEventErrors, createEvent } from "../../store/events";
import "./NewEventForm.css";
import { getDay, getMonth, setHours, setMinutes } from "date-fns";
import { fetchEvents } from "../../store/events";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { EventContext } from "../../App";

function NewEventForm({
  eventDateProp,
  showModal,
  setShowModal,
  setEventsInd,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const errors = useSelector((state) => state.errors.events);
  const dispatch = useDispatch();
  // const [startDate, setStartDate] = useState(new Date());
  const datething = new Date(eventDateProp)
  let offset = datething.getTimezoneOffset();
  let time = datething.getTime();
  let dateTime = new Date( time + (offset * 108000))
  const [startDate, setStartDate] = useState(dateTime);
  // debugger
  const info = useContext(EventContext);
  // console.log(info.eventInfo[4]._id)

  useEffect(() => {
    setEventDate(eventDateProp);
    return () => dispatch(clearEventErrors());
  }, [dispatch, eventDateProp]);

  const handleSubmit = (e) => {
    // const nyTime = formatInTimeZone(
    //   eventDate,
    //   "America/New_York",
    //   "yyyy-MM-dd HH:mm:ss zzz"
    // );
    let nyTime = startDate
    e.preventDefault();
    setEventsInd(e);
    setShowModal(false);
    const event = {
      title,
      description,
      nyTime,
      note: "",
      authorId: info.eventInfo[4]._id
    };
    // debugger
    dispatch(createEvent({ event }));
  };


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
          <div className={`timeMenu`}>
            <p>Select Time</p>
            <div className="date-picker-container" style={{width: "100px"}}>
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

export default NewEventForm;
