import React, { FC } from 'react';
import './homePage.AboutUs.styles.css';
import AboutUsLeftSide from './HomePage.AboutUs.LeftSide/aboutUs.LeftSide';
import AboutUsRightSide from './HomePage.AboutUs.RightSide/homePage.AboutUs.RightSide';


const HomePageAboutUs: FC = () => (
  <div className={'homePageAboutUs'}>
    <div className={'aboutUs'}>
      <div className={'aboutUsLeftSide'}>
        <AboutUsLeftSide />
      </div>
      <div className={'aboutUsRightSide'}>
        <AboutUsRightSide />
      </div>
    </div>
  </div>
);

export default HomePageAboutUs;
