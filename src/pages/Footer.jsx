import React from "react";
import Imgwrapper from "../components/Imagewrapper.jsx"
import ProgressiveImage from "react-progressive-graceful-image";
import backgroundImg from "../assets/Unsplash Images/email-form-img.jpg"
import backgroundImgComp from "../assets/Compressed Unsplash Images/email-form-img-min.jpg"
import "../styles/footer.scss"
import Phone from "../assets/phone.svg"
import Mail from "../assets/mail.svg"
import Chat from "../assets/chat.svg"

function Footer(){
    return(
        <section className="footer">
            <div className="footer__emailForm">
                <h3>Stay in the Sparkling Loop!</h3>
                <div className="footer__emailForm-wrapper">
                <span>Get 5% Off on selected items by subscribing to our Newsletter</span>
                <input type="email" 
                placeholder="Enter your email address"
                id="email"
                name="email"
                />
                <button
                type="submit"
                className="footer__btn"
                >Subscribe</button>
                </div>
            </div>
            <div className="footer__info">
                <div className="footer__info-left">
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="footer__info-right">
                    <h3>Talk to Methuselah</h3>
                    <span>Got any concern? We are here to assist!</span>
                    <div className="footer__info-right wrapper">
                        <div className="footer__info-right wrapper-contact">
                            <img src= {Phone} alt="Phone logo" />
                            <span>(000)-SELAH</span>
                        </div>
                        <div className="footer__info-right wrapper-contact">
                            <img src= {Mail} alt="Mail logo" />
                            <span>support@methuselah.com</span>
                        </div>
                        <div className="footer__info-right wrapper-contact">
                            <img src= {Chat} alt="Chat logo" />
                            <span>Chat with us</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Imgwrapper className="footer__emailForm">
                <ProgressiveImage
                src={backgroundImg}
                placeholder={backgroundImgComp}
                >
                    {(src, loading)=> (
                        <img
                        src= {src}
                        alt= "Jewelries laid on a mirror"
                        className= {`footer__emailForm-img ${loading && 'img--loading'}`}
                        loading="lazy"
                        />
                    )}
                </ProgressiveImage> */}
            {/* </Imgwrapper> */}
        </section>

    )

}

export default Footer