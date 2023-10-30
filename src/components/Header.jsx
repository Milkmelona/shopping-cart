import React from "react";
import { useState } from "react";
import "../styles/header.scss"
import HeaderIcon from "./HeaderButtons";
import NavBar from "./Navigation";

function Header(){

    const[isMenuVisible, setIsMenuVisible] = useState(false);
        
    function handleDropDown(){
        setIsMenuVisible(!isMenuVisible);
    }   
    
return (
    <div className="header">
        <div className="header__top">
        <div className="header__logo">
        <HeaderIcon
            src={"../src/assets/methuselah-logo.svg"}
            alt={"methuselah logo"}
            btnClass={"header__icon logo"}
        />
        </div>
        <h1>Methuselah</h1>
        <div className="header__menu-wrapper">
        <HeaderIcon
            src={"../src/assets/menu.svg"}
            alt={"menu"}
            btnClass={"header__icon menu"}
            onClick = {handleDropDown}
        />
        {isMenuVisible && <div className="header__list">
            <HeaderIcon
            src={"../src/assets/search.svg"} 
            alt={"search"} 
            btnClass={"header__icon search"}
            />
            <HeaderIcon
            src={"../src/assets/account.svg"} 
            alt={"account"} 
            btnClass={"header__icon account"}
            />
            <HeaderIcon
            src={"../src/assets/heart.svg"} 
            alt={"wishlist"} 
            btnClass={"header__icon heart"}
            />
            <HeaderIcon
            src={"../src/assets/cart.svg"} 
            alt={"cart"} 
            btnClass={"header__icon cart"}
            />
        </div>}
        </div>
        </div>
        <div className="header__bottom">
       <NavBar/>
        </div>
    
    </div>
)
}
export default Header