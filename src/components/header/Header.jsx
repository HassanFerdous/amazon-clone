import React from 'react';
import path from '../../path';

import SearchIcon from '@material-ui/icons/Search';

//css
import './header.scss';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {carts} from '../../redux/cart/cartSelector'

const Header = ({carts}) => {

	return (
		<div className="header">
			
			<Link to="/">
				<img className="header__logo" src={`${path}/images/amazon.png`} alt=""/>
			</Link>

			<div className="header__search">
				<input className="header__search-input" type="text"/>
				<button className="header__search-btn"><SearchIcon className="header__search-icon" /></button>
			</div>

			<div className="header__nav">
				<div className="header__nav-item">
					<span className="header__nav-option header__nav-option--1">Hello Guest</span>
					<span className="header__nav-option header__nav-option--2">Sign in</span>
				</div>
				<div className="header__nav-item">
					<span className="header__nav-option header__nav-option--1">Returns</span>
					<span className="header__nav-option header__nav-option--2">& Orders</span>
				</div>
				<div className="header__nav-item">
					<span className="header__nav-option header__nav-option--1">Your</span>
					<span className="header__nav-option header__nav-option--2">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__nav-item header__basket">
					<ShoppingBasket className="header__basket-icon" />
					<span className="header__basket-count">{carts?.length}</span>
				</div></Link>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	carts: carts
})

export default connect(mapStateToProps) (Header);
