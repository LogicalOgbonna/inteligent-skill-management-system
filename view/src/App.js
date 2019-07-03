import React from "react";
// import { Route, Switch } from "react-router-dom";

import index from "./index.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Dashbaord from "./components/dashboard/dashboard";
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/" exact name="Home" Component={Landing} />
        <Route path="/login" exact name="Home" Component={Login} />
      </Switch> */}
      <Dashbaord />
    </div>
  );
}

export default App;
