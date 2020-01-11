import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from '../navLink/navLink';
import './header.styles.css';
import img from '/Users/admin/Desktop/salvation updated/src/Images/logo512.png';

const routes = ['Home', 'Products', 'About', 'Contact'];

const Header: FC<any> = () => {
	return(
		<div className={'navBarContainer'}>
			<div className={'logo'}>
				<img src={img} alt={'logo'}/>
			</div>
			{routes.map(route => (
				<NavLink key={route} route={route} />
			))}
		</div>
	)
};

export default withRouter(Header);
