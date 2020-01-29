import './productsPage.styles.css';
import React, {FC, useEffect, useState, Fragment, useContext} from 'react';
import { withRouter } from 'react-router-dom';
import {Context, Cake, ContextProps} from '../../App';

interface ProductProps {
	history: any;
}

const ProductsPage: FC<ProductProps> = ({ history }) => {
	const context = useContext<ContextProps>(Context);

	const [cakes, setCakes] = useState([]);

	useEffect(() => {
		setCakes(JSON.parse(localStorage.getItem('cakes') as string));
	}, []);

	const addToCart = (currentOrder: Cake): void => {
		context?.setCurrentOrders(currentOrder);
	};

	const checkOut = () => {
		history.push('/cart');

	};
	return (
			<>
				<h1 style={{ textAlign: 'center', marginTop: 40, marginBottom: 30, textDecoration: 'underline' }}>Cakes</h1>
				<section className="productsPageContainer">
					{cakes?.map((cake: Cake, index) => (
						<div className="singleProduct">
							<img src="https://images.unsplash.com/photo-1561741403-3f7c1f93d0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2774&q=80" style={{ width: '100%', height: 200,  }} />
							<div className="cakeInfo">
								<h4>{cake.flavour} cake</h4>
								<p>Color: {cake.color}</p>
								<p>Size: {cake.size}</p>
								<div onClick={() => addToCart(cake)} className="addToCartButton">
									Add to cart
								</div>
							</div>
						</div>
					))
					}
				</section>
				</>

	);
};

export default withRouter(ProductsPage);
