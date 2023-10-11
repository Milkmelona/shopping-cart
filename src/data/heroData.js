import hero1 from "../assets/Unsplash Images/hero-img-1.jpg"
import hero2 from "../assets/Unsplash Images/hero-img-2.jpg"
import hero3 from "../assets/Unsplash Images/hero-img-3.jpg"
import hero4 from "../assets/Unsplash Images/hero-img-4.jpg"


import compressedHero1 from "../assets/Compressed Unsplash Images/hero-img-1-min.jpg"
import compressedHero2 from "../assets/Compressed Unsplash Images/hero-img-2-min.jpg"
import compressedHero3 from "../assets/Compressed Unsplash Images/hero-img-3-min.jpg"
import compressedHero4 from "../assets/Compressed Unsplash Images/hero-img-4-min.jpg"


const heroImages = [
    {
        id: "hero-img-1",
        src: hero1,
        compSrc: compressedHero1,
        alt: "a woman showing her left hand wearing multiple accessories" 
    },

    {
        id: "hero-img-2",
        src: hero2,
        compSrc: compressedHero2,
        alt: "a woman's hand wearing multiple accessories under the sun"
    },

    {
        id: "hero-img-3",
        src: hero3,
        compSrc: compressedHero3,
        alt: "bracelets and earings spread on a silk fabric"
    },
]

export default heroImages