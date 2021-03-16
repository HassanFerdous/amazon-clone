export const addItemToCart = (carts, itemToAdd) => {
	const existingItem = carts.find(cart => cart.id === itemToAdd.id);

	if (existingItem) {
		return carts.map(cart => (cart.id === existingItem.id ? { ...itemToAdd, quantity: cart.quantity + 1 } : cart));
	} else {
		return [...carts, { ...itemToAdd, quantity: 1 }];
	}
};

export const removeItemFromCart = (carts, itemToRemove) => {
	const exsitingCartItem = carts.find(cartItem => cartItem.id === itemToRemove.id);
	if (exsitingCartItem.quantity === 1) {
		return carts.filter(cartItem => cartItem.id !== itemToRemove.id);
	} else {
		return carts.map(cartItem =>
			cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
		);
	}
};
