import React from "react";
import Imgwrapper from "../../components/Imagewrapper";
import ProgressiveImage from "react-progressive-graceful-image";
import img from "../../assets/Unsplash Images/faqs-img.jpg";
import imgComp from "../../assets/Compressed-Unsplash-Images/faqs-img-min.jpg"
import "../../styles/faqs.scss"
import FaqsItem from "../../components/faqsItem";


function Faqs(){    
    return(
        <main className="faqs">
        <section className="faqs__banner">
        <Imgwrapper className="faqs__img-wrapper">
        <ProgressiveImage
         src = {img}
         placeholder = {imgComp}
        >
            {(src, loading) => (
                <img
                src={src}
                alt = "woman wearing a gold necklace"
                className= {`faqs__img ${loading && 'img--loading'}`}
                />
            )}
        </ProgressiveImage>
        </Imgwrapper>
        <h2 className="faqs__title">Frequently Asked Questions</h2>
        </section>
        <section className="faqs__info-main">
            <div className="faqs__info-container">
                <h2>General</h2>
                <FaqsItem category="general"/>
            </div>
            <div className="faqs__info-container">
                <h2>Sizing</h2>
                <FaqsItem category = "sizing"/>
            </div>
            <div className="faqs__info-container">
                <h2>Ordering</h2>
                <FaqsItem category = "ordering"/> 
            </div>
            <div className="faqs__info-container">
                <h2>Shipping</h2>
                <FaqsItem category = "shipping"/>
            </div>
            
        </section>

        </main>
    )
}

export default Faqs;