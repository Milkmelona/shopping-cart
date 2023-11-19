import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import productInfo from "../data/prodImages";
import Imgwrapper from "../components/Imagewrapper";
import "../styles/Productpage.scss";

function ProductPage(){
    const {productId} = useParams();
    const product = productInfo.find((item)=> item.id === productId);

    const[isFavorite, setIsFavorite] = useState(false);
    const[isAdded, setIsAdded] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const[selectedQuantity, setSelectedQuantity] = useState(0);

    function handleFavorite(){
        setIsFavorite(!isFavorite);
    }

    function handleQuantity(){

    }

    function handleCart(){
        setCartItems( () => [
            ...cartItems,
            {id: product.id,
             quantity: selectedQuantity 
            }
        ]
        )
    }

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
                    <input type="number" id="quantity" name="quantity" min="1" max={product.quantity} onInput={handleQuantity}/>
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