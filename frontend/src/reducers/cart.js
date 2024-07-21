import {
    SET_CART,
    GET_ITEM,
    ADD_TO_CART,
    DELETE_ITEM,
    UPDATE_QUANTITY
} from "../actions/types";

const initialState = {
    cart: [],
    item: {
        name: "",
        price: "",
        alt: "",
        id: "",
        quantity: '',
        number:'',
        description: '',
        image: '',
        compressedImg: ''
    },
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
            return {
                ...state,
                item: payload
            }
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
                cart: state.cart.map((item)=> item.id === payload.id ? {...item, quantity: payload.quantity, subtotal: payload.subtotal} : item)
            };
        default:
            return state;
    };
}

export default cartReducer;