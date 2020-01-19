import React, {FC, useContext, useState} from 'react';
import {Alert} from 'antd';
import {Context} from '../../App';
import { withRouter } from 'react-router-dom';

interface PaymentPageProps {
	history: any;
}

const PaymentPage: FC<PaymentPageProps> = () => {
	const {
		setCurrentOrders,
		state: {currentOrders},
	} = useContext<any>(Context);

	const [paymentError, setPaymentError] = useState(false);
	const [addressError, setAddressError] = useState(false);
	const [shippingDetails, setShippingDetails] = useState({
		name: 'Woyong',
		address: '',
		city: '',
		email: '',
		phone: '',
	});

	const [paymentDetails, setPaymentDetails] = useState({
		cardNumber: '',
		expiryDate: '',
		cvc: '',
	});

	const addressValid =
		shippingDetails.email && shippingDetails.name && shippingDetails.address && shippingDetails.phone && shippingDetails.city;

	const paymentValid = paymentDetails.cardNumber && paymentDetails.cvc && paymentDetails.expiryDate;

	const onChange = (event: any): void => {
		setAddressError(false);
		setShippingDetails({ ...shippingDetails, [event.target.name]: event.target.value });
	};

	const onChangePayment = (event: any): void => {
		setPaymentError(false);
		setPaymentDetails({ ...paymentDetails, [event.target.name]: event.target.value });
	};

	const pay = async (): Promise<void> => {
		if (!paymentValid) {
			setPaymentError(true);
		}

		if (!addressValid) {
			setAddressError(true);
		}

		if (addressValid && paymentValid) {
			const date = new Date();
			// const existingOrders = JSON.parse(localStorage.getItem('orders'));

			setCurrentOrders({
				...currentOrders,
				...shippingDetails,
			});

			const newOrder = {
				...currentOrders,
				...shippingDetails,
				// orderNumber: existingOrders ? existingOrders.length : 0,
				date: `${date.toDateString()} at ${date.toLocaleTimeString()}`,
				payment: 'Fulfilled',
			};

			// localStorage.setItem('orders', JSON.stringify([newOrder, ...(existingOrders || [])]));
			// history.push('/about');
		}
	};
	return (

		<div>
			<h1>Address</h1>
			<form style={{display: 'flex', width: '50%', flexDirection: 'column', justifyContent: 'center'}}>
				<input placeholder="Name" name="name" onChange={onChange} required/>
				<input placeholder="Address" name="address" onChange={onChange} required/>
				<input placeholder="City/Town" name="city" onChange={onChange} required/>
				<input placeholder="Email" name="email" onChange={onChange} required/>
				<input placeholder="Phone" name="phone" onChange={onChange} required/>
			</form>
			{addressError && <Alert style={{marginBottom: 40}} message="Please fill out the entire form" type="error"/>}
			<h2>PAYMENT</h2>
			<form autoComplete="off" style={{display: 'flex', width: '50%', flexDirection: 'column', justifyContent: 'center'}}>
				<input placeholder="Card number" name="cardNumber" onChange={onChangePayment} required/>
				<input placeholder="Expiry date" name="expiryDate" onChange={onChangePayment} required/>
				<input placeholder="CVC" name="cvc" onChange={onChangePayment} required/>
			</form>
			{paymentError && <Alert style={{marginBottom: 40}} message="Please fill out the entire form" type="error"/>}
			<button disabled={!(paymentValid && addressValid)} onClick={pay}> Pay</button>
		</div>
	);
};
export default withRouter(PaymentPage);
