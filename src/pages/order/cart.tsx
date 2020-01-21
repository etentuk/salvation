import React, {FC, Fragment, useContext} from 'react';
import {Cake, Context} from '../../App';
import {Link} from 'react-router-dom';

const CartPage: FC = () => {

	const context = useContext(Context);


	return (
		<>
			{context.state?.currentOrders?.map((cake: Cake, index:number)=>(
	        <Fragment key={index.toString()}>
		        <p>flavor :{cake.flavour}, size: {cake.size}, color: {cake.color}</p>
		        <button onClick={()=>context.onDelete(index)}>Delete</button>
	        </Fragment>
			))
			}
			<Link to={'/payment'}>Pay</Link>

		</>
	)
};

export default CartPage;
