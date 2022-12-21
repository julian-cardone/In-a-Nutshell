import { useEffect, useState } from "react";
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

import { getCurrentUser } from "./store/session";
import Calendar from "./components/Calendar";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setLoaded(true));
  }, [dispatch]);

  const loggedIn = useSelector((state)=>(!!state.session.user))
  return (
    <>
    {!loggedIn && <Redirect to="/" />}
    {loaded && (
      <>
        <Switch>
          <AuthRoute exact path="/" component={SplashPage}/>
          <AuthRoute exact path="/login" component={LoginForm} />
          <AuthRoute exact path="/signup" component={SignupForm} />
          <Route exact path= "/events" component={EventsIndex} />
          <Route exact path= "/events/new" component={NewEventForm} />
          <Route exact path="/home">
              {loggedIn && <Calendar />}
              {loggedIn && <NavBar />}
          </Route>
          {/* {!loggedIn && <Redirect to="/"></Redirect>} */}
        </Switch>
      </>
    )}
      </>
  );
}

// demo-user@appacademy.io

export default App;
