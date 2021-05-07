import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import productManagementContainer from "../auth/productManagement";
const RootContainer = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/productManagement" component={productManagementContainer} />
          <Redirect from="/" exact to="/productManagement" />
          <Route exact path="*" component={productManagementContainer} />
        </Switch>
    </Router>
  );
};

export default RootContainer;
