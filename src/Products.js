import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

const initProds = [
	{id: nanoid(), name: 'product1', cost: 100, 
		inCart: false}, 
	{id: nanoid(), name: 'product2', cost: 200, 
		inCart: false}, 
	{id: nanoid(), name: 'product3', cost: 300, 
		inCart: false}, 
];
function Products() {
	const [prods, setProds] = useState(initProds);

	function addToCart(id){
		setProds(prods.map(prod => {
			if (prod.id ===id){
				prod.inCart =true;
			}
			return prod;
		}))
	}



	const items = prods.map(prod => {
		return <Product 
			key={prod.id}
			id={prod.id}
			name  ={prod.name}
			cost  ={prod.cost}
			inCart={prod.inCart}
			addToCart ={addToCart}
			/>
	});
	
	return <div>
		{items}
	</div>;
}
export default Products;