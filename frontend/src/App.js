import React from "react";
import { Route, Switch } from "react-router-dom";
import Calendar from "./components/Calendar";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Hello from Squirrels</h1>
        </Route>
        <Route exact path="/home">
          <Calendar />
        </Route>
      </Switch>
    </>
  );
}

export default App;
