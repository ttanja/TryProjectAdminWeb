import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from '../page/Login';
import Manage from '../page/Manage';
import Main from '../page/Main';


export default () => (
    <Switch>
      <Route exact path="/" component={Manage} />
      {/* <Route exact path="/main" component={Main} /> */}
    </Switch>
)