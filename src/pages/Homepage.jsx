import React from "react";
import Header from "../components/Header";
import "../styles/homepage.scss"
import Button from "../components/Buttons";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import FeaturedCollection from "../components/FeaturedColl";
import Description from "../components/Description";

function Homepage(){
return(
    <div className="homepage">
        <Hero/>
        <FeaturedCollection/>
        <Featured/>
        <Description/>
    </div>
)


}

export default Homepage