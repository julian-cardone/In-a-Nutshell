import { useEffect } from "react";
import EventCard from "./EventCard"
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events";



function EventsIndex() {
    // const events = useSelector(state => Object.values(state.events.all));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvents());
    }, [])
    debugger;
    return (
    <>
    {/* {events} */}
    </>
    )
}

export default EventsIndex;