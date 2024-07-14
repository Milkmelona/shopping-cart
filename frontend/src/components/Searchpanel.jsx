import React, { useEffect } from "react";
import "../styles/search.scss";
import productInfo from "../data/prodImages";

import { useState} from "react";
import { Link } from "react-router-dom";
import currencyFormat from "../utils/currencyFormat";

function Searchpanel({
    handleClick
}) {
        const[searchTerm, setSearchTerm] = useState('');
        const[searchResults, setSearchResults] = useState([]);

        useEffect(()=> {

            if (searchTerm.trim() === ''){
                setSearchResults([])
                return
            }
            const results = productInfo.filter((item)=> 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setSearchResults(results);
        },[searchTerm])

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
            <input type="search" className="searchpanel__input" autoComplete="off" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button
            type="submit"
            className="searchpanel__btn submit material-symbols-outlined"
            >
                go
            </button>
            </form>
            <div className="searchpanel__results">
                {searchResults.map((item) => (
                    <Link key={item.id} className='searchpanel__results-item' to={`shop/${item.id}`} onClick={handleClick}>
                        <img src={item.image} alt={item.alt} />
                        <div className="searchpanel__results-text">
                            <span>{item.name}</span>
                            <span>{currencyFormat(item.price)}</span>
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
        </>

    )
}

export default Searchpanel;