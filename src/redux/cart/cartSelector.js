import { createSelector } from 'reselect';

const shopping = state => state.shopping;

export const selectCarts = createSelector([shopping], shopping => shopping.carts);

export const selectTotalPrice = createSelector([selectCarts], carts =>
	carts.reduce((accumulator, cart) => {
		return accumulator + cart.price * cart.quantity;
	}, 0)
);
