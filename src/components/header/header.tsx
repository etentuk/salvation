import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from '../navLink/navLink';
import './header.styles.css';
import img from '/Users/admin/Desktop/salvation updated/src/Images/logo512.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

const routes = ['Home', 'Products', 'About', 'Contact', 'Admin', 'Login'];

const Header: FC<any> = () => {
	return(
		<div className={'navBarContainer'}>
			<div className={'logo'}>
				<img src={img} alt={'logo'}/>
			</div>
			<div className={'routes'}>
			{routes.map(route => (
				<NavLink key={route} route={route} />
			))}
			<div className={'socials'}>
				<a href={"https://www.facebook.com/duke.etentuk" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
				<p> </p>
				<a href={"https://twitter.com/etentukee" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
				<p> </p>
				<a href={"https://www.instagram.com/etentuk/" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
			</div>
			</div>
		</div>
	)
};

export default withRouter(Header);
