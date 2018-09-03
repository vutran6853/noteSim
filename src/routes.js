import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/dashboard';
import Wizard from './component/Wizard/wizard';
import Wizard2 from './component/Wizard/wizard2';
import Wizard3 from './component/Wizard/wizard3';



export default (
  <div>
    <Switch>
        <Route exact path='/' component={ Dashboard } ></Route>
        <Route path='/wizard' component={ Wizard } ></Route>
        <Route path='/wizard2/' component={ Wizard2 }></Route>
        <Route path='/wizard3/' component={ Wizard3 }></Route>

      </Switch>
  </div>
  
)