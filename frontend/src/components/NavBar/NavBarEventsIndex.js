import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import NavBarEventsItem from "./NavBarEventsItem";

function NavBarEventsIndex(){

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.all);

  useEffect(() => {
    dispatch(fetchEvents);
}, [dispatch])

  return(
  <NavBarEventsItem events={events}/>
  )
}

export default NavBarEventsIndex;