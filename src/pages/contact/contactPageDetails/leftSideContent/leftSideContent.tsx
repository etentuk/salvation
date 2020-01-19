import React, { FC } from 'react';
import './leftSideContent.styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

const LeftSideContent: FC = () => (
  <>
    {/*<div className={'leftSideContentContainer'}>*/}
    <div className={'leftSideContent'}>
      <h1>CUSTOM ORDERS</h1>
      <p>We offer custom, hand-painted, decorative sugar cookies to the Indianapolis area. Give us a call or fill out the form to let us know what you’re looking for, and we’ll do our best to make it happen! Cookies are made on a completely custom basis, and we always want to chat with you first to make sure your order is perfect.
      </p>
      <p id={'submitInquiries'}>Please submit all inquiries through the form to the right.</p>
      <h1>LEAD TIME & PRICING</h1>
      <p>We usually need two weeks notice to make sure we reserve time on our calendar to complete your order – sometimes more, sometimes less. Either way, it’s never too soon to get in touch!</p>
      <p>Custom cookies usually range from $3-6 each, depending on intricacy of design, and pricing for other cookies can be found on our menu. We’re happy to work with you on options to fit your budget or your wildest dreams.</p>
      <h1>PICKUP & DELIVERY</h1>
      <p>We usually need two weeks notice to make sure we reserve time on our calendar to complete your order – sometimes more, sometimes less. Either way, it’s never too soon to get in touch!</p>
      <h1>LOCATION</h1>
      <p>We usually need two weeks notice to make sure we reserve time on our calendar to complete your order – sometimes more, sometimes less. Either way, it’s never too soon to get in touch!</p>
      <h1>FOLLOW US</h1>
      <div className={'socialsContactPage'}>
        <a href={"https://www.facebook.com/duke.etentuk" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size={'2x'}/></a>
        <p> </p>
        <a href={"https://twitter.com/etentukee" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size={'2x'}/></a>
        <p> </p>
        <a href={"https://www.instagram.com/etentuk/" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size={'2x'}/></a>
      </div>
    </div>
    {/*</div>*/}
  </>
);

export default LeftSideContent;
