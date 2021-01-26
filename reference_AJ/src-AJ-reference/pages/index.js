import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Me from "./Me";
import MyPets from "./MyPets";
import Work from "./Work";
import Adoption from "./Adoption";


const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/MyPets">
          <MyPets user={user} />
        </Route>
        <Route path="/work">
          <Work user={user} />
        </Route>
        <Route path="/Adoption">
          <Adoption user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
