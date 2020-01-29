import React, { FC } from 'react';
import './leftSide.styles.css';
import {Link} from 'react-router-dom';

const LeftSideCakeInfo: FC = () => (
  <div className={'cakeDescription'}>
    <h1>Custom</h1>
    <h2>COOKIES</h2>
    <span>*</span>
    <p>Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica
      Exorcizamus te, omnis immundus spiritus, omnis satanica potestas, omnis incursio infernalis adversarii, omnis legio, omnis congregatio et secta diabolica
    </p>
    <Link to={"/cakes"}>Order Now</Link>
  </div>
);

export default LeftSideCakeInfo;
