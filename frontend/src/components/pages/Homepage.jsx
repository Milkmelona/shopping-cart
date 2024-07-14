import React from "react";
import "../../styles/homepage.scss"
import Hero from "../../components/Hero";
import Featured from "../../components/Featured";
import FeaturedCollection from "../../components/FeaturedColl";
import Description from "../../components/Description";

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