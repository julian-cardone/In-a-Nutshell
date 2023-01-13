import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";
import NavBarEventsItem from "./NavBarEventsItem";

function NavBarEventsIndex({ setEventsInd, setNewNote }) {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchEvents);
  // }, [dispatch])

  return (
    <>
      <h2 className={`upcomingHeader`}>Upcoming Events</h2>
      <NavBarEventsItem setEventsInd={setEventsInd}setNewNote={setNewNote}/>
    </>
  );
}

export default NavBarEventsIndex;
