import { createSelector } from 'reselect';

const cart = state => state.cart;

export const carts = createSelector([cart], cart => cart.carts);

export const selectCartItem = createSelector([carts], carts => carts.forEach(item => item));
