import React from "react";
import githubIcon from "../assets/github-icon.png"
import "../styles/footer.scss"
import Phone from "../assets/phone.svg"
import Mail from "../assets/mail.svg"
import Chat from "../assets/chat.svg"
import Button from "./Buttons"

function Footer(){
    return(
        <section className="footer">
            <div className="footer__emailForm">
                <h3>Stay in the Sparkling Loop!</h3>
                <div className="footer__emailForm-wrapper">
                <p>Get 5% off on selected items by subscribing to our Newsletter</p>
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
                            <img src= {Phone} alt="Phone logo" className="footer__info-contact-icon"/>
                            <span>(000)<br/>-SELAH</span>
                        </div>
                        <div className="footer__info-contact">
                            <img src= {Mail} alt="Mail logo" className="footer__info-contact-icon"/>
                            <span>support<br/>@methuselah.com</span>
                        </div>
                        <div className="footer__info-contact">
                            <img src= {Chat} alt="Chat logo" className="footer__info-contact-icon"/>
                            <span>Chat<br/>with us</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <div className="footer__copyright-top">
                <img src={githubIcon} alt="Github Icon" className="footer__copyright-icon" />
                <span>Developed by Bea Austria</span>
                </div>
                <p className="footer__copyright-bottom">
                    &copy; Copyright 2023 Bea Austria. All Rights Reserved.
                </p>
            </div>
        </section>
    )

}

export default Footer