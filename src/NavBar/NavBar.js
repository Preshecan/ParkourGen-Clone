import React from 'react';
import './NavBarStyle.css'

const navbar = () =>{
    return (
	<div className="body">
		<ul id = "navbar">
		 	<li><a id = "one" className="activeBar" href="#home"><img src="https://parkour.uk/wp-content/uploads/2013/03/mini-logo-607x402.png" alt=""/></a></li>
			<li><a id = "two" href="#news">Classes</a></li>
			<li><a id = "three" href="#contact">Memberships</a></li>
			<li><a id = "four" href="#about">Certifications</a></li>
			<li><a id = "five" href="#about">London Gym</a></li>
			<li><a id = "six" href="#about">Services</a></li>
			<li><a id = "seven" href="#about">PKG</a></li>
		</ul>
	</div>
    );
}

export default navbar;