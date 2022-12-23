import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import isSameDay from "date-fns/isSameDay";
import { getTime, getHours, getMinutes, isBefore } from "date-fns";

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
  for (let i = 0; i < events.length; i++) {
    if (isSameDayAdv(day, events[i].eventDate)) {
      test = events[i];
      eventsArray.push(test);
    }
  }

  //sort the array:

  // console.log(((isBefore((eventsArray[0]), (eventsArray[1])))))
  // console.log(eventsArray);

  // let cont = true;

  // if (eventsArray.length > 1) {
  //   while (cont) {
  //     cont = false;

  //     for (let i = 0; i < eventsArray.length - 1; i++) {
  //       if (
  //         !isBefore(
  //           new Date(eventsArray[i].eventDate),
  //           new Date(eventsArray[i + 1].eventDate)
  //         )
  //       ) {
  //         [eventsArray[i], eventsArray[i + 1]] = [
  //           eventsArray[i + 1],
  //           eventsArray[i],
  //         ];
  //         cont = true;
  //         debugger
  //       }
  //     }
  //   }
  // }

  // console.log(eventsArray);

  const displayTime = (day) => {
    const date = new Date(day);

    //minutes logic
    let minutes = getMinutes(new Date(date));
    if (minutes < 10) {
      minutes = minutes.toString().split("");
      minutes.unshift("0");
      minutes = minutes.join("");
      // console.log(minutes);
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

  return (
    <>
      {eventsArray.map((event) => (
        <div className="h1-event-placeholder ssp1">
          <span className="cal-event-time p3">
            {displayTime(event.eventDate)}
          </span>{" "}
          {event.title}
        </div>
      ))}
    </>
  );
};

export default Events;
