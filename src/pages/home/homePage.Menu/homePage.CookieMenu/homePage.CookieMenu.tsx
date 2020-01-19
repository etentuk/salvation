import React, { FC } from 'react';
import './homePage.CookieMenu.styles.css';
import {Link} from 'react-router-dom';


const HomePageCookieMenu: FC = () => (
    <div className={'cookieMenu'}>
      <h1>Cookie</h1>
      <h2>Menu</h2>
      <span>*</span>
      <p>Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica
        Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica
      </p>
      <Link to={"/products"}>Menu</Link>
    </div>
);

export default HomePageCookieMenu;
