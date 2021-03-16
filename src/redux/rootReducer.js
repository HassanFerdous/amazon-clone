import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
	shopping: cartReducer,
});

export default rootReducer;
