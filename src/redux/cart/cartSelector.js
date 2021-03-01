import { createSelector } from 'reselect';

const cart = state => state.cart;

export const carts = createSelector([cart], cart => cart.carts);
