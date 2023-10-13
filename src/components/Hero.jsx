import React from "react";
import Flickity from "react-flickity-component";
import ProgressiveImage from "react-progressive-graceful-image";
import heroImages from "../data/heroData";
import "../styles/hero.scss"

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
                    {(src) => (
                        <img
                        src = {src}
                        alt = {item.alt}
                        className = {'hero-item-img'}
                        ></img>
                    )}
                </ProgressiveImage>
            </div>
        ))}
        </Flickity>
    )
}

export default Hero