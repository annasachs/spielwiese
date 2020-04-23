import React from 'react';
import './Topbar.css';

function Topbar() {
  return (

  	<div className="zone orange sticky">
	  	<ul className="header ">
	  		<li><a href="index.html"> Home </a></li>
	  		<li><a href="activity.html"> Simple-Activity </a></li>
	  		<li><a href="kratzywordtz.html"> Kratzy Wordtz </a></li>
	  		<li className="pushRight"><a href="login.html"> Login </a></li>
	  	</ul>
	</div>

  );
}

export default Topbar;