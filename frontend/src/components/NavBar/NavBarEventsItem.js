import { useContext } from "react";
import { EventContext } from "../../App";
import { addMonths, format, isWithinInterval, startOfToday } from "date-fns";
import { addMinutes } from "date-fns";
import { isBefore } from "date-fns";
import { addYears } from "date-fns";

function NavBarEventsItem({ setEventsInd, setNewNote }) {
  const eventInfo = useContext(EventContext);
  const events = eventInfo.eventInfo[2];
  console.log(events);
  const today = new Date(startOfToday());

  const handleClick = (event) => {
    // console.log(event);
    eventInfo.eventInfo[1](event);
    eventInfo.eventInfo[6](event.note);
    // console.log(event.note)
    // setNewNote(event.note)
  };

  // console.log(
  //   isBefore(new Date(events[2].eventDate), new Date(events[1].eventDate))
  // );

  return events.map((event) => {
    if (
      isWithinInterval(new Date(event.eventDate), {
        start: today,
        end: new Date(addMonths(today, 1)),
      })
    ) {
      return (
        <>
          <div
            className="event-container-default-nav"
            onClick={() => handleClick(event)}
          >
            <div className="event-title-container h3">{event.title}</div>
            <div className="event-date-container sp1">
              <p>
                {format(new Date(event.eventDate), "eeee")},{" "}
                {format(new Date(event.eventDate), "MMMM do")}{" "}
                {format(new Date(event.eventDate), "yyyy")}{" "}
                <span className="p3">
                  
                  {format(
                    addMinutes(
                      new Date(event.eventDate),
                      new Date(event.eventDate).getTimezoneOffset()
                    ),
                    "p"
                  )}
                </span>
              </p>
            </div>
            <div className="event-description-container">
              {event.description}
            </div>
          </div>
        </>
      );
    }
  });
}

export default NavBarEventsItem;
