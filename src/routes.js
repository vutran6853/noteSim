import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/dashboard';
import Wizard from './component/Wizard/wizard';

export default (
  <Switch>
    <Route exact path='/' component={ Dashboard } ></Route>
    <Route path='/wizard' component={ Wizard } ></Route>
  </Switch>
)