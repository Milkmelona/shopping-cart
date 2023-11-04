import React from "react";
import { useState } from "react";
import HeaderIcon from "./HeaderButtons";
import { useMediaQuery } from "react-responsive";
import "../styles/headerSticky.scss"

function HeaderSticky(){

    const[isMenuVisible, setIsMenuVisible] = useState(false);
    const isSmScrn = useMediaQuery({ query: '(min-width: 600px)' })

    function handleDropDrown(){
        setIsMenuVisible(!isMenuVisible);
    }

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
    <div className="headerSticky__icons left">
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
     {isSmScrn ? <ul className="headerSticky__list row">
                <li>Shop</li>
                <li>Collection</li>
                <li>About Us</li>
                <li>FAQs</li>
            </ul> : <div className="headerSticky__logo">
        <HeaderIcon
            src={"../src/assets/methuselah-logo.svg"}
            alt={"methuselah logo"}
            btnClass={"headerSticky__icon logo"}
        />
        </div>}
     <div className="headerSticky__icons right">
            <HeaderIcon
            src={"../src/assets/search.svg"} 
            alt={"search"} 
            btnClass={"headerSticky__icon search"}
            />
        {isSmScrn ? <HeaderIcon
            src={"../src/assets/methuselah-logo.svg"}
            alt={"methuselah logo"}
            btnClass={"headerSticky__icon logo"}
        /> 
            :
            <HeaderIcon 
            src={"../src/assets/menu.svg"}
            alt={"menu"}
            btnClass={`headerSticky__icon menu ${isSmScrn ? 'hidden': ""}`}
            onClick={handleDropDrown}
            />
            }
     </div>
     {isMenuVisible && <ul className="headerSticky__list">
                <li>Shop</li>
                <li>Collection</li>
                <li>About Us</li>
                <li>FAQs</li>
            </ul>}
     </div>
    )
}

export default HeaderSticky;