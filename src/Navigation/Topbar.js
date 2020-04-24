import React from 'react';
import './Topbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../pics/logo/logo_small_icon_only.png';

function Topbar(navigation) {
	return (

		<div className="zone orange sticky">
			<ul className="header ">
				<li>
					<Link to={'/'} className="nav">
						<img src={logo} className="logo" alt="Logo"/>
					</Link>
				</li>
				<li><Link to={'/activity'} className="nav">Simple-Activity</Link></li>
				<li><Link to={'/kratzywordtz'} className="nav">Kratzy Wordtz</Link></li>
	  		{/* <li className="pushRight"><a href="login.html"> Login </a></li>  */}
			</ul>
		</div>

	);
}

export default Topbar;