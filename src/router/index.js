import { Switch, Route } from "react-router-dom";
import React from "react";
import Index from '../page/Index';


export default () => (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
)