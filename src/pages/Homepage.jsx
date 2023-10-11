import React from "react";
import Header from "../components/Header";
import "../styles/homepage.css"
import Button from "../components/Buttons";
import Hero from "../components/Hero";

function Homepage(){
return(
    <div className="homepage">
        <Hero/>
        <div className="secondSec">
        <div className="description">
            <h2>Some Cool Heading</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>Officia deleniti minus totam ducimus possimus sequi, sint molestias, fugiat quis unde ipsam dolorem esse. Eos officia voluptatibus dignissimos omnis harum eveniet.</p>
            <Button
            text = {"Show More"}
            color = {"#f3acbc"}
            />
        </div>
        
        </div>
    </div>
)


}

export default Homepage