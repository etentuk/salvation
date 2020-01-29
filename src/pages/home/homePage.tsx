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
			<h2>WELCOME TO</h2>
			<h1>Tarts by avi</h1>
		</div>
			<CakeInfos />
			<HomeMadeSweets />
			<HomePageMenu/>
			<UniqueCreation />
			<HomePageAboutUs />
	</div>
);

export default HomePage;
