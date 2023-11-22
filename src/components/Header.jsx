import React from "react";
import { useState } from "react";
import "../styles/header.scss"
import HeaderIcon from "./HeaderButtons";
import NavBar from "./Navigation";
import { useMediaQuery } from 'react-responsive';
import Searchpanel from "./Searchpanel";
import LogIn from "./LogIn";

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
        <div className="header__logo">
        <HeaderIcon
            src={"../src/assets/methuselah-logo.svg"}
            alt={"methuselah logo"}
            btnClass={"header__icon logo"}
        />
        </div>
        <h1 className={`header__title ${isMedScrn? 'medScr' : ''}`}>Methuselah</h1>
        {isMedScrn ? <div className="header__list flex">
            <button
                type= "button"
                className="header__icon search material-symbols-outlined"
                onClick={handleSearchBtn}
            >
                search
            </button>
            <button
                type= "button"
                className="header__icon account material-symbols-outlined"
                onClick={handleAccount}
            >
                person
            </button>
            <button
                type= "button"
                className="header__icon heart material-symbols-outlined"
            >
                favorite
            </button>
            <button
                type= "button"
                className="header__icon bag material-symbols-outlined"
            >
                local_mall
            </button>
        </div>
        : 
        <div className="header__menu-wrapper">
        {/* <HeaderIcon
            src={"../src/assets/menu.svg"}
            alt={"menu"}
            btnClass={"header__icon menu"}
            onClick = {handleDropDown}
        /> */}
        <button
                type= "button"
                className="header__icon menu material-symbols-outlined"
                onClick = {handleDropDown}
            >
                menu
            </button>
        {isMenuVisible && <div className="header__list">
            {/* <HeaderIcon
            src={"../src/assets/search.svg"} 
            alt={"search"} 
            btnClass={"header__icon search"}
            /> */}
            <button
                type= "button"
                className="header__icon material-symbols-outlined"
                onClick={handleSearchBtn}
            >
                search
            </button>
            <button
                type= "button"
                className="header__icon account material-symbols-outlined"
                onClick={handleAccount}
            >
                person
            </button>
            <button
                type= "button"
                className="header__icon heart material-symbols-outlined"
            >
                favorite
            </button>
            <button
                type= "button"
                className="header__icon bag material-symbols-outlined"
            >
                local_mall
            </button>
        </div>}
        </div> 
        }
        </div>
        <div className="header__bottom">
       <NavBar/>
        </div>
        {isSearchVisible ? 
            <Searchpanel
            handleClick= {handleSearchBtn}/>
        : ""}
        {isLogInVisible ?
            <LogIn
            handleClick={handleAccount}/>
        : ""
        }
    
    </div>
)
}
export default Header