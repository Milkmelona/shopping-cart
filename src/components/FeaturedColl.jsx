import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import img1 from "../assets/Unsplash Images/featured-collection-img-1.jpg"
import img1Comp from "../assets/Compressed Unsplash Images/featured-collection-img-1-min.jpg"
import img2 from  "../assets/Unsplash Images/featured-collection-img-2.jpg"
import img2Comp from  "../assets/Compressed Unsplash Images/featured-collection-img-2-min.jpg"

import Imgwrapper from "./Imagewrapper";
import "../styles/featuredColl.scss"

function FeaturedCollection(){

    return(
        <section className="fc">
        <div className="fc__container">
              <Imgwrapper className="fc__img-wrapper">
              <ProgressiveImage
                src={img1}
                placeholder={img1Comp}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = "Woman in a suit wearing jewelries"
                        className = {`fc__img img1 ${
                            loading && 'img--loading'}`
                        }
                        loading = "lazy"
                        ></img>
                    )}
              </ProgressiveImage>
              </Imgwrapper>
              <div className="fc__text-wrapper">
              <h4 className="fc__title-collection">Juno</h4>
              <p>Each handcrafted jewel in this collection is a radiant testament to enduring beauty,
                 making it the ideal choice for those seeking to adorn themselves with a touch of eternal grace.</p> 
             </div>
        </div>
        <div className="fc__container">
              <div className="fc__text-wrapper">
              <h4 className="fc__title-collection">Gaia</h4>
              <p className="fc__desc2">Crafted from ethically sourced gemstones and sustainable materials,
                 this collection embodies the harmony between art and the environment, allowing you to wear the elegance of nature with every piece</p>
              </div>
              <Imgwrapper className="fc__img-wrapper">
              <ProgressiveImage
                src={img2}
                placeholder={img2Comp}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = "Woman in a white dress wearing jewelries"
                        className = {`fc__img img2 ${
                            loading && 'img--loading'}`
                        }
                        loading = "lazy"
                        ></img>
                    )}
              </ProgressiveImage>
              </Imgwrapper>
        </div>

        </section>

    )
}

export default FeaturedCollection;