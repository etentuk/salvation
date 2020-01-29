import React, { FC } from 'react';
import './homePage.styles.css';
import CakeInfos from './cakeInfos/cakeInfos';
import HomePageMenu from './homePage.Menu/homePage.Menu';
import HomeMadeSweets from './homeMadeSweets/homeMadeSweets';
import UniqueCreation from './homePage.UniqueCreation/homePage.UniqueCreation';
import HomePageAboutUs from './homePage.AboutUs/homePage.AboutUs';

const HomePage: FC = () => (
	<div className={'homePageContainer'}>
		<div className={'homePageImageText'}>
			<h1>Welcome</h1>
			<h2>Website Name</h2>
			<h3>Quote</h3>
		</div>
			<CakeInfos />
			<HomeMadeSweets />
			<HomePageMenu />
			<UniqueCreation />
			<HomePageAboutUs />
	</div>
);

export default HomePage;
