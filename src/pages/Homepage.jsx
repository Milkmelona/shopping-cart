import React from "react";
import Header from "../components/Header";
import "../styles/homepage.scss"
import Button from "../components/Buttons";
import Hero from "../components/Hero";
import Featured from "../components/Featured";

function Homepage(){
return(
    <div className="homepage">
        <Hero/>
        <Featured/>
    </div>
)


}

export default Homepage