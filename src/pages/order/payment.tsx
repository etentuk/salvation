import React, {FC, useContext, useState} from 'react';
import {Alert} from 'antd';
import {Context, ContextProps} from '../../App';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';

interface PaymentPageProps {
	history: any;
}

export type paymentDetails = {
	name?: string,
	address?: string,
	city?: string,
	email?: string,
	phone?: string,
	cardNumber?: number,
	expiryDate?: string,
	cvc?: number,
}

const PaymentPage: FC<PaymentPageProps> = ({history}) => {
	const { register, handleSubmit } = useForm();

	const context = useContext<ContextProps>(Context);
	console.log('context', context);
	const [paymentError, setPaymentError] = useState(false);


	const pay = async (details: paymentDetails): Promise<void>=> {
		const paymentValid = details.email && details.name && details.address && details.phone && details.city && details.cardNumber && details.cvc && details.expiryDate;
		if (!paymentValid) {
			setPaymentError(true);
		}

		if (paymentValid) {
			const date = new Date();
			const existingOrders = JSON.parse(localStorage.getItem('orders') as string);

			// setCurrentOrders({
			// 	...currentOrders,
			// });

			const newOrder = {
				...context?.state?.currentOrders,
				...details,
				orderNumber: existingOrders ? existingOrders.length : 0,
				date: `${date.toDateString()} at ${date.toLocaleTimeString()}`,
				payment: 'Fulfilled',
			};

			localStorage.setItem('orders', JSON.stringify([newOrder, ...(existingOrders || [])]));
			history.push('/checkout');
		}
	};
	return (
		<div>
			<h1>Address</h1>
			<form onSubmit={handleSubmit(pay)} style={{display: 'flex', width: '50%', flexDirection: 'column', justifyContent: 'center'}}>
				<input placeholder="Name" name="name" ref={register} required />
				<input placeholder="Address" name="address" ref={register} required />
				<input placeholder="City/Town" name="city" ref={register} required />
				<input placeholder="Email" name="email" ref={register} required />
				<input placeholder="Phone" name="phone" ref={register} required />
			<h2>PAYMENT</h2>
				<input placeholder="Card number" name="cardNumber" ref={register} required/>
				<input placeholder="Expiry date" name="expiryDate" ref={register} required/>
				<input placeholder="CVC" name="cvc" ref={register} required/>
				<input type="submit" />
			</form>
			{ paymentError && <Alert style={{marginBottom: 40}} message="Please fill out the entire form" type="error"/>}
		</div>
	);
};
export default withRouter(PaymentPage);
