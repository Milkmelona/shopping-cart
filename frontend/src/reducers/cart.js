import {
    SET_CART,
    GET_ITEM,
    ADD_TO_CART,
    DELETE_ITEM,
    UPDATE_QUANTITY
} from "../actions/types";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) =>{
    const {type, payload} = action;

    switch(type){
        case SET_CART:
            return{
                ...state, 
                cart: payload
            };
        case GET_ITEM:
            return payload;
        case ADD_TO_CART:
            return{
                ...state,
                cart: [...state.cart, payload]
            };
        case DELETE_ITEM:
            return{
                ...state,
                cart: state.cart.filter((item)=> item.id!==payload)
            };
        case UPDATE_QUANTITY:
            return{
                ...state,
                cart: state.cart.map((item)=> item.id === payload.id ? {...item, quantity: payload.quantity} : item)
            };
        default:
            return state;
    };
}

export default cartReducer;