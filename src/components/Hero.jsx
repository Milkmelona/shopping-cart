import React from "react";
import Flickity from "react-flickity-component";
import ProgressiveImage from "react-progressive-graceful-image";
import heroImages from "../data/heroData";

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
            <div key={item.id} className={`heroImg-${item.id}`}>
                <ProgressiveImage 
                src={item.src}
                placeholder={item.compSrc}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = {item.alt}
                        className = {`heroImg-${item.id}`}
                        style={{ filter: loading ? 'blur(20px)' : 'none',
                        transition: 'filter 0.5s ease-in-out'}}
                        ></img>
                    )}
                </ProgressiveImage>
            </div>
        ))}
        </Flickity>
    )
}

export default Hero