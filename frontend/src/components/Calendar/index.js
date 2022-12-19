import dateFns from "date-fns";
import { useState } from "react";
import Header from "./header";

const Calendar = () =>{

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <>
    <div className="calendar-container">
      <Header />
    </div>
    </>
  )
}

export default Calendar;