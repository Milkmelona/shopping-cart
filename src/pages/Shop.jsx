import products from "../data/products";
import bannerImg from "../assets/Products/products-banner-img.jpg"
import bannerImgComp from "../assets/Compressed-Unsplash-Images/products-banner-img-min.jpg"
import ProgressiveImage from "react-progressive-graceful-image";
import "../styles/Shop.scss"
import ReactPaginate from "react-paginate";
import ProductItem from "../components/ProductItem";
import  productInfo  from "../data/prodImages";
import { useState, useEffect } from "react";

function Shop(){
    const[currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const shownProds = productInfo.slice(start, end)
    const pageCount = Math.ceil(productInfo.length/ITEMS_PER_PAGE)
    

    // function handlePageChange(selectedPage){
    //     setCurrentPage(selectedPage + 1)
    // }

    function handlePageChange(){
        setCurrentPage(currentPage+1)
    }

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
                    <label htmlFor="product-sorter">
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
                <ProductItem productItems={shownProds}/>
            </div>
            <ReactPaginate
                onPageChange={handlePageChange}
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
            </section>
        </div>
    )
}

export default Shop