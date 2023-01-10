import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import NavBarEventsItem from "./NavBarEventsItem";

function NavBarEventsIndex(){

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchEvents);
// }, [dispatch])

  return(
    <>
    <h1>Upcoming Events</h1>
    <NavBarEventsItem/>
    </>
  )
}

export default NavBarEventsIndex;