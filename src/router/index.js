import { Switch, Route } from "react-router-dom";
import React from "react";
import Index from '../page/Index';
import Register from '../page/Register';
import Main from '../page/Main';


export default () => (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/main" component={Main} />
    </Switch>
)