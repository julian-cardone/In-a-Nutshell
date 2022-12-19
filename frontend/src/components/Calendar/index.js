import dateFns from "date-fns";
import { useState } from "react";

const Calendar = () =>{

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <>
    <div className="calendar-container">

    </div>
    </>
  )
}

export default Calendar;