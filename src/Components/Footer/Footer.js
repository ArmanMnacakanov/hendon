import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './style.css'

const Footer = () => {
    return (
        <footer>
            <div className="Links_Container">
                <div>
                    <div>
                        <h2>CONTACT</h2>
                    </div>
                    <div>
                        <p>
                            Find out all the ways to enjoy luxury residential life around the world.
                        </p>
                    </div>
                    <div>
                        <div>
                            <span>A:</span><a href="#">SeeStrasse 21, Zurich, CH</a>
                        </div>
                        <div>
                            <span>T:</span><a href="#"> 99 4 11 78 70 14</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>faq</h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">How to schedule a viewing?</a>
                            </li>
                            <li>
                                <a href="#">Which pricing plan do I pick?</a>
                            </li>
                            <li>
                                <a href="#">How to choose the right room?</a>
                            </li>
                            <li>
                                <a href="#">How long does the process take?</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>USEFUL LINKS</h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">News</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">License</a>
                            </li>
                            <li>
                                <a href="#">Terms of service</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>ENQUIRE</h2>
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder="name" />
                        </div>
                        <div>
                            <input type="email" placeholder="email" />
                        </div>
                    </div>
                    <div>
                        <button>select</button>
                    </div>
                </div>
            </div>
            <div className="Social_Links_Box">
                <div>
                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faYoutube}/></a>
                        </li>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>MADE WITH KNOWLEDGE FOR <a href="#">© QODE INTERACTIVE</a></p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
