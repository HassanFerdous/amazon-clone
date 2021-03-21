import React from 'react';
import { Link } from 'react-router-dom';
import { selectCarts, selectTotalPrice } from '../../redux/cart/cartSelector';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//scss
import './checkout.scss';
import path from '../../path';
import { decreaseQuantity, increaseQuantity, clearItemFromCart } from '../../redux/cart/cartAction';

const Checkout = ({ carts, totalPrice, increaseQuantity, decreaseQuantity, clearItemFromCart }) => {
	return (
		<div className="checkout">
			<div className="subtotal">
				<div className="subtotal__items">
					{carts.length ? (
						<>
							<p>
								Subtoal( items: {carts.length} ): <strong>$ {totalPrice.toFixed(2)}</strong>
							</p>
						</>
					) : (
						<div>
							<p>Your cart is empty</p>
							<Link to="/">Go to shopping</Link>
						</div>
					)}
					<div className="subtotal__gift">
						<input type="checkbox" />
						<span>This order is contain gift</span>
					</div>
					<button className="checkout__btn">Procced to Checkout</button>
				</div>
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
									<div className="cart__price">
										<strong className="quantity">
											<button onClick={() => decreaseQuantity(cart)}>&#8722;</button>
											{cart.quantity}
											<button onClick={() => increaseQuantity(cart)}>+</button>
										</strong>
										<strong className="price">${cart.price}</strong>
									</div>
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
										onClick={() => {
											clearItemFromCart(cart);
										}}>
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
	carts: selectCarts,
	totalPrice: selectTotalPrice,
});

const mapDispatchToProps = dispatch => ({
	clearItemFromCart: cart => dispatch(clearItemFromCart(cart)),
	increaseQuantity: cart => dispatch(increaseQuantity(cart)),
	decreaseQuantity: cart => dispatch(decreaseQuantity(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
