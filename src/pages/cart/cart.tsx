import React, {FC, Fragment, useContext} from 'react';
import {Cake, Context} from '../../App';
import {Link} from 'react-router-dom';
import './cart.styles.css';

const CartPage: FC = () => {

	const context = useContext(Context);


	return (
		<div className={'cartContainer'}>
			<div className={'cartContent'}>
			{context.state?.currentOrders?.map((cake: Cake, index:number)=>(
	        <Fragment key={index.toString()}>
		        <p>flavor :{cake.flavour}, size: {cake.size}, color: {cake.color}</p>
		        <button onClick={()=>context.onDelete(index)}>Delete</button>
	        </Fragment>
			))
			}
			</div>

			<div className={'paymentButtonContainer'}>
			<div className="paymentButton"><span><Link to={'/payment'}>Pay</Link></span></div>
			</div>
		</div>
	)
};

export default CartPage;
