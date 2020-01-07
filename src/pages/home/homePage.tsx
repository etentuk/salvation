import React, { FC } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';


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
			<div>
				<h3>Products</h3>
				<Link to={"/products"}>Order Now</Link>
			</div>

			<div>
				<h3>Newsletter</h3>
			</div>

			<div>
				<h3>About</h3>
				<Link to={"/about"}>about</Link>

			</div>
		</Slider>
		<div>
			<h3>Customer Reviews</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>


	</div>
);

export default HomePage;
