import { useContext, useEffect } from "react";
import EventCard from "./EventCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import "./EventsIndex.css";
import { EventContext } from "../../App";
import backArrow from "../../assets/arrows/back-arrow.png";
import { useHistory } from "react-router-dom";

function EventsIndex({ setEventsInd }) {
  const eventInfo = useContext(EventContext);
  const events = eventInfo.eventInfo[2];
  const history = useHistory();
  const handleReturn = () => {
    history.replace("/home");
  };
  // const events = useSelector(state => Object.values(state.events.all));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <>
      <div className="outer-events-div">
        <p className="backToCalendar p4" onClick={handleReturn}>
          <img src={backArrow} alt="" width="12" /> Calendar
        </p>
        <div className="header-for-events">
          <h1 className="title-for-events">All Events</h1>
        </div>
        <div className="events-div">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              setEventsInd={setEventsInd}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default EventsIndex;
