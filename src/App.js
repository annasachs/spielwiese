import React from 'react';
import './App.css';
import Topbar from './Navigation/Topbar';
import Bottombar from './Navigation/Bottombar';
import Home from './Navigation/Home';

const App = () => {
  return (
  	<div>
  		<Topbar />
      <Home />
      <Bottombar />
    </div>
  );
}

export default App;
