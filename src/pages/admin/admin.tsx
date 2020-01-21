import React, {FC, Fragment, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import {Cake} from '../../App';


const AdminPage: FC = () => {
	const { register, handleSubmit } = useForm();
	const [cakes, setCakes] = useState<Cake[]>([]);
	const [orders, setOrders] = useState([]);

	useEffect (()=>{
		setCakes(	JSON.parse(localStorage.getItem('cakes') as string));
	},[]);

	useEffect(()=>{
		setOrders( JSON.parse(localStorage.getItem('orders') as string));
	}, []);

	const onSubmit = (data: object)=> {
		const cakesInLocalStorage = JSON.parse(localStorage.getItem('cakes') as string) || [];
		const newCakes = [...cakesInLocalStorage, data];
		localStorage.setItem('cakes', JSON.stringify(newCakes));
		setCakes(newCakes);
	};

	const deleteCake =(index: number)=>{
		const newCakes = JSON.parse(localStorage.getItem('cakes') as string).filter((order: Cake,indexOfOrder:number) => indexOfOrder !== index);
		localStorage.setItem('cakes', JSON.stringify([...newCakes]));
		setCakes(newCakes);
	};

	return (
		<div>
			<h2>Admin</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="flavour" ref={register} required />
				<input name="size" ref={register} required />
				<input name="color" ref={register} required />
				<input type="submit" />
			</form>

			{cakes?.map((cake: Cake, index:number)=>(
				<Fragment key={index.toString()}>
					<p>flavor :{cake.flavour}, size: {cake.size}, color: {cake.color}</p>
					<button onClick={()=>deleteCake(index)}>Delete</button>
				</Fragment>
			))}

			<h2>Orders</h2>
			{orders?.map((order: any, index:number)=>(
				<Fragment key={index.toString()}>
					<p>Name :{order.name},
						Date: {order.date},
						order Number: {order.orderNumber},
						current Orders{order?.flavour}</p>
				</Fragment>
			))}

		</div>
	);
};

export default AdminPage;
