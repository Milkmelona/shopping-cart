import React from "react";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import productInfo from "../data/prodImages";
import Imgwrapper from "../components/Imagewrapper";
import ContextProvider from "../context/ContextProvider";
import "../styles/Productpage.scss";

function ProductPage(){
    const[isFavorite, setIsFavorite] = useState(false);
    const[product, setProduct] = useState(emptyProduct);
    const[inCart, setInCart] = useState(false);
    const[cartItems, setCartItems] = useContext(ContextProvider);
    const[selectedQuantity, setSelectedQuantity] = useState(0);
    const {productId} = useParams();

    const emptyProduct = {
        name: "",
        price: "",
        alt: "",
        id: "",
        quantity: '',
        number:'',
        description: '',
        image: '',
        compressedImg: ''
    }
    useEffect(() => {
        const item = productInfo.find((item)=> item.id === productId);

        setProduct(() => item || emptyProduct)
    }, [productId]);
    


    function handleFavorite(){
        setIsFavorite(!isFavorite);
    }

    function handleQuantity(e){
        const value = e.target.value;
        setSelectedQuantity(value);
    }

    useEffect(() => {

        function isItemInCart(){
            return cartItems.includes((id) => id === product.id);
        }

        if (isItemInCart) setInCart(true); 
    }, [cartItems, productId])
    

    function handleCart(){
        if (isItemInCart) {
            const addedProduct = cartItems.find((item)=> item.id === product.id);
            addedProduct.quantity += selectedQuantity;
        }
        else {
        setCartItems(() => [
            ...cartItems,
            {id: product.id,
             quantity: selectedQuantity 
            }
        ]
        )
    }}

    return (
        <main className="pp">
            <div className="pp_details">
                <Imgwrapper className="">
                    <img src={product.image} alt={product.alt} />
                </Imgwrapper>

                <div className="pp_text">
                    <h2>{product.name}</h2>
                    <h3>{product.price}</h3>

                    <p>{product.description}</p>
                    <label for="quantity">Quantity</label>
                    <input type="number" id="quantity" name="quantity" min="1" max={product.quantity} onInput={handleQuantity(e)}/>
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
        </main>
    )
}

export default ProductPage;