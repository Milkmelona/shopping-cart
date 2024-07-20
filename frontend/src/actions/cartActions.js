import {
    SET_CART,
    GET_ITEM,
    ADD_TO_CART,
    DELETE_ITEM,
    UPDATE_QUANTITY
} from "./types";
import CartService from "../services/cartService";

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

export const getItem = (userId, itemId) => async(dispatch) =>{
    try{
        const response = await CartService.getItem(userId, itemId);
        dispatch({
            type: GET_ITEM,
            payload: response.data
        });
    }catch(error){
        console.error("Error fetching cart item", error);
    }
}

export const addItem = (item) => async(dispatch) =>{
    try{
        await CartService.addItem(item)
        dispatch({
            type: GET_ITEM,
            payload: item
        })
    }catch(error){
        console.error("Error adding cart item", error);
    }
}

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

export const updateQuantity = (id, quantity) => async(dispatch) =>{
    try{
        await CartService.updateQuantity(id, quantity)
        dispatch({
            type: UPDATE_QUANTITY,
            payload: {id: id, quantity: quantity}
        })
    }catch(error){
        console.error("Error updating cart item", error);
    }
}