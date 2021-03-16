import React from 'react';
import { connect } from 'react-redux';
import path from '../../path';
import { addToBasket } from '../../redux/cart/cartAction';

//css
import './product.scss';

const Product = ({ addToBasket, addTotalPrice, ...otherProps }) => {
	const { name, imgSrc, rating, price } = otherProps;
	return (
		<div className="product">
			<div className="product__inner">
				<div className="product__name">{name}</div>
				<div className="price">${price}</div>
				<div className="rating">
					{Array(rating)
						.fill()
						.map((start, ind) => (
							<span className="rating__star" key={ind}>
								<img src={`${path}/images/star.svg`} alt="img" />
							</span>
						))}
				</div>
				<div className="product__img">
					<img src={imgSrc} alt="product-img" />
				</div>
			</div>

			<button
				className="btn product__btn"
				onClick={() => {
					addToBasket({ ...otherProps });
				}}>
				Add to basket
			</button>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addToBasket: item => dispatch(addToBasket(item)),
});

export default connect(null, mapDispatchToProps)(Product);
