import React from "react";
import "../styles/footer.scss"
import Button from "./Buttons"

function Footer(){
    return(
        <section className="footer">
            <div className="footer__emailForm">
                <h3>Stay in the Sparkling Loop!</h3>
                <div className="footer__emailForm-wrapper">
                <p>Get 5% off on selected items by subscribing to our Newsletter</p>
                <div className="footer__emailForm-input">
                <input type="email" 
                placeholder="Enter your email address"
                id="email"
                name="email"
                />
                <Button
                type={"submit"}
                className={"footer__btn"}
                text = {"Subscribe"}
                color = {"#d69460"}
                fontSize = {15}
                />
                </div>
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
                    <div className="footer__info-right-wrapper">
                        <div className="footer__info-contact">
                            <span className="material-symbols-outlined footer__info-contact-icon">
                            call
                            </span>
                            <span>(000)<br/>-SELAH</span>
                        </div>
                        <div className="footer__info-contact">
                            <span className="material-symbols-outlined footer__info-contact-icon">
                            mail
                            </span>
                            <span>support<br/>@methuselah.com</span>
                        </div>
                        <div className="footer__info-contact">
                            <span className="material-symbols-outlined footer__info-contact-icon">
                            chat_bubble
                            </span>
                            <span>Chat<br/>with us</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Footer