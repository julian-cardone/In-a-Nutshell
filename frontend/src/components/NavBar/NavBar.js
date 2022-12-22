import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./navbar.css";
import { useEffect, useState } from "react";
import { fetchEvent } from "../../store/events";
import { tasks } from "./tasks";
import * as taskActions from "../../store/tasks"

function NavBar() {
  // const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");

  const task = useSelector((state) => {
    debugger
    return state.tasks
  })


  useEffect(() => {
    dispatch(taskActions.createTask())
  })

  const logoutUser = (e) => {
    e.preventDefault();

    history.replace({ pathname: "/", state: { isActive: true } });
    dispatch(logout());
  };


  return (
    <>
      {/* <h1>In A Nutshell</h1> */}
      {/* { getLinks() } */}
      <div className="nav">
        <div className="links-nav">
          <Link to={"/events"}>All Events</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/events/new"}>Make an Event</Link>
        </div>
        <button onClick={logoutUser}>Logout</button>
        <div className="task-header">
          <h2 style={{marginLeft: "30px"}}>Tasks</h2>
          <h2 style={{marginRight: "20px"}}>Status</h2>
        </div>
        <div className="tasks">
          <ul style={{ marginTop: "10px" }}>
            {tasks.map((task) => {
              return (
                <li>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
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
                          <h2>{task.title}</h2>
                        </div>
                      </div>
                      <div>
                        <div className="status-buttons">
                          <input
                            type="checkbox"
                            style={{ marginRight: "35px" }}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="note-pad">
          <h2 style={{ display: "flex", justifyContent: "center" }}>
            Make a Note!
          </h2>
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <textarea
            style={{ height: "200px", width: "300px" }}
          ></textarea>
        </div>
            <button type="submit">Add Note</button>
      </div>
    </>
  );
}

export default NavBar;
