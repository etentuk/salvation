import React, {FC, useEffect, useState} from 'react';


const ProductsPage: FC = () => {

	const [cakes, setCakes] = useState([]);

	useEffect (()=>{
		setCakes(	JSON.parse(localStorage.getItem('cakes') as string));
	},[]);

	return (
		<div>
			<h2>Products</h2>
			{cakes.map((cake: any)=>(
				<>
				<p>flavor :{cake.flavour}</p>
				<p>size: {cake.size}</p>
				<p>color: {cake.color}</p>
				</>
			))}
		</div>
	);
};

export default ProductsPage;
