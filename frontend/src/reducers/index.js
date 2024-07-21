import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart';
import userReducer from './user';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;