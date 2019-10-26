import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from '../page/Login';
import Register from '../page/Register';
import Main from '../page/Main';


export default () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/main" component={Main} />
    </Switch>
)