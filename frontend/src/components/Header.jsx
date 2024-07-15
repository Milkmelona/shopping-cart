import React from "react";
import { useState } from "react";
import "../styles/header.scss"
import NavBar from "./PageNavigation";
import { useMediaQuery } from 'react-responsive';
import Searchpanel from "./Searchpanel";
import LogIn from "./LogIn";
import logo from "../assets/methuselah-logo.svg";
import { Link } from "react-router-dom";
import { HeaderPaths } from "../data/HeaderNav";
function Header(){

    const[isMenuVisible, setIsMenuVisible] = useState(false);
    const[isSearchVisible, setIsSearchVisible] = useState(false)
    const isMedScrn = useMediaQuery({ query: '(min-width: 900px)' })
    const[isLogInVisible, setIsLogInVisible] = useState(false);
    
    function handleAccount(){
        setIsLogInVisible(!isLogInVisible);
    }

    function handleDropDown(){
        setIsMenuVisible(!isMenuVisible);
    }   
    
    function handleSearchBtn(){
        setIsSearchVisible(!isSearchVisible);

        if (isMenuVisible){
        handleDropDown();
        }
    }

return (
    <div className="header">
        <div className="header__top">
            <Link
                to="/"
                className="header__btn"
            >
                <img
                    src={logo} 
                    alt={"Methuselah logo"}
                    className={"header__icon logo"}
                />
            </Link>
            <h1>Methuselah</h1>
            {isMedScrn 
            ?       
            <div className="header__list flex">
            {HeaderPaths.map((path, index) => (
                <Link
                    to={path.path}
                    className={path.className}
                    key={index}
                    onClick={
                        path.name === 'search' 
                            ? handleSearchBtn 
                            : path.name === 'person' 
                                ? handleAccount 
                                : undefined
                    }
                >
                {path.name}
                </Link>
            ))
            }
            </div>
            : 
            <div className="header__menu-wrapper">
                <button
                    className="header__icon menu material-symbols-outlined"
                    onClick = {handleDropDown}
                >
                    menu
                </button>
                {isMenuVisible && 
                <div className="header__list">
                {HeaderPaths.map((path, index) => (
                    <Link
                        to={path.path}
                        className={path.className}
                        key={index}
                        onClick={
                            path.name === 'search' 
                                ? handleSearchBtn 
                                : path.name === 'person' 
                                    ? handleAccount 
                                    : undefined
                        }
                    >
                    {path.name}
                    </Link>
                ))
                }
                </div>}
            </div> 
            }
        </div>
        <NavBar/>
        {isSearchVisible && 
            <Searchpanel
            handleClick= {handleSearchBtn}/>
        }
        {isLogInVisible &&
            <LogIn
            handleClick={handleAccount}/>
        }
    
    </div>
)
}
export default Header