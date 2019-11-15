import { Switch, Route } from "react-router-dom";
import React from "react";
import Login from '../page/Login';
import Manage from '../page/Manage';
import Main from '../page/Main';
import testUploadImage from '../page/testUploadImage';
import Register from '../page/Register';


export default () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/manage" component={Manage} />
    </Switch>
)