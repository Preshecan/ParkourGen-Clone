import React from 'react';
import './ParallaxStyle.css'

// window.addEventListener('resize', function(event){
//   // do stuff here
// });

const parallax = () =>{
    return (

	<div className="body">
		<div className="pimg0">
			<div className="ptext">
				{/*} <span className="border">
					Parallax Website
				 </span>*/}
			</div>
		</div>

		<section className="section section-light skrink"> 
			<div className='fullcontainergrey'>
	  			<a className="imgoverlay" href="#">
				<div className="container">
					<div className="greytitle">Title</div>
					<div className="greytitle subtitle">subtitle</div>
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
				</div>
				</a>
			</div>

			<div className='fullcontainergrey'>
	  			<a className="imgoverlay" href="#">
				<div className="container">
					<div className="greytitle">Title</div>
					<div className="greytitle subtitle">subtitle</div>
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
				</div>
				</a>
			</div>

			<div className='fullcontainergrey'>
	  			<a className="imgoverlay" href="#">
				<div className="container">
					<div className="greytitle">Title</div>
					<div className="greytitle subtitle">subtitle</div>
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
				</div>
				</a>
			</div>

			<div className='fullcontainergrey'>
	  			<a className="imgoverlay" href="#">
				<div className="container">
					<div className="greytitle">Title</div>
					<div className="greytitle subtitle">subtitle</div>
					<img src="https://c1.staticflickr.com/1/136/366986172_6d6d230482_z.jpg?zz=1" alt="" className="image"/>
				</div>
				</a>
			</div>
		</section>

		<div className="pimg2">
			<div className="ptext">
				<span className="border transp">
					Image2 Text
				</span>
			</div>
		</div>

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

		<div className="pimg3">
			<div className="ptext">
				<span className="border transp">
					Image3 Text
				</span>
			</div>
		</div>

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

		<div className="pimg1">
			<div className="ptext">
				<span className="border">
					Parkour Website
				</span>
			</div>
		</div>
	</div>
    );
}

export default parallax;