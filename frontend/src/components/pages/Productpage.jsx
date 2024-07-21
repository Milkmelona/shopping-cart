import React from "react";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import productInfo from "../../const/prodImages";
import Imgwrapper from "../Imagewrapper";
import { useSelector, useDispatch } from 'react-redux';
import currencyFormat from "../../utils/currencyFormat";
import "../../styles/productpage.scss";
import {updateQuantity, getItem, addItem} from "../../actions/cartActions"

function ProductPage(){
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const[isFavorite, setIsFavorite] = useState(false);
    const[inCart, setInCart] = useState(false);
    const[selectedQuantity, setSelectedQuantity] = useState(0);
    const product = useSelector(state => state.item);
    const {productId} = useParams();

    useEffect(() => {
        dispatch(getItem(productId));
    }, [productId]);

    function handleFavorite(){
        setIsFavorite(!isFavorite);
    }

    function handleQuantity(e){
        const value = e.target.value;
        setSelectedQuantity(value);
    }

    useEffect(() => {
        setInCart(() => {
            for (const item of cart) {
                if (item.id === productId) {
                  return true;
                }
              }
              return false;
        }
        ) 
    }, [cart, productId]);
    

    function handleCart(){
        const quantityToAdd = parseInt(selectedQuantity);
        const price = parseInt(product.price);
        const subtotal = quantityToAdd * price;

        if (inCart) {
            const itemInCart = cart.find((item)=> item.id === productId);
            const value = itemInCart.quantity + quantityToAdd
            dispatch(updateQuantity(id, value, subtotal));
        }
        else {
            const product =
                {id: product.id,
                quantity: quantityToAdd, 
                subtotal: subtotal
                }
            dispatch(addItem(product))
        }
    }

    return (
        <main className="pp">
            <div className="pp__details">
                <Imgwrapper className="pp__img-wrapper">
                    <img src={product.image} alt={product.alt} />
                </Imgwrapper>
                <div className="pp__wrapper">
                    <div className="pp__wrapper-text">
                        <h2>{product.name}</h2>
                        <h3>{currencyFormat(product.price)}</h3>
                    </div>
                    <p>{product.description}</p>
                    <div className="pp__wrapper-quantity">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" id="quantity" name="quantity" min="1" max={product.quantity} onInput={handleQuantity} required/>
                    </div>
                    <div className="pp__wrapper-btn">
                    <button
                        type="button"
                        className="pp__cart" 
                        onClick={handleCart}
                        >Add to Cart
                    </button>
                    <button
                        type= "button"
                        className={`pp__favorite material-symbols-outlined ${isFavorite ? "active" : ""}`}
                        onClick={handleFavorite}
                    >
                        favorite
                    </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage;