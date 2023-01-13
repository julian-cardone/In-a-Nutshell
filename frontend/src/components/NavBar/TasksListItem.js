import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventContext } from "../../App";
import { fetchTask, fetchTasks } from "../../store/tasks";
import { deleteTask } from "../../store/tasks";
import { updateTask } from "../../store/tasks";

function TasksListItem({ setEventsInd, eventsInd }) {
  const event = useContext(EventContext);
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(fetchTasks())
  // },[dispatch])

  // const allTasks = useSelector(state => state.tasks.all)||[];

  const allTasks = event.eventInfo[3];

  const eventTasks = [];

  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].eventId === event.eventInfo[0]._id) {
      eventTasks.push(allTasks[i]);
    }
  }

  // const updateStatus = (task) =>{
  //   let newStatus = false;
  //   task.status? newStatus = false : newStatus = true;
  //   const updatedTask = {
  //     ...task,
  //     status: newStatus
  //   }
  //   dispatch(updateTask(updatedTask));
  //   setEventsInd("wow!")
  // }

  // const [currentTask, setCurrentTask] = useState({});

  // const deleteTask = (task) => {
  //   // const taskFetched = dispatch(fetchTask(task._id))
  //   // setCurrentTask(task);
  //   // setCurrentTask(task);
  //   // const taskId = e.target.dataset.task;
  //   console.log(task);
  //   debugger
  //   dispatch(deleteTask(task._id));
  //   // setEventsInd("something crazier!!");
  // }

  // console.log(eventTasks[0].description);
  return eventTasks.map((task) => {
    return (
      <>
        <li className="task-li">
          <div className="task-li-div">
            <div
              className="div-list-nav"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 76 76"
                    // xmlns="http://www.w3.org/2000/svg"
                    // version="1.1"
                    // baseProfile="full"
                    enable-background="new 0 0 76.00 76.00"
                  >
                    <path
                      fill="#6D8E59"
                      fill-opacity="1"
                      stroke-width="0.2"
                      stroke-linejoin="round"
                      d="M 26.3322,29.5391C 27.1239,12.9141 47.3114,22.4141 47.3114,22.4141C 48.8947,17.6641 54.0405,18.0599 54.0405,18.0599C 53.0417,19 54.8322,20.8307 54.8322,20.8307C 50.8739,20.8307 49.2905,23.6016 49.2905,23.6016C 65.1239,37.8516 51.6655,44.1849 51.6655,44.1849C 38.9989,39.4349 33.4572,35.0807 26.3322,29.5391 Z M 26.3322,31.5182C 34.2489,38.2474 39.7905,41.4141 50.0822,45.3724C 50.0822,45.3724 41.7697,61.9974 29.103,57.2474C 29.103,57.2474 28.5,60.1667 25.9364,58.4349C 23.75,57 25.9364,55.2682 25.9364,55.2682C 25.9364,55.2682 16.0405,48.9349 26.3322,31.5182 Z "
                    />
                  </svg>
                </div>
                <div id="task-title">
                  <h3>{task.description}</h3>
                </div>
              </div>
              <div>
                <div className="status-buttons">
                  {task.status && (
                    <input
                      type="checkbox"
                      checked="checked"
                      onChange={() => {
                        let newStatus = false;
                        task.status ? (newStatus = false) : (newStatus = true);
                        const updatedTask = {
                          ...task,
                          status: newStatus,
                        };
                        dispatch(updateTask(updatedTask));
                        setEventsInd("wow!");
                      }}
                    ></input>
                  )}
                  {!task.status && (
                    <input
                      type="checkbox"
                      onChange={() => {
                        let newStatus = false;
                        task.status ? (newStatus = false) : (newStatus = true);
                        const updatedTask = {
                          ...task,
                          status: newStatus,
                        };
                        // console.log(updatedTask);
                        dispatch(updateTask(updatedTask));
                        setEventsInd("wow!");
                      }}
                    ></input>
                  )}
                  {/* <div className="edit">Edit</div> */}
                  <div
                    className="delete h4"
                    onClick={() => {
                      dispatch(deleteTask(task._id));
                      setEventsInd("something cool");
                    }}
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  });
}

export default TasksListItem;
