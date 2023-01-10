import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import { deleteEvent, fetchEvent } from "../../store/events";
import { tasks } from "./tasks";
import * as taskActions from "../../store/tasks";
import { EventContext } from "../../App";
import { format, subMinutes, addMinutes } from "date-fns";
import UpdateModal from "../UpdateModal/UpdateModal";
import logo from "../../assets/NSLogos/Logo.svg";

function NavBar({ setEventsInd }) {
  // const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  // const [title, setTitle] = useState("");
  const username = useSelector((state) => state.session.user.username);

  const task = useSelector((state) => {
    return state.tasks;
  });

  const eventInfo = useContext(EventContext);
  // console.log(eventInfo.eventInfo[0].eventDate);
  const eTitle = eventInfo.eventInfo[0] || "N/A";
  const eArray = eventInfo.eventInfo[0] || [];

  // useEffect(() => {
  //   dispatch(taskActions.createTask());
  // });

  const logoutUser = (e) => {
    e.preventDefault();

    history.replace({ pathname: "/", state: { isActive: true } });
    dispatch(logout());
  };

  const handleDelete = () => {
    dispatch(deleteEvent(eventInfo.eventInfo[0]._id));
    setEventsInd(null);
    eventInfo.eventInfo[1](null);
  };
  setEventsInd("");

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {/* <h1>In A Nutshell</h1> */}
      {/* { getLinks() } */}

      <div className="nav" style={{ position: "relative" }}>
        <div className="nav-content-padding">
          <div className="meat">
            <div className="top-nav-bar">
              <div className="logo-nav">
                <img className="logo-nav" src={logo} alt="" />
              </div>
              <div className="profile-options">
                <p className={`p1`}>{username}</p>
                {/* <button onClick={logoutUser} className="btn navButton">
            Logout
          </button> */}
                <p className="logout-btn-nav" onClick={logoutUser}>
                  Logout
                </p>
              </div>
            </div>

            {eTitle !== "N/A" && (
              <>
                <div className="date-nav-bar">
                  <p>
                    {format(
                      addMinutes(
                        new Date(eventInfo.eventInfo[0].eventDate),
                        new Date(
                          eventInfo.eventInfo[0].eventDate
                        ).getTimezoneOffset()
                      ),
                      "p"
                    )}
                    {/* {new Date(eventInfo.eventInfo[0].eventDate).getTimezoneOffset()} */}
                  </p>
                  <p>
                    {format(new Date(eventInfo.eventInfo[0].eventDate), "eeee")}
                    ,{" "}
                    {format(
                      new Date(eventInfo.eventInfo[0].eventDate),
                      "MMMM do"
                    )}{" "}
                  </p>
                </div>
                <div className="events-title-nav">
                  <p className="EVENT h4">EVENT</p>

                  <div className="title-time">
                    <p className="eventHeader h3">{eTitle.title}</p>
                  </div>

                  {/* <h2>{format(new Date(eTitle.eventDate), "eeee")},{" "}
          {format(new Date(eTitle.eventDate), "MMMM do")}</h2> */}
                </div>
                <div className="eventDescription">
                  <div className="description-div h4">
                    {eTitle !== "N/A" && <>DESCRIPTION</>}
                  </div>
                  <div className="description-in-nav">
                    <p>{eTitle.description}</p>
                  </div>
                </div>
              </>
            )}

            {eTitle !== "N/A" && (
              <>
                <div className="border-nav"></div>
                <div className="tasks-nav">
                  <div className="task-header h4">
                    <h3>TASKS</h3>
                    <h3>STATUS</h3>
                  </div>
                </div>

                <div className="tasks">
                  <ul style={{ marginTop: "10px" }}>
                    {tasks.map((task) => {
                      return (
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
                                  <h3>{task.title}</h3>
                                </div>
                              </div>
                              <div>
                                <div className="status-buttons">
                                  <input type="checkbox"></input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
            <div className="border-nav-2"></div>

            {/* default nav bar, upcoming events */}
            {eTitle === "N/A" && (
              <>
                <div>test</div>
              </>
            )}

            <div className="eventDescription">
              <div className="description-div h4">
                {eTitle !== "N/A" && <h3>NOTES</h3>}
              </div>
              <div className="description-in-nav">
                <p>{eTitle.description}</p>
              </div>
            </div>
          </div>

          {showModal && (
            <UpdateModal
              event={eTitle}
              setEventsInd={setEventsInd}
              showModal={showModal}
              setShowModal={setShowModal}
              onClose={() => setShowModal(false)}
            />
          )}

            <div>
          <div className="btnContainer">
            <div className="links-nav">
              <div className="nav-buttons-left">
                {/* <Link to={"/events/new"}>Make an Event</Link> */}
                {eTitle !== "N/A" && (
                  <span className="updateButton p4" onClick={handleModal}>
                    Update Event
                  </span>
                )}
                {eTitle !== "N/A" && (
                  <span className="deleteButton p4" onClick={handleDelete}>
                    Delete Event
                  </span>
                )}
              </div>
              {eTitle !== "N/A" && (
                <Link to={"/events"} className="eventsLink h4">
                  All Events <span>&#10140;</span>
                </Link>
              )}
            </div>
          </div>
          <div className="teamLink">
            {eTitle === "N/A" && (
              <Link to={"/events"} className="devteamLink h4">
                All Events
              </Link>
            )}
            <Link to={"/devteam"} className="devteamLink p4">
              Meet the Team
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
