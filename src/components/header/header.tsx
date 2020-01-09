import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import NavLink from '../navLink/navLink';

const routes = ['Home', 'Products', 'About', 'Contact', 'Admin', 'Login'];

const Header: FC<any> = () => {
	return(
		<div>
			{routes.map(route => (
				<NavLink key={route} route={route} />
			))}
		</div>
	)
};

export default withRouter(Header);
