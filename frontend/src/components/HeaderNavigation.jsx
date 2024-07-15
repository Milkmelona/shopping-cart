
import { Link } from "react-router-dom";

function HeaderNavigation({handleSearchBtn, handleAccount}){
    return(
        <>
            <Link
                to="#"
                className="header__icon search material-symbols-outlined"
                onClick={handleSearchBtn}
            >
                search
            </Link>
            <Link
                to="#"
                className="header__icon account material-symbols-outlined"
                onClick={handleAccount}
            >
                person
            </Link>
            <Link
                to="/favorites"
                className="header__icon heart material-symbols-outlined"
            >
                favorite
            </Link>
            <Link
                to="/cart"
                className="header__icon bag material-symbols-outlined"
            >
                local_mall
            </Link>
        </>
    )
}

export default HeaderNavigation;