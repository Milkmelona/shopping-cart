import React from "react";
import "../styles/search.scss";

function Searchpanel({
    handleClick
}) {

    return (
        <>
        <div className="searchpanel__overlay">
        </div>   
        <div className="searchpanel">
            <button
            type="button"
            className="searchpanel__btn back material-symbols-outlined"
            onClick={handleClick}
            >
                arrow_back_ios
            </button>
            <h2>Seach Our Collection</h2>
            <form className="searchpanel__wrapper">
            <input type="search" className="searchpanel__input" autoComplete="off" />
            <button
            type="submit"
            className="searchpanel__btn submit material-symbols-outlined"
            >
                go
            </button>
            </form>
            <div className="searchpanel__results"></div>
        </div>
        </>

    )
}

export default Searchpanel;