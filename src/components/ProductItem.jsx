import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import currencyFormat from "../utils/currencyFormat";
import { Link } from "react-router-dom";

function ProductItem({productItems}){
    return (
        <>
        {productItems.map((product) => (
             <Link to={`/shop/${product.id}`} key= {product.name}>
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
                        <div className="shop__products-item-price">{currencyFormat(product.price)}</div>
                        </div>
                    </div>
            </Link>   
            ))     
            }
        </>
    )
}

export default ProductItem;