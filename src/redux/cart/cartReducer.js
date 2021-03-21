import { addItemToCart, removeItemFromCart } from './utilities';

const INNITIAL_STATE = {
	carts: [],
};

const cartReducer = (state = INNITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				carts: addItemToCart(state.carts, action.payload),
			};

		case 'CLEAR_CART_ITEM':
			return {
				...state,
				carts: state.carts.filter(cart => cart.id !== action.payload),
			};

		case 'INCREASE_QUANTITY':
			return {
				...state,
				carts: state.carts.map(cart =>
					cart.id === action.payload.id ? { ...cart, quantity: cart.quantity + 1 } : cart
				),
			};
		case 'DECREASE_QUANTITY':
			return {
				...state,
				carts: removeItemFromCart(state.carts, action.payload),
			};

		default:
			return state;
	}
};

export default cartReducer;
