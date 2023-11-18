import React from "react";
import { useState } from "react";
import "../styles/LogIn.scss";

function LogIn({
    handleClick
}){
    const[isRegistered, setIsRegistered] = useState(true)

    function handleRegistration(){
        setIsRegistered(!isRegistered);
    }

    function handleForgotPw(){
        //DO SOMETHING
    }

    return (

    <main className="logIn"> 
        <div className="logIn__form">
        <button type="button" className="logIn__close material-symbols-outlined" onClick={handleClick}>
            close
        </button>
        <h2>{isRegistered ? "Sign In" : "Register"}</h2>
        <form className="logIn__input">
            {isRegistered ? 
            "" 
            :
            <> 
            <div className="logIn__input-wrapper">
                <label htmlFor="firstName">First Name*</label>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name*</label>
                <input type="text" name="lastName" id="lastName" />
            </div>
                <label htmlFor="userName">Username*</label>
                <input type="text" name="userName" id="userName" />
            </> }
            <label htmlFor="email">{isRegistered ? "Email or Username*" : "Email*"}</label>
            <input type="email" name="email" id="emailLogIn" />
            <label htmlFor="password">Password*</label>
            <input type="password" name="password" id="password"/>
            <button type="submit">{isRegistered ? "Sign In" : "Sign Up"}</button>
        </form>
        <span>
            {isRegistered ?
            <>Don't have an account? <a onClick={handleRegistration}>Register here</a>
            <br/>
            <a onClick={handleForgotPw}>Forgot Password?</a>
            </>
            : 
            <>Already have an account? <a onClick={handleRegistration}>Sign in here</a></>
            }
        </span>
        </div>
    </main>
    
    )
}

export default LogIn