import React from 'react';
import path from '../../path';

import SearchIcon from '@material-ui/icons/Search';

//css
import './header.scss';
import { ShoppingBasket } from '@material-ui/icons';

const Header = () => {
	return (
	<div className="header">
		<img className="header__logo" src={`${path}/images/amazon.png`} alt=""/>

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
			<div className="header__nav-item header__basket">
				<ShoppingBasket className="header__basket-icon" />
				<span className="header__basket-count">0</span>
			</div>
		</div>
	</div>
	);
};

export default Header;
