import './App.css';
import Topbar from './navigation/Topbar';
import Bottombar from './navigation/Bottombar';
import Home from './navigation/Home';
import Activity from './navigation/Activity';
import KratzyWordtz from './navigation/KratzyWordtz';
import Login from './navigation/Login';
import Impressum from './navigation/Impressum';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <h2>Welcome to React Router Tutorial</h2>
        <Topbar />
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Activity} />
          <Route path='/about' component={KratzyWordtz} />
          <Route path='/login' component={Login} />
          <Route path='/impressum' component={Impressum} />
        </Switch>
        <Bottombar />
      </div>
    </Router>
  );
}

export default App;