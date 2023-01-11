import { useContext } from "react";
import { EventContext } from "../../App";
import { format, isWithinInterval, startOfToday } from "date-fns";
import { addMinutes } from "date-fns";
import { isBefore } from "date-fns";
import { addYears } from "date-fns";

function NavBarEventsItem() {
  const eventInfo = useContext(EventContext);
  const events = eventInfo.eventInfo[2];
  const today = new Date(startOfToday());

  const handleClick = (event) =>{
    console.log(event);
    eventInfo.eventInfo[1](event);
  }

  console.log(isBefore(new Date(events[2].eventDate), new Date(events[1].eventDate)));

  return events.map((event) => {
    if (isWithinInterval(new Date(event.eventDate), {start: today, end: new Date(addYears(today,1))})){
      return (
      <>
        <div className="event-container-default-nav"onClick={()=>handleClick(event)}>
          <div className="event-title-container">{event.title}</div>
          <div className="event-date-container">
            <p>
              {format(
                addMinutes(
                  new Date(event.eventDate),
                  new Date(event.eventDate).getTimezoneOffset()
                ),
                "p"
              )}{" "}
              {format(new Date(event.eventDate), "eeee")},{" "}
              {format(new Date(event.eventDate), "MMMM do")}{" "}
              {format(new Date(event.eventDate), "yyyy")}
            </p>
          </div>
          <div className="event-description-container">{event.description}</div>
        </div>
      </>
    );
    }
  });
}

export default NavBarEventsItem;
