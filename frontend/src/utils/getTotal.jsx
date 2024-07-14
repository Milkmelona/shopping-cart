import { useContext, React } from "react";
import CartContext from "../context/CartContext";

function getTotal(){
    const [cartItems] = useContext(CartContext);
    const subtotals = cartItems.map((item)=> item.subtotal);

    const sum = subtotals.reduce((total, subtotal) => {
        return total + subtotal
    })

    return sum;
}

export default getTotal;