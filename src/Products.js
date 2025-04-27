import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

const initProds = [
	{id: nanoid(), name: 'prod1', cost: 'cost1', 
		catg: 'catg1'}, 
	{id: nanoid(), name: 'prod2', cost: 'cost2', 
		catg: 'catg2'}, 
	{id: nanoid(), name: 'prod3', cost: 'cost3', 
		catg: 'catg3'}, 
];

function Products() {
	const [prods, setProds] = useState(initProds);


	

	function changeField(id, field, event){
		setProds(prods.map(prod => {
			if (prod.id === id){
				prod[field] = event.target.value;
			}
			return prod;
		}))
	}



	const rows = prods.map(prod => {
		return <Product 
			key={prod.id}
			id={prod.id}
			name  ={prod.name}
			cost  ={prod.cost}
			catg  ={prod.catg}
			changeField={changeField}

			/>
	});
	
	return <div>
		<table>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}
export default Products;