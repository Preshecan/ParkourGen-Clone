import React, { Component } from 'react';
import '../ParallaxStyle.css'

const latestnews = () =>{
    return (
	<div className="body">
		<section className="section section-light two"> 	
			<h2 className="underline red">
				<span>Latest News</span>
			</h2>

			<div className='toprow'>			
			<div className='fullcontainer2'>
				<div className="container">
					<a className="imgoverlay" href="#">
						<div className="titlebg">
							<div className="greytitle transp">Title</div>
							<div className="greytitle subtitle transp">date</div>
						</div>
			  			<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
			  			<div className="overlay">My Name is John Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquam massa. 
			  									Nunc pellentesque, est ut facilisis semper, quam felis iaculis risus, ornare tincidunt dui nulla sit amet est. 
			  									Donec et metus et erat hendrerit pretium vitae sit amet ex. Proin dignissim dapibus sem, non porta leo tristique vitae. 
			  									Curabitur orci massa, accumsan eget turpis a, finibus auctor urna. 
			  									Suspendisse finibus auctor velit facilisis semper.
			  			</div> {/*make another container for only text to scroll down*/}
			  		</a>
  				</div>
  			</div>

			<div className='fullcontainer2'>
				<div className="container">
					<a className="imgoverlay" href="#">
						<div className="titlebg">
							<div className="greytitle transp">Title</div>
							<div className="greytitle subtitle transp">date</div>
						</div>
			  			<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
			  			<div className="overlay">My Name is John Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquam massa. 
			  									Nunc pellentesque, est ut facilisis semper, quam felis iaculis risus, ornare tincidunt dui nulla sit amet est. 
			  									Donec et metus et erat hendrerit pretium vitae sit amet ex. Proin dignissim dapibus sem, non porta leo tristique vitae. 
			  									Curabitur orci massa, accumsan eget turpis a, finibus auctor urna. 
			  									Suspendisse finibus auctor velit facilisis semper.
			  			</div> {/*make another container for only text to scroll down*/}
			  		</a>
	  			</div>
  			</div>
  		</div>

  		<div className='bottomrow'>
  			<div className='fullcontainer'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description">Description</div>
			</div>

			<div className='fullcontainer'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description">Description</div>
			</div>

			<div className='fullcontainer'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description">Description</div>
			</div>

			<div className='fullcontainer'>
	  			<a className="imgoverlay" href="#">
				<div className="container2">
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
					<div className="solidoverlay">
				  		<button className="btn">Button</button>
				 	</div>
				</div>
				<div className="darktitle">Title</div>
				</a>
				<div className="description">Description</div>
			</div>

  		</div>
	
	</section>
	</div>
    );
}

export default latestnews;