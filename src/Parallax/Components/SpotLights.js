import React, { Component } from 'react';
import '../ParallaxStyle.css'

const spotlight = () =>{
    return (
	<div className="body">
		<section className="section section-light dark"> 
			<h2 className="underline orange">
				<span>Spotlights</span>
			</h2>			
			<div className='fullcontainer dark'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="Avatar" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description dark">Description
					<button className="btn dark">Button</button>
				</div>
			</div>
			<div className='fullcontainer dark'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="Avatar" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description dark">Description
					<button className="btn dark">Button</button>
				</div>
			</div>
			<div className='fullcontainer dark'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="Avatar" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description dark">Description
					<button className="btn dark">Button</button>
				</div>
			</div>
			<div className='fullcontainer dark'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="Avatar" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description dark">Description
					<button className="btn dark">Button</button>
				</div>
			</div>
		</section>
	</div>
    );
}

export default spotlight;