import React, { FC } from 'react';
import Slider from 'react-slick';


const sliderSettings = {
	pauseOnHover: false,
	arrows: true,
	adaptiveHeight: true,
	pauseOnDotsHover: true,
	infinite: true,
	speed: 500,
	autoplay: true,
	swipe: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
};

const HomePage: FC = () => (
	<div>
		<Slider {...sliderSettings}>
			<div><h3>Products</h3></div>
			<div><h3>Newsletter</h3></div>
		</Slider>
	</div>
);

export default HomePage;
