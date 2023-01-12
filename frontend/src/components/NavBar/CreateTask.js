import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventContext } from "../../App";
import { createTask } from "../../store/tasks";

function CreateTask({ setEventsInd }) {
  const [adding, setAdding] = useState(false);
  const dispatch = useDispatch();

  // const tasks = useSelector(state => console.log(state));
  const event = useContext(EventContext);
  console.log(event);

  // useEffect(()=>{

  // },[adding])

  const handleTask = () => {
    setAdding(true);
    // setEventsInd("something");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdding(false);
    const task = e.target[0].value;
    dispatch(createTask(task));
  };

  return (
    <div>
    {adding && (
      <>
        <div>
          <form className="task-input"onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="name" />
            <input type="submit" value="Add Task" />
          </form>
        </div>
      </>
    )}
    {!adding && (
      <>
        <div className="add-button-container-2">
          <button onClick={handleTask}>
            +
          </button>
        </div>
      </>
    )}
    </div>
  );
}

export default CreateTask;
