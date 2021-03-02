import React from 'react';
import { carts, selectCartItem } from '../../redux/cart/cartSelector';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//scss
import './checkout.scss';
import path from '../../path';

const Checkout = ({ carts, cartItem }) => {
	console.log(carts, cartItem);
	const totalPrice = carts.reduce((accumulator, cartItem) => accumulator + cartItem.price, 0);

	const removeItemFromCart = (carts, id) => {
		const arr = carts.filter(cart => cart.id !== id);

		console.log(id);
		console.log(arr);
	};

	return (
		<div className="checkout">
			<div className="subtotal">
				<div className="subtotal__items">
					<p>
						Subtoal( items: {carts.length} ): <strong>${totalPrice}</strong>
					</p>
				</div>
				<div className="subtotal__gift">
					<input type="checkbox" />
					<span>This order is contain gift</span>
				</div>
				<button className="checkout__btn">Procced to Checkout</button>
			</div>
			<div className="carts">
				{carts
					? carts.map((cart, idx) => (
							<div className="cart" key={idx}>
								<div className="cart__img">
									<img src={`${path}${cart.imgSrc}`} alt="cart-img" />
								</div>
								<div className="cart__content">
									<div className="cart__desc">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem!
									</div>
									<div className="cart__price">${cart.price}</div>
									<div className="rating">
										{Array(cart.rating)
											.fill()
											.map((start, ind) => (
												<span className="rating__star" key={ind}>
													<img src={`${path}/images/star.svg`} alt="img" />
												</span>
											))}
									</div>
									<button
										className="cart__remove-btn"
										onClick={() => removeItemFromCart(carts, cart.id)}>
										Remove from Basket
									</button>
								</div>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	carts: carts,
	cartItem: selectCartItem,
});

export default connect(mapStateToProps)(Checkout);
