import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from '../Login'
import Register from '../RegistrationForm'
export default () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
     )