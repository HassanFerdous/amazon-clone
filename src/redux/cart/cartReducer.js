const INNITIAL_STATE = {
	carts: [],
};

const cartReducer = (state = INNITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				carts: [...state.carts, action.payload],
			};
		default:
			return state;
	}
};

export default cartReducer;
