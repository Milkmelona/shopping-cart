import {
    SET_CART,
    GET_ITEM,
    ADD_TO_CART,
    DELETE_ITEM,
    UPDATE_QUANTITY
} from "./types";
import CartService from "../services/cartService";

//Asynchronous action creator to fetch the user's cart.
export const fetchCart = (id) => async(dispatch) => {
    try{
        const response = await CartService.getCart(id);
        dispatch({
            type: SET_CART,
            payload: response.data
        });
    }catch(error){
        console.error("Error fetching user's cart", error);
    }
}

//Asynchronous action creator to fetch cart item details.
export const getItem = (id) => async(dispatch) =>{
    try{
        const response = await CartService.getItem(id);
        dispatch({
            type: GET_ITEM,
            payload: response.data
        });
    }catch(error){
        console.error("Error fetching cart item", error);
    }
}

//Asynchronous action creator to add item to cart
export const addItem = (item) => async(dispatch) =>{
    try{
        await CartService.addItem(item)
        dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    }catch(error){
        console.error("Error adding cart item", error);
    }
}

//Asynchronous action creator to delete item from cart
export const deleteItem = (id) => async(dispatch) =>{
    try{
        await CartService.deleteItem(id)
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    }catch(error){
        console.error("Error fetching cart item", error);
    }
}

//Asynchronous action creator to update item quantity in cart
export const updateQuantity = (id, quantity, subtotal) => async(dispatch) =>{
    try{
        await CartService.updateQuantity(id, quantity)
        dispatch({
            type: UPDATE_QUANTITY,
            payload: {id: id, quantity: quantity, subtotal:subtotal}
        })
    }catch(error){
        console.error("Error updating cart item", error);
    }
}