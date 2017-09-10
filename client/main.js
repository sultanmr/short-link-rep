import { Meteor } from 'meteor/meteor';
import  React  from 'react';
import  ReactDOM from 'react-dom';
import {Session} from 'meteor/session';
import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration';


Tracker.autorun(()=> {
  const isAuthenticated = !!Meteor.userId();
  const auth = onAuthChange;
  auth(isAuthenticated);
});


Meteor.startup (() => {
  Session.set('showVisible', true);
    ReactDOM.render(routes, document.getElementById("app"));
});

