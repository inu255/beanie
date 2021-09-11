// import "./App.css";
import React, { useEffect, useState, useMemo } from "react";
// import "normalize.css";

import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div className="App">
      <SignIn />
      {/* <ThemeProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <Router>
            {visibility ? <Bar /> : ""}
            <SnackbarComponent />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/code" component={ConfirmRegistration} />
              <Route path="/reset" component={ResetPass} />
              <Route path="/confirm" component={ConfirmPass} />
              <Route path="/wellcome" component={Wellcome} />
              <Route path="/profile" component={Profile} />
              <Route path="/editprofile" component={EditProfile} />
              <Route path="/settings" component={Settings} />
              <Route path="/contact" component={Support} />
              <Route path="/device-:id" component={Device} />
              <Route path="/add" component={AddDevice} />
              <Route path="/confirm-dev" component={ConfirmDevice} />
              <Route path="/edit-dev" component={EditDevice} />
              <Route path="/slave" component={SlaveSettings} />
              <Route path="/night" component={NightSettings} />
              <Route path="/notifications" component={Notifications} />
            </Switch>
            {bottomVisibility ? <Tabs /> : ""}
          </Router>
        </AuthContext.Provider>
      </ThemeProvider> */}
    </div>
  );
};

export default App;
