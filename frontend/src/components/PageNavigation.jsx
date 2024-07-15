import React from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

function NavBar(){
  return(
    <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="navBar"
    >
      <ul>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
        >
          About Us
        </NavLink>

        <NavLink
          to="/faqs"
        >
          FAQs
        </NavLink>
      </ul>         
    </motion.nav>
    
    )
}

export default NavBar