import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Bottombar from './Bottombar';
import Card from './Card';
import Button from './Button';
import Home from './Home';

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
          {/* <Route path='/login' component={Login} />
          <Route path='/impressum' component={Impressum} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;