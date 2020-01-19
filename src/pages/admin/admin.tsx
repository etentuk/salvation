import React, {FC} from 'react';
import { useForm } from 'react-hook-form';


const Admin: FC = () => {
	const { register, handleSubmit } = useForm(); // initialise the hook
	const onSubmit = (data: any)=> {
		const cakesInLocalStorage = JSON.parse(localStorage.getItem('cakes') as string) || [];
		localStorage.setItem('cakes', JSON.stringify([...cakesInLocalStorage, data]));
	};

	return (
		<div>
			<h2>Admin</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="flavour" ref={register} /> {/* register an input */}
				<input name="size" ref={register} />
				<input name="color" ref={register} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Admin;
