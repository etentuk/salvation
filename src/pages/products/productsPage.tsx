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
			<div className={'productsPageContainer'}>
			{cakes?.map((cake: Cake, index) => (

						<Fragment key={index.toString()}>
							<div className={'productsDetails'}>

								<div className={'productsImage'}/>
								<div className={'detailsAndButton'}>
									<div className={'productPageProductDetails'}>
										<p>Flavor: {cake.flavour}</p>
										<p>Size: {cake.size}</p>
										<p>Color: {cake.color}</p>
									</div>
									<button onClick={() => addToCart(cake)}>Add to cart</button>
								</div>
							</div>
						</Fragment>

			))
			}
			<button onClick={checkOut} className={'checkOut'}>Checkout</button>

			</div>

	);
};

export default withRouter(ProductsPage);
