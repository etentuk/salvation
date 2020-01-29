import React, {FC, useState, useContext} from 'react';
import { withRouter } from 'react-router-dom';
import {Context, ContextProps} from '../../App';
import { useForm } from 'react-hook-form';
import {Alert} from 'antd';
import './login.styles.css';


interface LoginProps {
	history: any;
}

const LoginPage: FC<LoginProps> = ({ history }) => {
	const { register, handleSubmit } = useForm();
	const context = useContext<ContextProps>(Context);
	const [invalid, setInvalid] = useState(false);

	const validateLogin = (data: {username?: string, password?: string}) => {
		if (data.username === 'avese' && data.password === 'avese') {
			setInvalid(false);
			localStorage.setItem('admin', data.username);
			context?.setAdmin(data.username);
			history.push('/admin');
		} else {
			setInvalid(true);
		}
	};

	return (
		<div className="loginContainer center">
			<h1>LOGIN</h1>
			<form onSubmit={handleSubmit(validateLogin)} className={'loginForm'}>
				<input name="username" ref={register} placeholder="Username" />
				<input name="password" ref={register} type={"password"} placeholder="Password" />
				<input type="submit" id={'submitButton'}/>
			</form>
			{invalid && <Alert style={{ marginBottom: 40 }} message="Looks like your credentials are not correct" type="error" />}

		</div>
	);
};

export default withRouter(LoginPage);
