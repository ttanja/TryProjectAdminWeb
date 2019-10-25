import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from './Register';

export default () => (
  <Switch>
    <Route exact path="/Register" component={Register} />

    <Route exact path="/*" component={NotFoundPage} />
    <Route exact path="/badSearch" component={NotFoundPage} />
  </Switch>
);