import React from 'react';

function Product({ id, name, cost, inCart, addToCart}) {
	return <div>
		id:<span>{id}</span>,
		name: <span>{name}</span>,
		cost: <span>{cost}</span>,
		<span>{inCart ? 'in cart' : 'not in cart'}</span>
		<button onClick={() => addToCart(id)}>to cart</button>
	</div>;
}
export default Product;