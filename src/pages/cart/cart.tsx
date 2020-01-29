import React, {FC, Fragment, useContext} from 'react';
import {Cake, Context} from '../../App';
import {Link} from 'react-router-dom';
import './cart.styles.css';

const CartPage: FC = () => {

	const context = useContext(Context);


	return (
		<div className="cartContainer">
			<div className="cartContent">
				<h1 style={{ textAlign: 'center', marginTop: 40, marginBottom: 30, textDecoration: 'underline' }}>Checkout</h1>
				{context.state?.currentOrders?.map((cake: Cake, index:number)=>(
					<div style={{ display: 'flex', alignItems: 'center', padding: '50px 0', borderBottom: '1px solid #ccc' }}>
						<img src="https://images.unsplash.com/photo-1561741403-3f7c1f93d0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2774&q=80" style={{ width: 250, height: 200  }} />
						<div style={{ marginLeft: 20 }}>
							<h4>{cake.flavour} cake</h4>
							<p style={{ fontSize: 15}}>Color: {cake.color}</p>
							<p style={{ fontSize: 15 }}>Size: {cake.size} cm</p>
							<div onClick={()=>context.onDelete(index)} className="addToCartButton">
								Delete
							</div>
						</div>
					</div>
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
