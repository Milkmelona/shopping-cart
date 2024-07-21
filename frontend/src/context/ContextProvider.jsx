import { useEffect, useState, useMemo } from "react";
import Context from "./Context";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

function ContextProvider({children}){
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)

    const value = useMemo(()=> ({user, cart}), [user, cart]);

    return(
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node,
};
ContextProvider.defaultProps = {
    children: <div>Default Content</div>
}

export default ContextProvider;