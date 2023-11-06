import React from "react";
import  productInfo  from "../data/prodImages";
import ProgressiveImage from "react-progressive-graceful-image";

function ProductItem(){
    return (
        <>
        {productInfo.map((product) => (
                    <div className="shop__products-item"  key={product.name}>
                        <div className="shop__products-img-wrapper">
                        <ProgressiveImage 
                            src={product.image}
                            placeholder={product.compressedImg}
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
        </>
    )
}

export default ProductItem;