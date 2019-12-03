import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landingpage from './Landingpage';
import Resume from './Resume';




const Main  = () => (
   <Switch>
     <Route exact path="/" component={Landingpage}/>
     <Route path="/resume" component={Resume}/>
   </Switch>
)

export default Main;
