import React from "react";
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import productInfo from "../data/prodImages";
import Imgwrapper from "../components/Imagewrapper";
import CartContext from "../context/CartContext";
import "../styles/productpage.scss";

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

function ProductPage(){
    const[isFavorite, setIsFavorite] = useState(false);
    const[product, setProduct] = useState(emptyProduct);
    const[inCart, setInCart] = useState(false);
    const[cartItems, setCartItems] = useContext(CartContext);
    const[selectedQuantity, setSelectedQuantity] = useState(0);
    // const[subtotal, setSubtotal]= useState(0);
    const {productId} = useParams();

    useEffect(() => {
        const item = productInfo.find((item)=> item.id === productId);

        setProduct(() => item || emptyProduct);
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
            for (const item of cartItems) {
                if (item.id === productId) {
                  return true;
                }
              }
              return false;
        }
        ) 
    }, [cartItems, productId]);
    

    function handleCart(){
        const quantityToAdd = parseInt(selectedQuantity);
        const price = parseInt(product.price.slice(1));

        const subtotal = quantityToAdd * price

        if (inCart) {
            const updatedItems = cartItems.map((item) => 
            item.id === productId
                ? {...item, quantity: item.quantity + quantityToAdd, subtotal: item.subtotal + subtotal}
                : item
            );
            setCartItems(updatedItems);
        }
        else {
        setCartItems(() => [
            ...cartItems,
            {id: product.id,
             quantity: quantityToAdd, 
             subtotal: subtotal
            }
        ]
         )
      }
      console.log(cartItems)
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
                        <h3>{product.price}</h3>
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