import { useContext } from "react";
import { EventContext } from "../../App";
import { format } from "date-fns";
import { addMinutes } from "date-fns";

function NavBarEventsItem() {
  const eventInfo = useContext(EventContext);
  const events = eventInfo.eventInfo[2];

  return events.map((event) => {
    return (
      <>
        <div className="event-container-default-nav">
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
            </p>
          </div>
          <div className="event-description-container">{event.description}</div>
        </div>
      </>
    );
  });
}

export default NavBarEventsItem;
