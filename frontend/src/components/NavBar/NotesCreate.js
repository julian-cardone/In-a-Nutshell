import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Dispatch } from "react";
import { fetchEvent } from "../../store/events";
import { updateEvent } from "../../store/events";
import "./notes.css";

function NotesCreate({ eTitle }){

  const [newEvent, setNewEvent] = useState(eTitle);
  // const fetchedEvent = useSelector((state) => state.events.one) || "";
  const [newNote, setNewNote] = useState(eTitle.note);

  const dispatch = useDispatch();

  //things i learned during this struggle:
  //1. use event handlers in the onchange and onclick attributes (outside functions)
  //2. Context loads in after useState, so if i wanted to use context, i had to pass it down as a prop first (after it loaded)
  //3. use state --> configuring the store is important
  //4. useState to configure editable input boxes
  //5. useState is asychronous

  //can do this:
  // useEffect(() => {
  //   // dispatch(fetchEvents());
  //   dispatch(fetchEvent(eTitle._id));
  // }, [dispatch, eTitle]);

  const handleSubmit = () => {
    dispatch(updateEvent(newEvent));
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNewNote(newValue);
    setNewEvent({
      id: eTitle._id,
      title: eTitle.title,
      description: eTitle.description,
      nyTime: eTitle.eventDate,
      authorId: eTitle.authorId,
      note: newNote,
    });
  };

return (
<>
  <div className="description-in-nav">
  <input
  className="note-input"
    type="textarea"
    value={newNote}
    onChange={handleChange}
  ></input>
  <button className="note-button"onClick={handleSubmit}>Save</button>
</div>
</>
)

}

export default NotesCreate;