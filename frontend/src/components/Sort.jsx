
import productInfo from "../data/prodImages";


    const sortedValues = (setting) => { 

        const sortedProducts = [...productInfo];

        return sortedProducts.sort(function(a,b){
        
        if (setting === 'price-ascending'){
           return a.price - b.price;
        }
        
        if (setting === 'price-descending')  {
           return b.price - a.price; 
        }


    })}
export default sortedValues