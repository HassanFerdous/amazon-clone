import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import rootReducer from './rootReducer';

const middleWars = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWars));

export default store;
