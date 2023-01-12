import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import NavBarEventsItem from "./NavBarEventsItem";

function NavBarEventsIndex() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchEvents);
  // }, [dispatch])

  return (
    <>
      <p className={`h3`}>Upcoming Events</p>
      <NavBarEventsItem />
    </>
  );
}

export default NavBarEventsIndex;
