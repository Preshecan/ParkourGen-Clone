import React, { Component } from 'react';
import '../ParallaxStyle.css'

const latestarticles = () =>{
    return (
	<div className="body">
		<section className="section section-light red"> 
			<h2 className="underline red">
				<span>Latest Articles</span>
			</h2>
			<div className='fullcontainer2 red'>
	  			<a className="imgoverlay" href="#">
					<div className="container">
						<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="Avatar" className="image"/>
						<div className="overlay red">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
													Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
													Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						 							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
						</div>
					<div className="redtitle">Title</div>
				</a>
			</div>
			<div className='fullcontainer2 red'>
	  			<a className="imgoverlay" href="#">
					<div className="container">
						<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="Avatar" className="image"/>
						<div className="overlay red">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
													Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
													Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						 							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
						</div>
					<div className="redtitle">Title</div>
				</a>
			</div>
		</section>
	</div>
    );
}

export default latestarticles;