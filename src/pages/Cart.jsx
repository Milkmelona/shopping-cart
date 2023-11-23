import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import Imgwrapper from "../components/Imagewrapper";
import productInfo from "../data/prodImages"
import "../styles/Cart.scss";

function Cart(){
    const[cartItems, setCartItems] = useContext(CartContext);

    return(
        <main className="cart">
            <h3>My Shopping Cart</h3>
            {cartItems.map((item) => {
                const product = productInfo.find((product)=> product.id === item.id);
                const price = product.price.slice(1);
                return(
                    <div className="cart__container" key={product.id}>
                    <button type="button" className="cart__close material-symbols-outlined">
                        close
                    </button>
                    <Imgwrapper className="cart__img-wrapper">
                        <img src={product.image} alt={product.alt} />
                    </Imgwrapper>
                    <div className="cart__details">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Item</td>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{product.price}</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td><input type="number" value={item.quantity}/></td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>{parseInt(item.quantity) * parseInt(price)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                )
            })}
        </main>

    )
}

export default Cart;