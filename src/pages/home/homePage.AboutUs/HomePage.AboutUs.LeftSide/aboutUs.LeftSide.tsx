import React, { FC } from 'react';
import './aboutUs.LeftSide.styles.css';
import {Link} from 'react-router-dom';

const AboutUsLeftSide: FC = () => (
  <div className={'AboutUs'}>
    <h1>The Bakers</h1>
    <h2>OUR STORY</h2>
    <span>*</span>
    <p>Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica
      Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica
    </p>
    <Link to={"/About"}>About Us</Link>
  </div>
);

export default AboutUsLeftSide;
