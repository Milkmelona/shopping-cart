import React from "react";
import "../styles/search.scss";

function Searchpanel({
    onClick
}) {

    return (
        <div className="search">
            <button
            type="button"
            className="search__btn back material-symbols-outlined"
            onClick={onClick}
            >
                arrow_back_ios
            </button>
            <h2>Seach Our Collection</h2>
            <form className="search__wrapper">
            <input type="search" className="search__input" autoComplete="off" />
            <button
            type="submit"
            className="search__btn submit material-symbols-outlined"
            >
                go
            </button>
            </form>
            <div className="search__results"></div>
        </div>
    )
}

export default Searchpanel;