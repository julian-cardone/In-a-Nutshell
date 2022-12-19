import { useState } from "react";
import Cells from "./Cells";
import Days from "./Week";
import Header from "./Header";

const Calendar = () =>{

  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // console.log(new Date());

  return (
    <>
    <div className="calendar-container">
      <Header currentMonth={currentMonth}setCurrentMonth={setCurrentMonth}/>
      {/* <Days currentMonth={currentMonth}setCurrentMonth={setCurrentMonth}/> */}
      <Cells currentMonth={currentMonth}setCurrentMonth={setCurrentMonth}selectedDate={selectedDate}setSelectedDate={setSelectedDate}/>
    </div>
    </>
  )
}

export default Calendar;