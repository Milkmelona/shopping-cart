import { useContext} from "react";
import CartContext from "../../context/Context";
import productInfo from "../../const/prodImages";
import getTotal from "../../utils/getTotal"
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import currencyFormat from "../../utils/currencyFormat";
import { useSelector, useDispatch } from 'react-redux';
import "../../styles/Cart.scss"
import { updateQuantity, deleteItem } from "../../actions/cartActions";

function Cart(){
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const isMedScrn = useMediaQuery({query: '(min-width: 900px)'});
    
    function handleQuantity(product, value){
        const id = product.id;
        const price = parseInt(product.price);
        const subtotal = value * price

        dispatch(updateQuantity(id, value, subtotal));
    }
    
    function handleDelete(product){
        const id = product.id;
        dispatch(deleteItem(id));
    }

    return(
        <main className="cart">
            <h3>My Shopping Cart</h3>
            {cart.length === 0 && 
                <div className="cart__empty">
                    <span>Your cart is empty &#128148;</span>
                    <Link to="/shop">
                    <button type="button">
                        Shop Now
                    </button>
                    </Link>
                </div>
            }
            {isMedScrn && cart.length !== 0 && (
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
            {cart.map((item) => {
                const product = productInfo.find((product)=> product.id === item.id);
               
                return(
                        <tr key={product.id} className="cart__details">
                            <td className="cart__container-img-cell">
                            <Link to={`/shop/${product.id}`} className="cart__img-wrapper">
                                <img src={product.image} alt={product.alt} />
                            </Link>
                            </td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                            <input type="number" value={item.quantity} min='1' onChange={(e)=> handleQuantity(product, parseInt(e.target.value, 10))}/>
                            </td>
                            <td>{currencyFormat(item.subtotal)}</td>
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
                        cart.map((item) => {
                        const product = productInfo.find((product)=> product.id === item.id);
                        
                        return(
                        <div className="cart__details" key={product.id}>
                        <button type="button" className="cart__close material-symbols-outlined"onClick={()=>handleDelete(product)}>
                        close
                        </button>
                        <Link to={`/shop/${product.id}`} className="cart__img-wrapper">
                            <img src={product.image} alt={product.alt} />
                        </Link>
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
                                    <td><input type="number" value={item.quantity} min='1' onChange={(e)=> handleQuantity(product, parseInt(e.target.value, 10))}/></td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>{currencyFormat(item.subtotal)}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        )})}
                       </div>
                       }
            {cart.length !== 0 && <div className="cart__checkOut">
                <span className="cart__checkOut-label">total</span>
                <span className="cart__checkOut-total">{currencyFormat(getTotal())}</span>
                <span className="cart__checkOut-text">Shipping and taxes computed at checkout</span>
                <button type="button">
                       Check out
                </button>
            </div>}
        </main>)
}

export default Cart;