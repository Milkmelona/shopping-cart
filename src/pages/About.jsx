import React from "react";
import "../styles/about.scss";
import img1 from "../assets/Unsplash Images/about-img-1.jpg";
import img2 from "../assets/Unsplash Images/about-img-2.jpg";
import img1Comp from "../assets/Compressed-Unsplash-Images/about-img-1-min.jpg"
import img2Comp from "../assets/Compressed-Unsplash-Images/about-img-2-min.jpg"
import Imgwrapper from "../components/Imagewrapper";
import ProgressiveImage from "react-progressive-graceful-image";
import Button from "../components/Buttons";

function About(){
    return(
    <main className="about">
        <section className="about__intro">
            <h3>Our Celestial Journey Through Time</h3>
            <p> Welcome to Methuselah, where the beauty of the universe meets the elegance of jewelry.
                We believe that every woman is a shining star in her own right, 
                and our mission is to adorn her with celestial treasures that capture the essence of the cosmos.</p>
        </section>
        <section className="about__info-container">
            <Imgwrapper className="about__img-wrapper panel1">
            <ProgressiveImage
                src={img1}
                placeholder={img1Comp}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = "Woman in a silk dress wearing necklaces"
                        className = {`about__img img1 ${
                            loading && 'img--loading'}`
                        }
                        loading = "lazy"
                        />
                    )}
            </ProgressiveImage>
            </Imgwrapper>
            <div className="about__text-wrapper panel2">
            <h3>The Birth of Methuselah</h3>
            <p>Our story began with a small group of artisans who shared a common love for celestial wonders. This vision led to the birth of Methuselah, 
            a jewelry store unlike any other, where we aimed to capture the essence of the universe in every piece.</p>
            <Button
                    text = {"Shop Now"}
                    color = {"#c4aeac"}
                    fontSize ={21}
                    type = {"button"}
                    className = {"hero-item__wrapper-btn"}
                    />
            </div>
            <div className="about__text-wrapper panel3">
            <h3>Empowering Women Through Time</h3>
            <p>Empowering women to embrace their own inner light, strength, and individuality. 
            We believe that our jewelry serves as a bridge between the ancient wisdom of the stars and the modern woman's journey.</p>
            <Button
                    text = {"Shop Now"}
                    color = {"#c4aeac"}
                    fontSize ={21}
                    type = {"button"}
                    className = {"hero-item__wrapper-btn"}
                    />
            </div>
            <Imgwrapper className="about__img-wrapper panel4">
            <ProgressiveImage
                src={img2}
                placeholder={img2Comp}
                >
                    {(src, loading) => (
                        <img
                        src = {src}
                        alt = "Woman in a silk dress wearing necklaces"
                        className = {`about__img img1 ${
                            loading && 'img--loading'}`
                        }
                        loading = "lazy"
                        />
                    )}
            </ProgressiveImage>
            </Imgwrapper>
        </section>
        {/* <section className="about__values">
            <div className="about__values-container">
                <h3>Personalized Assistance</h3>
                <p>When you visit our showrooms, you will have the opportunity to touch and try on our exquisite pieces, guided by our knowledgeable and friendly staff.
                   They will provide personalized assistance to help you select the perfect celestial jewelry that resonates with your unique style and cosmic journey.</p>
            </div>
            <div className="about__values-container">
                <h3>Events and Workshops</h3>
                <p>In addition to our showrooms, we occasionally host celestial-themed events and workshops to deepen your connection with the universe. 
                   Join us for stargazing evenings, jewelry-making classes, and talks about the symbolism of the cosmos in art and culture.</p>
            </div>
            <div className="about__values-container">
                <h3>Join Our Celestial Community</h3>
                <p>Whether you're a seasoned astronomer, a budding stargazer, or simply someone who appreciates the beauty of the cosmos, we invite you to join our celestial community. 
                   Connect with us, engage in the wonders of the universe, and become a part of our mission to empower and inspire.</p>
            </div>
        </section> */}
        <section className="about__locations">
            <div className="about__text-wrapper loc">
            <h3>Discover Our Showroom Locations</h3>
            <p>While our celestial jewelry is available online for your convenience, we also believe in the beauty of physical experiences. 
               We have thoughtfully curated showrooms in several enchanting locations where you can explore our celestial creations in person.</p>
            </div>
            <div className="about__locations-main">
            <ul>
                <h3>Stellar Haven, New York City</h3>
                <li>Address: 123 Celestial Avenue, Suite 101, New York, NY</li>
                <li>Hours: Monday to Saturday, 10:00 AM - 7:00 PM</li>
                <li>Phone: (555) 123-4567</li>
            </ul>
            <ul>
                <h3>Astral Adornments, Paris</h3>
                <li>Address: 101 Etoile Boulevard, Paris, France</li>
                <li>Hours: Monday to Saturday, 10:00 AM - 7:00 PM</li>
                <li>Phone: +33 1 2345 6789</li>
            </ul>
            <ul>
                <h3>Galaxy Gems, London</h3>
                <li>Address: 789 Orion Road, London, UK</li>
                <li>Hours: Monday to Friday, 9:30 AM - 6:30 PM; Saturday, 10:00 AM - 4:00 PM</li>
                <li>Phone: +44 20 1234 5678</li>
            </ul>
            </div>
        </section>
    </main>
    )
}

export default About;