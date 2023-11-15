import React from "react";
import { useState } from "react";
import HeaderIcon from "./HeaderButtons";
import { useMediaQuery } from "react-responsive";
import "../styles/headerSticky.scss"

function HeaderSticky(){

    const[isMenuVisible, setIsMenuVisible] = useState(false);
    const isSmScrn = useMediaQuery({ query: '(min-width: 600px)' })

    function handleDropDown(){
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
            <button
                type= "button"
                className="headerSticky__icon account material-symbols-outlined"
            >
                person
            </button>
            <button
                type= "button"
                className="headerSticky__icon heart material-symbols-outlined"
            >
                favorite
            </button>
            <button
                type= "button"
                className="headerSticky__icon bag material-symbols-outlined"
            >
                local_mall
            </button>
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
            <button
                type= "button"
                className="headerSticky__icon search material-symbols-outlined"
            >
                search
            </button>
        {isSmScrn ? <HeaderIcon
            src={"../src/assets/methuselah-logo.svg"}
            alt={"methuselah logo"}
            btnClass={"headerSticky__icon logo"}
        /> 
            :
            <button
                type= "button"
                className="headerSticky__icon menu material-symbols-outlined"
                onClick = {handleDropDown}
            >
                menu
            </button>
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