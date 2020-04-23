import React from 'react';
import './Topbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Topbar(navigation) {
	return (

		<div className="zone orange sticky">
			<ul className="header ">
				<li><Link to={'/'}> Home </Link></li>
				<li><Link to={'/activity'}>Simple-Activity</Link></li>
				<li><Link to={'/kratzywordtz'}>Kratzy Wordtz</Link></li>
				{/* <li><a href="activity"> Simple-Activity </a></li> */}
	  		{/* <li><a href="kratzywordtz"> Kratzy Wordtz </a></li>
	  		<li className="pushRight"><a href="login.html"> Login </a></li> */}
			</ul>
		</div>

	);
}

export default Topbar;