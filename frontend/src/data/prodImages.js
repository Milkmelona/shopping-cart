import products from "./products";

const productInfo = products.map((item) => 
    Object.freeze(getImg(item))
);

function getImg(item) {
  return {
    ...item,
    image: handleImgUrl(item.number, false),
    compressedImg: handleImgUrl(item.number, true)
  };
}

function handleImgUrl(number, isCompressed) {
    // Define the base directory
    const baseDirectory = isCompressed
      ? 'Compressed-Unsplash-Images'
      : 'Products';
  
    // Define the image file name
    const fileName = isCompressed ? `product-img-${number}-min` : `product-img-${number}`;
  
    // Construct the complete image URL
    const imgUrl = new URL(`../assets/${baseDirectory}/${fileName}.jpg`, import.meta.url).href;
    
    return imgUrl;
  }

export default productInfo;