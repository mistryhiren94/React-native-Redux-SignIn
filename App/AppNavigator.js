import React, { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// Logger with default options
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import BasicDetails from './Pages/BasicDetails';
import DisplayDetails from './Pages/DisplayDetails';

const store = createStore(
  allReducers,
  applyMiddleware(logger, thunk)
);

console.disableYellowBox = true;
export default class AppNavigator extends Component{
  render(){
    return(
      <Provider store= {store}>
        <Router>
          <Scene key="root">
            <Scene key="signIn" hideNavBar={true} component={SignIn} initial={true} />
            <Scene key="home" hideNavBar={true} component={Home} />
            <Scene key="basicDetails" title="Basic Details" component={BasicDetails} />
            <Scene key="displayDetails" title="Confirm Your Details" component={DisplayDetails} />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
