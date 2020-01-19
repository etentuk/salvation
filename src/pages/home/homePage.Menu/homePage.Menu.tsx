import React, { FC } from 'react';
import './homePage.Menu.styles.css';
import HomePageMenuImages from './homePage.MenuImages/homePage.MenuImages';
import HomePageCookieMenu from './homePage.CookieMenu/homePage.CookieMenu';


const HomePageMenu: FC = () => (
  <div className={'homePageMenu'}>
    <div className={'cakeInfosContainer'}>
      <div className={'cakeInfos'}>
        <div className={'leftSideCookieMenu'}>
          <HomePageMenuImages />
        </div>
        <div className={'rightSideCookieMenu'}>
          <HomePageCookieMenu />
        </div>
      </div>
    </div>
  </div>
);

export default HomePageMenu;


