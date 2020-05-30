import React, { Component } from 'react';
import { Header} from './components';
import World from './features/world';
import ByCountry from './features/byCountry';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="App d-flex flex-column">
         <Header />
          <Switch>
           
              <Route path="/world" component={World}/>
              <Route path="/country" component={ByCountry}/>
              <Redirect to="/world" />
            
         </Switch>
      </div>
      </Router>
    )
  }
}
