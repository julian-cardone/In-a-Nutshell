import { useEffect, useState } from "react";
import Cells from "./Cells";
import Days from "./Week";
import Header from "./Header";
import squirrel from "../../assets/squirrel-origami-paper-svgrepo-com.svg";
import "./calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../store/events";

const Calendar = ({ setEventsInd }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [eventsInd, setEventsInd] = useState();

  const events = useSelector((state) => Object.values(state.events.all));

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(fetchEvents())
  // },[dispatch, eventsInd])

  // console.log(events);

  return (
    <>
      <div className="calendar-container">
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        {/* <Days currentMonth={currentMonth}setCurrentMonth={setCurrentMonth}/> */}
        <Days currentMonth={currentMonth} />
        <Cells
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          events={events}
          setEventsInd={setEventsInd}
        />
      </div>
    </>
  );
};

export default Calendar;
