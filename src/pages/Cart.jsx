import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import Imgwrapper from "../components/Imagewrapper";
import productInfo from "../data/prodImages"
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "../styles/Cart.scss";

function Cart(){
    const[cartItems, setCartItems] = useContext(CartContext);
    const isMedScrn = useMediaQuery({query: '(min-width: 900px)'});

    function handleQuantity(e){

    }
    
    function handleDelete(product){
        const productToBeDeleted = cartItems.find((item)=> item.id === product.id)
        const index = cartItems.indexOf(productToBeDeleted);
        cartItems.splice(index, 1);
        setCartItems([...cartItems])
    }

    return(
        <main className="cart">
            <h3>My Shopping Cart</h3>
            {cartItems.length === 0 && 
                <div className="cart__empty">
                    <span>Your cart is empty &#128148;</span>
                    <Link to="/shop">
                    <button type="button">
                        Shop Now
                    </button>
                    </Link>
                </div>
            }
            {isMedScrn && cartItems.length !== 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="cart__container">
            {cartItems.map((item) => {
                const product = productInfo.find((product)=> product.id === item.id);
                const price = product.price.slice(1);
                return(
                        <tr key={product.id} className="cart__details">
                            <td className="cart__container-img-cell">
                            <Imgwrapper className="cart__img-wrapper">
                                <img src={product.image} alt={product.alt} />
                            </Imgwrapper>
                            </td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                            <input type="number" value={item.quantity} onChange={handleQuantity}/>
                            </td>
                            <td>{parseInt(item.quantity) * parseInt(price)}</td>
                            <td>
                            <button
                                type="button"
                                className="cart__close material-symbols-outlined"
                                onClick={()=>handleDelete(product)}
                            >
                                close
                            </button>
                            </td>
                        </tr>)
                        })}
                        </tbody>
                        </table>)}
                       {!isMedScrn && 
                       <div className="cart__container"> {
                        cartItems.map((item) => {
                        const product = productInfo.find((product)=> product.id === item.id);
                        const price = product.price.slice(1);
                        return(
                        <div className="cart__details" key={product.id}>
                        <button type="button" className="cart__close material-symbols-outlined"onClick={()=>handleDelete(product)}>
                        close
                        </button>
                        <Imgwrapper className="cart__img-wrapper">
                            <img src={product.image} alt={product.alt} />
                        </Imgwrapper>
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
                        )})}
                       </div>
                       }
            {cartItems.length !== 0 && <div className="cart__checkOut">
                <span className="cart__checkOut-label">total</span>
                <span className="cart__checkOut-total">P11,500</span>
                <span className="cart__checkOut-text">Shipping and taxes computed at checkout</span>
                <button type="button">
                       Check out
                </button>
            </div>}
        </main>)
}

export default Cart;