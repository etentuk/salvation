import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
	component: any;
	condition: any;
	redirectRoute: string;
	path: string;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, condition, path, redirectRoute, ...rest }): any => (
	<Route
		{...rest}
		render={(props) => {
			return condition ?  <Component {...props} /> : <Redirect to={redirectRoute} />;
		}}
	/>
);

export default ProtectedRoute;
