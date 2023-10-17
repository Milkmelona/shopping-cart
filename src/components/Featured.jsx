import featuredImgs from "../data/featuredItems"
import React from "react"
import Flickity from "react-flickity-component";
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/featured.scss"
import Imgwrapper from "./Imagewrapper";

function Featured(){
    const flickityOptions = {
        fade: true,
        wrapAround: true,
        initialIndex: 0,
        autoPlay: 15000,
        pauseAutoPlayOnHover: false,
    }

    return(
        <section className="feature">
        <h3 className="feature__title">Featured Collection</h3>
        <Flickity options={flickityOptions} className="feature__products" elementType="div">
        {featuredImgs.map((item)=> (
            <div key={item.id} className='feature-item'>
                <Imgwrapper
                className="feature-item__img-wrapper"
                >
                <ProgressiveImage 
                src={item.src}
                placeholder={item.compSrc}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = {item.alt}
                        className = {`feature-item__img ${
                            loading && 'img-loading'}`
                        }
                        loading = "lazy"
                        ></img>
                    )}
                </ProgressiveImage>
                </Imgwrapper>
            </div>
        ))}
        </Flickity>
        </section>
    )
}
export default Featured