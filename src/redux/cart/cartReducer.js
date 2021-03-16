import { addItemToCart } from './utilities';

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

		case 'REMOVE_CART_ITEM':
			return {
				...state,
				carts: state.carts.filter(cart => cart.id !== action.payload),
			};

		case 'ADDJUST_QUANTITY':
			return {
				...state,
				carts: state.carts.map(cart =>
					cart.id === action.payload.id ? { ...cart, quantity: cart.quantity + 1 } : cart
				),
			};

		default:
			return state;
	}
};

export default cartReducer;
