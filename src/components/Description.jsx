import Quality from "../assets/Why Choose Us/Quality.svg"
import Timeless from "../assets/Why Choose Us/Timeless.svg"
import Unique from "../assets/Why Choose Us/Unique.svg"

function Description(){
    return(
        <section className="desc">
            <h2 className="desc__title">Why Choose Methuselah</h2>
            <div className="desc__container">
                <img src={Quality} alt="diamond" />
                <h3 className="desc__container-title"></h3>
                <p>Our jewelry pieces are meticulously crafted with precision and care, 
                ensuring that every detail is a work of art. Choose us for exquisite designs that will make you stand out with timeless elegance.</p>
            </div>
            <div className="desc__container">
                <img src={Timeless} alt="infinity symbol" />
                <h3 className="desc__container-title"></h3>
                <p>We take pride in offering a diverse collection of one-of-a-kind jewelry, 
                    each piece as unique as the person who wears it. Choose us for a distinct and exclusive selection that celebrates your individuality.</p>
            </div>
            <div className="desc__container">
                <img src={Unique} alt="infinity symbol" />
                <h3 className="desc__container-title"></h3>
                <p>Our jewelry transcends trends and seasons, remaining as beautiful and relevant as the day you first put it on. 
                    Choose us for timeless pieces that will become cherished heirlooms and continue to sparkle through the ages.</p>
            </div>
        </section>
    )
}