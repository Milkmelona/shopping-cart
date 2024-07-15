import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/headerSticky.scss"
import Searchpanel from "./Searchpanel";
import LogIn from "./LogIn";
import NavBar from "./PageNavigation";
import { Link } from "react-router-dom";
import logo from "../assets/methuselah-logo.svg";
import { HeaderStickyLeftPaths} from "../data/HeaderNav";

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
        {HeaderStickyLeftPaths.map((path, index) => (
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
        {isSmScrn
        ?
        <NavBar/>
        :
        <div className="headerSticky__logo">
            <Link
                to="/"
                className="header__btn"
            >
                <img
                    src={logo} 
                    alt={"Methuselah logo"}
                    className={"headerSticky__icon logo"}
                />
            </Link>
        </div>
        }
        <div className="headerSticky__icons right">
            <Link
                to="#"
                className="headerSticky__icon search material-symbols-outlined"
                onClick={handleSearchBtn}
            >
                search
            </Link>
            {isSmScrn ? 
            <Link
            to="/"
            className="header__btn"
            >
                <img
                    src={logo} 
                    alt={"Methuselah logo"}
                    className={"headerSticky__icon logo"}
                />
            </Link>
                :
            <Link
                to="#"
                className="headerSticky__icon menu material-symbols-outlined"
                onClick = {handleDropDown}
            >
                menu
            </Link>
            }
        </div>
        {isMenuVisible && 
            <div className="headerSticky__list">
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