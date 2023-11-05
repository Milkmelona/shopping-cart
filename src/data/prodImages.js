import products from "./products";

const productImgs = products.map((item) => 
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
  // Define the base URL for your images
  const baseUrl = isCompressed
    ? "/Compressed Unsplash Images"
    : "/Products";

  // Define the image file name
  const fileName = isCompressed ? `product-img-min-${number}` : `product-img-${number}`;

  // Construct the complete image URL
  const imgUrl = new URL(`../assets${baseUrl}/${fileName}.jpg`, import.meta.url).href;

  return imgUrl;
}

export {productImgs}