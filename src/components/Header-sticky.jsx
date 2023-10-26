import React from "react";
import HeaderIcon from "./HeaderButtons";
import "../styles/headerSticky.scss"

function HeaderSticky(){

    return(
         // <motion.nav
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: -20 }}
    //     className="navBar"
    // >
    //      <ul className="navBar__links">
    //     <NavLink
    //       to="/products"
    //       className="navBar__link
    //       "
    //     >
    //       Collection
    //     </NavLink>
    //     <NavLink
    //       to="/products/eyeglasses"
    //       className="navBar__link
    //       "
    //     >
    //       Look Book
    //     </NavLink>
    //     <NavLink
    //       to="/products/sunglasses"
    //       className="navBar__link
    //       "
    //     >
    //       About Us
    //     </NavLink>

    //     <NavLink
    //       to="/about"
    //       className="navBar__link
    //       "
    //     >
    //       FAQs
    //     </NavLink>
    // </ul>
             
    //</motion.nav>
    <div className="headerSticky">
    <span>Methuselah</span>
    <ul className="headerSticky__list">
        <li>Shop</li>
        <li>Collection</li>
        <li>About Us</li>
        <li>FAQs</li>
    </ul>
    <div className="headerSticky__icons">
     <HeaderIcon
            src={"../src/assets/search.svg"} 
            alt={"search"} 
            btnClass={"headerSticky__icon search"}
            />
            <HeaderIcon
            src={"../src/assets/account.svg"} 
            alt={"account"} 
            btnClass={"headerSticky__icon account"}
            />
            <HeaderIcon
            src={"../src/assets/heart.svg"} 
            alt={"wishlist"} 
            btnClass={"headerSticky__icon heart"}
            />
            <HeaderIcon
            src={"../src/assets/cart.svg"} 
            alt={"cart"} 
            btnClass={"headerSticky__icon cart"}
            />
     </div>
     </div>
    )
}

export default HeaderSticky;