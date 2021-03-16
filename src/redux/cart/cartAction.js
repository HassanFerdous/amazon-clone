export const addToBasket = carts => {
	return {
		type: 'ADD_TO_BASKET',
		payload: carts,
	};
};

export const removeCartItem = cart => {
	return {
		type: 'REMOVE_CART_ITEM',
		payload: cart.id,
	};
};

export const addjustQuantity = cart => {
	return {
		type: 'ADDJUST_QUANTITY',
		payload: {
			id: cart.id,
		},
	};
};
