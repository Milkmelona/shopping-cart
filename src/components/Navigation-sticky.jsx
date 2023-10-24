import React from "react";

function NavigationSticky(){

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
    
    <ul className="navBar">
    <li>Collection</li>
    <li>Look Book</li>
    <li>About Us</li>
    <li>FAQs</li>
  </ul>
    )
}