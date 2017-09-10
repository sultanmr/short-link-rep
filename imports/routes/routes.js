import { Meteor } from 'meteor/meteor';
import  React  from 'react';
import  ReactDOM from 'react-dom';


import {
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Signup from '../ui/Signup';
import Links from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Footer from '../ui/Footer';

const history = createBrowserHistory();
window.browserHistory = history;



export const onAuthChange = (isAuthenticated) => {
  const pathname = history.location.pathname;

  console.log ('isAuthenticated', isAuthenticated);
  console.log ('pathname', pathname);
};


export const routes = (

      <Router history={history}>  
    <div>
    {/* <ul>
        <li><Link to="/signup">signup</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/links">links</Link></li>
      </ul>

      <hr/> */}
      <Switch>
        <Route exact path="/" component={Links}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/links" component={Links}/>
        <Route path="/login" component={Login}/>
        <Route component={NotFound}/>
      </Switch>
      
      <Route path="*" component={Footer}/>
    </div>
  </Router>
);


