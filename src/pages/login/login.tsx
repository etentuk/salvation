import React, { FC, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';


interface LoginProps {
	history: any;
}

const Login: FC<LoginProps> = ({ history }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [invalid, setInvalid] = useState(false);

	const validateLogin = (): void => {
		if (username === 'solomon' && password === 'solomon') {
			setInvalid(false);
			localStorage.setItem('admin', 'Solomon');
			const admin = localStorage.getItem('admin');
			history.push('/admin');
		} else {
			setInvalid(true);
		}
	};

	const downHandler = ({ key }: { key: any }): void => {
		if (key === 'Enter') {
			validateLogin();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', downHandler);
		return (): void => {
			window.removeEventListener('keydown', downHandler);
		};
	}, [username, password]);

	const onChangeUsername = (event: any): void => {
		setInvalid(false);
		setUsername(event.target.value);
	};

	const onChangePassword = (event: any): void => {
		setInvalid(false);
		setPassword(event.target.value);
	};

	return (
		<div className="loginContainer center">
			<h1>LOGIN</h1>
			<form className="center">
				<input
					style={{ width: 400 }}
					placeholder="username"
					name="name"
					onChange={onChangeUsername}
					required
				/>
				<input
					type="password"
					style={{ width: 400 }}
					placeholder="password"
					name="password"
					onChange={onChangePassword}
					required
				/>
				<button title="let's go" onClick={validateLogin} />
			</form>
		</div>
	);
};

export default withRouter(Login);
