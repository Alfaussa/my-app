import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

const initProds = [
	{id: nanoid(), name: 'product1', cost: 100, 
		isEdit: false}, 
	{id: nanoid(), name: 'product2', cost: 200, 
		isEdit: false}, 
	{id: nanoid(), name: 'product3', cost: 300, 
		isEdit: false}, 
];
function Products() {
	const [prods, setProds] = useState(initProds);

	function toggleMode(id){
		setProds(prods.map(prod => {
			if(prod.id === id){
				prod.isEdit = !prod.isEdit;
			}

			return prod;
		}))
	}
	

	function editProd(id, field, event){
		setProds(prods.map(prod => {
			if (prod.id === id){
				prod[field] = event.target.value;
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
			isEdit={prod.isEdit}
			toggleMode={toggleMode}
			editProd={editProd}
			/>
	});
	
	return <div>
		{items}
	</div>;
}
export default Products;