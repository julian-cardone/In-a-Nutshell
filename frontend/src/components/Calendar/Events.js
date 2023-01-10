import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import isSameDay from "date-fns/isSameDay";
import { getTime, getHours, getMinutes, isBefore } from "date-fns";
import { EventContext } from "../../App";

const Events = ({ day, events }) => {
  //this script converts the backend format of the date to match the frontend format and turns it into a
  //date object. it then runs a comparison to see that the days are the same
  const eventInfo = useContext(EventContext);

  function isSameDayAdv(day, eventDay) {
    //eventDay: 2022-10-21T00:00:00.000Z

    let convertedDate = convert(eventDay);

    // console.log(new Date(day))
    // Sat Dec 31 2022 00:00:00 GMT-0500 (Eastern Standard Time)
    // console.log(convertedDate);
    // Mon Jan 23 2023 00:00:00 GMT-0500 (Eastern Standard Time)
    return isSameDay(new Date(day), convertedDate);
  }

  function convert(eventDay) {
    let year = "";
    for (let i = 0; i < 4; i++) {
      year = year + eventDay[i];
    }

    let month = "";
    for (let i = 5; i < 7; i++) {
      month = month + eventDay[i];
    }

    let day2 = "";
    for (let i = 8; i < 10; i++) {
      day2 = day2 + eventDay[i];
    }

    month = parseInt(month) - 1;

    return new Date(year, month, day2);
  }
  //end of script for conversion methods

  let test;

  let eventsArray = [];
  for (let i = 0; i < eventInfo.eventInfo[2].length; i++) {
    if (isSameDayAdv(day, eventInfo.eventInfo[2][i].eventDate)) {
      test = eventInfo.eventInfo[2][i];
      eventsArray.push(test);
    }
  }

  //R.I.P. Bubble sort :'(

  // console.log(eventsArray);

  const displayTime = (day) => {
    const date = new Date(day);

    //minutes logic
    let minutes = getMinutes(new Date(date));
    if (minutes < 10) {
      minutes = minutes.toString().split("");
      minutes.unshift("0");
      minutes = minutes.join("");
    }

    //hours logic
    let hours = getHours(new Date(date));
    if (hours > 12) {
      hours = hours - 12;

      return `${hours}:${minutes} PM`;
    } else {
      return `${hours}:${minutes} AM`;
    }
  };

  const setCurrentEvent = eventInfo.eventInfo[1];

  const handleClick = (e, event) => {
    setCurrentEvent(event);
  };

  return (
    <>
      {eventsArray.map((event) => (
        <div
          className="h1-event-placeholder p4 point quikHover"
          onClick={(e) => handleClick(e, event)}
        >
          {/* <span className="cal-event-time p3">
            {displayTime(event.eventDate)}
          </span>{" "} */}
          {event.title}
        </div>
      ))}
    </>
  );
};

export default Events;
