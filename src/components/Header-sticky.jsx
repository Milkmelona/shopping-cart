import React from "react";
import { useState } from "react";
import HeaderIcon from "./HeaderButtons";
import { useMediaQuery } from "react-responsive";
import "../styles/headerSticky.scss"
import Searchpanel from "./Searchpanel";
import LogIn from "./LogIn";
import NavBar from "./Navigation";

function HeaderSticky(){

    const[isMenuVisible, setIsMenuVisible] = useState(false);
    const[isSearchVisible, setIsSearchVisible] = useState(false);
    const isSmScrn = useMediaQuery({ query: '(min-width: 600px)' })
    const[isLogInVisible, setIsLogInVisible] = useState(false);

    function handleDropDown(){
        setIsMenuVisible(!isMenuVisible);
    }

    function handleSearchBtn(){
        setIsSearchVisible(!isSearchVisible);

        if (isMenuVisible){
        handleDropDown();
        }
    }

    function handleAccount(){
        setIsLogInVisible(!isLogInVisible);
    }

    return(
    <div className="headerSticky">
    <div className="headerSticky__icons left">
            <button
                type= "button"
                className="headerSticky__icon account material-symbols-outlined"
                onClick={handleAccount}
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
     {isSmScrn ? <div className="headerSticky__list row">
                <NavBar/>
            </div> : <div className="headerSticky__logo">
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
                onClick={handleSearchBtn}
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
     {isMenuVisible && <div className="headerSticky__list">
            <NavBar/>
            </div>}
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

export default HeaderSticky;