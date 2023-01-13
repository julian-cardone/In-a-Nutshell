import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventContext } from "../../App";
import { createTask } from "../../store/tasks";
import { updateEvent } from "../../store/events";

function CreateTask({ setEventsInd }) {
  const [adding, setAdding] = useState(false);
  const dispatch = useDispatch();

  // const tasks = useSelector(state => console.log(state));
  const event = useContext(EventContext);
  // console.log(event.eventInfo[0].id);

  // useEffect(()=>{

  // },[adding])

  const handleTask = () => {
    setAdding(true);
    // setEventsInd("something");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdding(false);
    const task = {
      eventId: event.eventInfo[0]._id,
      description: e.target[0].value,
      status: false,
    };
    dispatch(createTask(task));
    // const changedEvent = {
    //   task: event.eventInfo[0].tasks.push(task)
    // };

    setEventsInd("something crazy");
    // dispatch(updateEvent(changedEvent));
    // event.eventInfo[1]()
  };

  return (
    <div>
      {adding && (
        <>
          <div>
            <form className="task-input" onSubmit={(e) => handleSubmit(e)}>
              <input className="task-input-text sp1" type="text" name="name" />
              <input
                className="btn-reset h4 btnAddTask"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </>
      )}
      {!adding && (
        <>
          <div className="add-button-container-2">
            <button className="btn-reset btnTaskPlus h2" onClick={handleTask}>
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CreateTask;
