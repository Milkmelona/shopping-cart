import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import img1 from "../assets/Unsplash Images/featured-collection-img-1.jpg"
import img1Comp from "../assets/Compressed Unsplash Images/featured-collection-img-1-min.jpg"
import img2 from  "../assets/Unsplash Images/featured-collection-img-2.jpg"
import img2Comp from  "../assets/Compressed Unsplash Images/featured-collection-img-2-min.jpg"
import Button from "./Buttons";

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
                        />
                    )}
              </ProgressiveImage>
              </Imgwrapper>
        </div>
        <div className="fc__container">
              <div className="fc__text-wrapper">
              <h4 className="fc__title">Gaia</h4>
              <p className="fc__desc2">Crafted from ethically sourced gemstones and sustainable materials,
                 this collection embodies the harmony between art and the environment, allowing you to wear the elegance of nature with every piece.</p>
              </div>
              <Imgwrapper className="fc__img-wrapper">
              <ProgressiveImage
                src={img2}
                placeholder={img2Comp}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = "Gold earrings on a blue background"
                        className = {`fc__img img2 ${
                            loading && 'img--loading'}`
                        }
                        loading = "lazy"
                        />
                    )}
              </ProgressiveImage>
              </Imgwrapper>
              <Button
              text = {"Show Collection"}
              color = {"#a1b4bf"}
              hoverColor = {"#e2ac8d"}
              fontSize = {20}
              type={"button"}
              className = {"fc_btn"}
              />
        </div>

        </section>

    )
}

export default FeaturedCollection;