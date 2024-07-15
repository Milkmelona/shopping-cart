import React from "react";
import "../styles/header.scss"

function HeaderIcon({
    src,
    alt,
    btnClass,
    onClick
}){
    return (
        <button
                type="button"
                className="header__btn"
                >
                <img
                    src={src} 
                    alt={alt}
                    className={btnClass}
                    onClick = {onClick}
                />
        </button>
    )
}
export default HeaderIcon
