import React from 'react';
import './SlideShowStyle.css'
import ReactDOM from "react-dom";


class SlideShow2 extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		};
		this.slideIndex = 1;
		
	}

	onMove = () => {
        console.log(this.slideIndex);
    }
	//showSlides(this.slideIndex);
	plusSlides = (n) => {
		this.showSlides(this.slideIndex += n);
	}

	// Thumbnail image controls
	currentSlide = (n) => {
		this.showSlides(this.slideIndex = n);
	}

	// Next/previous controls

	showSlides = (n) => {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		console.log(Array.from(slides));
		if (n > slides.length) {this.slideIndex = 1} 
		if (n < 1) {this.slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.slideIndex-1].style.display = "block"; 
		dots[this.slideIndex-1].className += " active";
	}

	

	render(){
		const {onRouteChange} = this.props;
		return(
			<div>
				<div className="slideshow-container">

				  <div className="mySlides fade">
				    <div className="numbertext">1 / 3</div>
				    <img src="img1.jpg" style={{width:'100%'}}/>
				    <div className="text">Caption Text</div>
				  </div>

				  <div className="mySlides fade">
				    <div className="numbertext">2 / 3</div>
				    <img src="img2.jpg" style={{width:'100%'}}/>
				    <div className="text">Caption Two</div>
				  </div>

				  <div className="mySlides fade">
				    <div className="numbertext">3 / 3</div>
				    <img src="img3.jpg" style={{width:'100%'}}/>
				    <div className="text">Caption Three</div>
				  </div>

				  <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
				  <a className="next" onClick="plusSlides(1)">&#10095;</a>
				</div>
			<br/>

				<div style={{textalign:'center'}}>
				  <span className="dot" onClick={this.currentSlide(1)}></span> 
				  <span className="dot" onClick={this.currentSlide(2)}></span> 
				  <span className="dot" onClick={this.currentSlide(3)}></span> 
				</div>
			</div>
		);
	}
}

export default SlideShow2;