import React, {FC, useEffect, useState, Fragment, useContext} from 'react';
import { withRouter } from 'react-router-dom';
import {Context, Cake} from '../../App';

interface ProductProps {
	history: any;
}
const ProductsPage: FC<ProductProps> = ({ history }) => {
	const context = useContext(Context);

	const [cakes, setCakes] = useState([]);

	useEffect (()=>{
		setCakes(	JSON.parse(localStorage.getItem('cakes') as string));
	},[]);

	const addToCart = (currentOrder: Cake): any =>{
		context.setCurrentOrders(currentOrder);
	};

	const checkOut = () => {
		history.push('/cart');

	};
	return (
		<div>
			<h2>Products</h2>
			{cakes.map((cake: any, index)=>(
				<Fragment key={index.toString()}>
					<p>flavor :{cake.flavour}, size: {cake.size}, color: {cake.color}</p>
					<button onClick={()=>addToCart(cake)}>Add to cart</button>
				</Fragment>
			))}
			<button onClick={checkOut}>Checkout</button>
		</div>
	);
};

export default withRouter(ProductsPage);
