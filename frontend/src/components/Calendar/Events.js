import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import isSameDay from "date-fns/isSameDay";

const Events = ({ day, events }) => {


//this script converts the backend format of the date to match the frontend format and turns it into a 
//date object. it then runs a comparison to see that the days are the same

function isSameDayAdv(day, eventDay) {
  //eventDay: 2022-10-21T00:00:00.000Z

  let convertedDate = convert(eventDay);

  // console.log(new Date(day)) 
  // Sat Dec 31 2022 00:00:00 GMT-0500 (Eastern Standard Time)
  // console.log(convertedDate);
  // Mon Jan 23 2023 00:00:00 GMT-0500 (Eastern Standard Time)
  return isSameDay(new Date(day), convertedDate)

}

function convert(eventDay){

  let year = "";
  for (let i = 0; i < 4; i++){
    year = year + eventDay[i];
  }

  let month = "";
  for (let i = 5; i < 7; i++){
    month = month + eventDay[i];
  }

  let day2 = "";
  for (let i = 8; i < 10; i++){
    day2 = day2 + eventDay[i];
  }

  month = parseInt(month)-1

  return new Date(year, month, day2)

}
//end of script for conversion methods

  let test;

  let eventsArray = [];
  for (let i = 0; i < events.length; i++){
    if (isSameDayAdv(day, events[i].eventDate)){
      test = events[i];
      eventsArray.push(test);
    }
  }

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchEvents())
  },[dispatch])

  return (
    <>
    {eventsArray.map((event)=>(
      <div className="h1-event-placeholder">
      <h1>{event.title}</h1>
      </div>
    ))}
    </>
  )

}

export default Events;