// import "./App.css";
import React, { useEffect, useState, useMemo } from "react";
import "normalize.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SignIn from "./components/SignIn";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      {/* <SignIn /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
