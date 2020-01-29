import React, { FC } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavLink from '../navLink/navLink';
import './header.styles.css';
// import img from '/Users/admin/Desktop/salvation updated/src/Images/logo512.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const routes = ['Home', 'Products', 'About', 'Contact'];

const Header: FC<any> = () => {
	return(
		<div className={'navBarContainer'}>
			<div className={'logo'}>
				{/*<img src={img} alt={'logo'}/>*/}
			</div>
			<div className={'routes'}>
			{routes.map(route => (
				<NavLink key={route} route={route} />
			))}
			<div className={'socials'}>
				<Link to={"/cart"}><FontAwesomeIcon icon={faShoppingCart} /></Link>
				<a href={"https://www.facebook.com/tarts.byavi/" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
				<p> </p>
				<a href={"https://twitter.com/mama_avex" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
				<p> </p>
				<a href={"https://www.instagram.com/tarts_by_avi/" } target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
			</div>
			</div>
		</div>
	)
};

export default withRouter(Header);
