import React, { Component } from 'react';
import Parallax from './Parallax/Parallax.js';
import Footer from './Footer/Footer.js';
import NavBar from './NavBar/NavBar.js';
// import SlideShow2 from './SlideShow/example.js';
import SlideShowGit from 'react-slidez';
import './App.css';

class App extends Component {
	 constructor(){
		super();
		this.state = {
		slideIndex: 1
		} 
  	}
  	// var slideIndex = 1;

  	// Next/previous controls
	nextSlide = () => {
		const newIndex = this.state.slideIndex + 1;
		this.setState({slideIndex: newIndex});
	}

	prevSlide = () => {
		const newIndex = this.state.slideIndex - 1;
		this.setState({slideIndex: newIndex});
	}

	// Thumbnail image controls
	currentSlide = (n) => {
		this.setState({slideIndex: n})
	}

	showSlides = () => {
		let i;
		let slides = document.querySelectorAll(".mySlides");
		let dots = document.querySelectorAll(".dot");
		let slideIndex = this.state.slideIndex;
		console.log(dots);
		if (slideIndex > 3) {this.setState({slideIndex: 1})} 
		if (slideIndex < 1) {this.setState({slideIndex: 3})}
		for (i = 0; i <= 3; i++) {
		  slides[i].style.display = "none"; 
		}
		for (i = 0; i <= 3; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[this.state.slideIndex].style.display = "block"; 
		dots[this.state.slideIndex].className += " active";
	}


	render() {
	    return (
	      <div className="App">
	    	<NavBar/>
	    	{/*<SlideShow2/>*/}
	    	{/*<SlideShow nextSlide={this.nextSlide} prevSlide={this.prevSlide} currentSlide={this.currentSlide} showSlides={this.showSlides} />*/}
	    	<SlideShowGit
			  showIndex
			  showArrows
			  autoplay
			  enableKeyboard
			  slideInterval={3000}
			  defaultIndex={0}
			  slides={['https://c1.staticflickr.com/4/3097/2914309719_c1afee42fd_b.jpg', 'https://static1.squarespace.com/static/55257681e4b076b7fbbd22f5/573a82525559865c11aa6f1d/573a8254b654f91cddad59ee/1463452246944/DSC04730.jpg' , 'http://backtostreet.altervista.org/wp-content/uploads/2017/02/freerunning-header-e1486907811907.jpg']}
			  effect={'fade'}
			  height={'600px'}
			  width={'100%'}
			/>
	        <Parallax/>
	        <Footer/>
	      </div>
	    );
	}
}

export default App;
