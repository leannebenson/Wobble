
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home.js";
// import Profile from "./Profile";
import NotFound from "./NotFound.js";
// import Register from "./Register.js";
// import MessagesList from "./components/MessagesList";
//import UserProfileSettings from "./components/UserProfileSettings";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Register} /> */}
        {/* <Route exact path="/profiles/:username" component={Profile} />
        <Route path="/messagefeed" component={MessagesList} /> */}
        {/* <Route path="/settings/profile" component={UserProfileSettings} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
