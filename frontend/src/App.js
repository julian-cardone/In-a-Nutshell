import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { AuthRoute, ProtectedRoute } from "./components/Routes/Routes";
import NavBar from "./components/NavBar/NavBar";

import MainPage from "./components/MainPage/MainPage";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";
import SplashPage from "./components/SplashPage";

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
    loaded && (
      <>
        <Switch>
          {/* <AuthRoute exact path="/" component={MainPage} /> */}
          <AuthRoute exact path="/" component={SplashPage}/>
            {/* <SplashPage /> */}
          {/* </AuthRoute> */}
          <AuthRoute exact path="/login" component={LoginForm} />
          <AuthRoute exact path="/signup" component={SignupForm} />
          {/* <ProtectedRoute exact path="/home"component={Calendar}/> */}
          <Route exact path="/home">
              {loggedIn && <Calendar />}
              {loggedIn && <NavBar />}
          </Route>
          {/* <ProtectedRoute exact path="/home"component={NavBar}/> */}
        </Switch>
      </>
    )
  );
}

// demo-user@appacademy.io

export default App;
