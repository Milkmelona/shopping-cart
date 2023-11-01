import React from "react";
import Flickity from "react-flickity-component";
import ProgressiveImage from "react-progressive-graceful-image";
import heroImages from "../data/heroData";
import "../styles/hero.scss"
import Buttons from "./Buttons"

function Hero(){
    const flickityOptions = {
        fade: true,
        wrapAround: true,
        initialIndex: 0,
        autoPlay: 15000,
        pauseAutoPlayOnHover: false,
    }

    return(
        <Flickity options={flickityOptions} className="hero" elementType="section">
        {heroImages.map((item)=> (
            <div key={item.id} className='hero-item'>
                <ProgressiveImage 
                src={item.src}
                placeholder={item.compSrc}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = {item.alt}
                        className = {`hero-item__img ${
                            loading && 'img--loading'}`
                        }
                        />
                    )}
                </ProgressiveImage>
                <div className="hero-item__wrapper">
                    <div className="hero-item__wrapper-text">
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                    </div>
                    <Buttons
                    text = {"Shop Now"}
                    color = {"#c4aeac"}
                    fontSize ={21}
                    type = {"button"}
                    className = {"hero-item__wrapper-btn"}
                    />
                </div>
            </div>
        ))}
        </Flickity>
    )
}

export default Hero