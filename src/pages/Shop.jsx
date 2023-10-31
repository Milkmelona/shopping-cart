import React from "react";
import products from "../data/products";
import bannerImg from "../assets/Products/products-banner-img.jpg"
import bannerImgComp from "../assets/Compressed Unsplash Images/products-banner-img-min.jpg"
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Shop.scss"

function Shop(){
    return(
        <div className="shop">
            <section className="shop__banner">
            <div className="shop__banner-description">
                <h2 className="shop__banner-description-title">All Products</h2>
                <p>Jewelry, the embodiment of timeless beauty and personal expression, transforms simple materials into exquisite works of art.
                From shimmering diamonds to lustrous pearls, our collection encompasses a breathtaking array of 
                meticulously crafted pieces, each radiating its unique charm.
                </p>
            </div>
            <ProgressiveImage
            src= {bannerImg}
            placeholder = {bannerImgComp}>
                {(src, loading) => (
                    <img
                    src = {src}
                    className = {`shop__banner-img ${
                        loading && 'img--loading'}`
                    }
                    loading = "lazy"
                    />
                )}
            </ProgressiveImage>
            </section>
            <section className="shop__main">
                <div className="shop__product-sorter">
                    <label for="product-sorter">
                    <select name="product-sorter" id="product-sorter">
                        <option value="sale">Sale</option>
                        <option value="recommended">Recommended</option>
                        <option value="price-ascending">Price: Low to High</option>
                        <option value="price-descending">Price: High to Low</option>
                    </select>
                    </label>
                </div>
            {/* <ul className="shop__categories">
                <li className="shop__categories-selection">New Arrival</li>
                <li className="shop__categories-selection">Sale!</li>
                <li className="shop__categories-selection">All Products</li>
                <li className="shop__categories-selection">Earrings</li>
                <li className="shop__categories-selection">Bracelet</li>
                <li className="shop__categories-selection">Necklace</li>
                <li className="shop__categories-selection">Anklet</li>
                <li className="shop__categories-selection">Ring</li> 
            </ul>*/}
            <div className="shop__products">
                {products.map((product) => (
                    <div className="shop__products-item"  key={product.id}>
                        <div className="shop__products-img-wrapper">
                        <ProgressiveImage 
                            src={product.src}
                            placeholder={product.compSrc}
                            >
                            {(src, loading) => (
                                <img
                                src = {src}
                                alt = {product.alt}
                                className = {`shop__products-item-img ${
                                    loading && 'img--loading'}`
                                }
                                loading = "lazy"
                                />
                            )}
                        </ProgressiveImage>
                        </div>
                        <div className="shop__products-item-desc">
                        <h3 className="shop__products-item-title">{product.name}</h3>
                        <div className="shop__products-item-price">{product.price}</div>
                        </div>
                    </div>
                )) }
            </div>
            </section>
        </div>
    )
}

export default Shop