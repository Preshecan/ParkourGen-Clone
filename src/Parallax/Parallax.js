import React from 'react';
import GreyTitle from './Components/GreyTitle.js';
import LatestNews from './Components/LatestNews.js';
import SpotLights from './Components/SpotLights.js';
import LatestArticles from './Components/LatestArticles.js';
import SlideShowGit from 'react-slidez';
import './ParallaxStyle.css'


// window.addEventListener('resize', function(event){
//   // do stuff here
// });

class Parallax extends React.Component {


	render(){
		return(

			<div className="body">
				<div className="slideshow">
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
				</div>
				{/*<div className="pimg0">
					<div className="ptext">
					</div>
				</div>*/}

				<GreyTitle/>

				<div className="pimg2">
					<div className="ptext">
						<span className="border transp">
							Image2 Text
						</span>
					</div>
				</div>

				<LatestNews/>

				<div className="pimg3">
					<div className="ptext">
						<span className="border transp">
							Image3 Text
						</span>
					</div>
				</div>

				<SpotLights/>

				<LatestArticles/>

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
}

export default Parallax;