import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/tasks";

function CreateTask({ setEventsInd }) {
  const [adding, setAdding] = useState(false);
  const dispatch = useDispatch();

  // useEffect(()=>{

  // },[adding])

  const handleTask = () => {
    setAdding(true);
    // setEventsInd("something");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdding(false);
    const task = e.target.value;
    dispatch(createTask({ task }));
  };

  return (
    adding && (
      <>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" name="name" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    ),
    !adding && (
      <>
        <div className="add-button-container">
          <button onClick={() => handleTask()}>
            +
          </button>
        </div>
      </>
    )
  );
}

export default CreateTask;
