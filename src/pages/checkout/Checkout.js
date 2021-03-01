import React from 'react';
import { carts } from '../../redux/cart/cartSelector';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

//scss
import './checkout.scss';

const Checkout = ({ carts }) => {
	return (
		<div className="checkout">
			<div className="subtotal">
				<div className="subtotal__items">
					<p>
						Subtoal( items: {carts.length} ): <strong>{1}</strong>
					</p>
				</div>
				<div className="subtotal__gift">
					<input type="checkbox" />
					<span>This order is contain gift</span>
				</div>
				<button className="chckout__btn">Procced to Checkout</button>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	carts: carts,
});

export default connect(mapStateToProps)(Checkout);
