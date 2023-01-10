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

import { isBefore } from "date-fns";

export const EventContext = createContext(null);

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [eventsLoaded, setEventsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  const [eventsInd, setEventsInd] = useState();

  useEffect(()=>{
    dispatch(fetchEvents()).then(() => setEventsLoaded((true)));
  },[dispatch, eventsInd])

  const [currentEvent, setCurrentEvent] = useState(null);
  const events = useSelector((state) => state.events.all);

  //sorting the events by chronoligical order
  const sortEvents = (events) => {
    if (eventsLoaded){
    //base case
    if (events.length <= 1) return events

    let mid = Math.floor(events.length / 2);

    //recursive calls
    let left = sortEvents(events.slice(0,mid));
    let right = sortEvents(events.slice(mid));

    return sortHelper(left, right);
    }
  }

  const sortHelper = (left, right) => {
    let sortedArr = [];

    if (isBefore(
      new Date(left[0].eventDate),
      new Date(right[0].eventDate)
    )){
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }

    return [ ...sortedArr, ...left, ...right]

  }
//end of sort
const sortedEvents = sortEvents(events);
console.log(sortedEvents);

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
            {eventsLoaded && (
            <EventContext.Provider value={{eventInfo: [currentEvent, setCurrentEvent, sortedEvents]}}>
              <Route exact path="/events" > 
              <NavBar setEventsInd={setEventsInd}/>
              <EventsIndex setEventsInd={setEventsInd}/>
              </Route>
              <Route exact path="/events/new" component={NewEventForm} />
              <Route exact path="/home">
                {loggedIn && <NavBar setEventsInd={setEventsInd}/>}
                {loggedIn && <Calendar setEventsInd={setEventsInd}/>}
              </Route>
              <Route exact path= "/devteam" component={DevTeam}></Route>
            </EventContext.Provider>
            )}
            {/* {!loggedIn && <Redirect to="/"></Redirect>} */}
          </Switch>
        </>
      )}
    </>
  );
}

// demo-user@appacademy.io

export default App;
