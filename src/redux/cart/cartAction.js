export const addToBasket = carts => {
	return {
		type: 'ADD_TO_BASKET',
		payload: carts,
	};
};

export const clearItemFromCart = cart => {
	return {
		type: 'CLEAR_CART_ITEM',
		payload: cart.id,
	};
};

export const increaseQuantity = cart => {
	return {
		type: 'INCREASE_QUANTITY',
		payload: {
			id: cart.id,
		},
	};
};

export const decreaseQuantity = cart => {
	return {
		type: 'DECREASE_QUANTITY',
		payload: cart,
	};
};
