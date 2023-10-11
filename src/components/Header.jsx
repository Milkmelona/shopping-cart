import React from "react";
import "../styles/header.css"

function Header(){

return (
    <div className="header">
    <div className="topSection">
        <div className="headerLogo">
            <img src="../src/assets/rabbit-logo.svg" alt="rabbit-logo" />
            <h1>New Jeans<br/>Rabbit Shop</h1>
        </div>
        <div className="headerlist">
            <ul>
                <li><img src="../src/assets/search.svg" alt="search" className="searchIcon" /></li>
                <li><img src="../src/assets/account.svg" alt="account" className="accountIcon"/></li>
                <li><img src="../src/assets/heart.svg" alt="wishlist" className="heartIcon"/></li>
                <li><img src="../src/assets/cart.svg" alt="cart" className="cartIcon"/></li>
            </ul>
    </div>
    </div>
    <div className="bottomSection">
        <div className="navBar">
            <ul>
                <li>Collection</li>
                <li>Look Book</li>
                <li>About Us</li>
                <li>FAQs</li>
            </ul>
        </div>
    </div>
    </div>
)
}

export default Header