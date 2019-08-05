import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App/App";
import Home from "./Components/Home";
import Error404 from "./Components/Error404";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Notes from "./Components/Notes/Notes";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/notes" component={Notes} exact />
      <Route path="/notes/:noteId" component={Notes} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
