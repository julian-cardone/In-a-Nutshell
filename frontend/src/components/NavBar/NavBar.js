import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./navbar.css";
import { useContext, useEffect, useState } from "react";
import { deleteEvent, fetchEvent, updateEvent } from "../../store/events";
import { tasks } from "./tasks";
import * as taskActions from "../../store/tasks";
import { EventContext } from "../../App";
import { format, subMinutes, addMinutes } from "date-fns";
import UpdateModal from "../UpdateModal/UpdateModal";
import logo from "../../assets/NSLogos/Logo.svg";
import NavBarEventsIndex from "./NavBarEventsIndex";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";

function NavBar({ setEventsInd, eventsInd }) {
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

  console.log(eTitle);

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

  const handleEvents = () => {
    eventInfo.eventInfo[1]("N/A");
    history.replace("/home");
  };

  return (
    <>
      {/* <h1>In A Nutshell</h1> */}
      {/* { getLinks() } */}

      <div className="nav" style={{ position: "relative" }}>
        <div className="nav-content-padding">
          <div className="meat">
            <div className="top-nav-bar-container">
              <div className="top-nav-bar">
                <div className="logo-nav" onClick={handleEvents}>
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
              <div className="border-nav-2"></div>
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
                  <TaskList setEventsInd={setEventsInd} eventsInd={eventsInd} />
                  <CreateTask
                    setEventsInd={setEventsInd}
                    eventsInd={eventsInd}
                  />
                  <div className="border-nav-2"></div>
                </div>
              </>
            )}

            {/* default nav bar, upcoming events */}
            {eTitle === "N/A" && (
              <>
                <div className="upcomingEvents-container">
                  <NavBarEventsIndex />
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
              </>
            )}

            {eTitle !== "N/A" && (
              <>
                <div className="eventDescription">
                  <div className="description-div h4">
                    <h3>NOTES</h3>
                  </div>
                  <div className="description-in-nav">
                    <input
                      type="textarea"
                      value={eTitle.note}
                      // onChange={(e) => {
                      //   let newEvent = {
                      //     ...eTitle,
                      //     note: e.target.value,
                      //   };
                      //   debugger
                      //   dispatch(updateEvent(newEvent));
                      // }}
                    ></input>
                  </div>
                </div>
              </>
            )}
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
        </div>
      </div>
    </>
  );
}

export default NavBar;
