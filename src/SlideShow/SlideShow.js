import React, { Component } from 'react';
import './SlideShowStyle.css'

const slideshow = ({nextSlide, prevSlide, currentSlide, showSlides, image}) =>{
    return (

	<div className="body">
		<div className="slideshow-container">

		  {/*Full-width images with number and caption text */}
		  <div className="mySlides fade">
		    <div className="numbertext">1 / 3</div>
		    <img src={image} style={{width:'100%'}}/>
		    <div className="text">Caption Text</div>
		  </div>

		  {/*Next and previous buttons*/}
		  <a className="prev" onClick={prevSlide}>&#10094;</a>
		  <a className="next" onClick={nextSlide}>&#10095;</a>
		</div>
		<br/>

		{/*The dots/circles*/}
		<div style={{textalign:'center'}}>
		  <span className="dot" onClick={()=>currentSlide(1)}></span> 
		  <span className="dot" onClick={()=>currentSlide(2)}></span> 
		  <span className="dot" onClick={()=>currentSlide(3)}></span> 
		</div>
	</div>
    );
}

export default slideshow;

// ./img/stride.jpg
// ./img/flag.jpg
// ./img/backflip.jpg