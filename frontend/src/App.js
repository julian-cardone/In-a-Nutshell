import { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import NavBar from "./components/NavBar/NavBar";

import MainPage from "./components/MainPage/MainPage";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";
import SplashPage from "./components/SplashPage";
import EventsIndex from "./components/EventsIndex";
import NewEventForm from "./components/NewEventForm";
import DevTeam from "./components/DevTeam";

import { getCurrentUser } from "./store/session";
import Calendar from "./components/Calendar";
import { fetchEvents } from "./store/events";

export const EventContext = createContext(null);

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);
  const [currentEvent, setCurrentEvent] = useState(null);

  const [eventsInd, setEventsInd] = useState();

  useEffect(()=>{
    dispatch(fetchEvents())
  },[dispatch, eventsInd])

  const loggedIn = useSelector((state) => !!state.session.user);
  return (
    <>

      {!loggedIn && <Redirect to="/" />}
      {loaded && (
        <>
          <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <AuthRoute exact path="/login" component={LoginForm} />
            <AuthRoute exact path="/signup" component={SignupForm} />
            <EventContext.Provider value={{eventInfo: [currentEvent, setCurrentEvent]}}>
              <Route exact path="/events" component={EventsIndex} />
              <Route exact path="/events/new" component={NewEventForm} />
              <Route exact path="/home">
                {loggedIn && <Calendar setEventsInd={setEventsInd}/>}
                {loggedIn && <NavBar setEventsInd={setEventsInd}/>}
              </Route>
              <Route exact path= "/devteam" component={DevTeam}></Route>
            </EventContext.Provider>
            {/* {!loggedIn && <Redirect to="/"></Redirect>} */}
          </Switch>
        </>
      )}
    </>
  );
}

// demo-user@appacademy.io

export default App;
