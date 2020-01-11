import React, { FC } from 'react';
import './footer.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Footer: FC<any> = () => {
	return(
		<div className={'footerContainer'}>
			<div className={'mediaIcons'}>
				<div className={'followAlongText'}>
					<p>FOLLOW ALONG</p>
				</div>
				<div className={'mediaLinks'}>
			<a href={"https://www.facebook.com/duke.etentuk" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
			<p> </p>
			<a href={"https://twitter.com/etentukee" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
			<p> </p>
			<a href={"https://www.instagram.com/etentuk/" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
			</div>
			</div>
			<div className={'copyrights'}>
			</div>
		</div>
	)
};

export default Footer;
