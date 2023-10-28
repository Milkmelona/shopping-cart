import React from "react";
import products from "../data/products";
import bannerImg from "../assets/Products/products-banner-img.jpg"
import bannerImgComp from "../assets/Compressed Unsplash Images/products-banner-img-min.jpg"
import ProgressiveImage from "react-progressive-graceful-image";

function Shop(){
    return(
        <div className="shop">
            <section className="shop__banner">
            <ProgressiveImage
            src= {bannerImg}
            placeholder = {bannerImgComp}>
                {(src, loading) => (
                    <img
                    src = {src}
                    className = {`banner-item__img ${
                        loading && 'img--loading'}`
                    }
                    loading = "lazy"
                    />
                )}
            </ProgressiveImage>
            </section>
            <ul className="shop__categories">
                <li>New Arrival</li>
                <li>Sale!</li>
                <li>All Products</li>
                <li>Earrings</li>
                <li>Bracelet</li>
                <li>Necklace</li>
                <li>Anklet</li>
                <li>Ring</li>
            </ul>
            {/* <section className="shop__products">
                {products.map((product) => (
                    <div className="shop__products-item"  key={product.id}>
                        <ProgressiveImage 
                            src={product.src}
                            placeholder={product.compSrc}
                            >
                            {(src, loading) => (
                                <img
                                src = {src}
                                alt = {product.alt}
                                className = {`product-item__img ${
                                    loading && 'img--loading'}`
                                }
                                loading = "lazy"
                                />
                            )}
                        </ProgressiveImage>
                    </div>
                )) }
            </section> */}
        </div>
    )
}

export default Shop