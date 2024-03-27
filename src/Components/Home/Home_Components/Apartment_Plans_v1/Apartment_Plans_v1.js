import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';


const Apartment_Plans_Component = () => {

    const initialImage = 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-1.png';
    const [galleryImage, setGalleryImage] = useState(initialImage);

    const handleDivClick = (image) => {
        setGalleryImage(image);
    };

    return (
        <section className="Apartment_Plans_Box_v1">
            <div className="Title_Box">
                <div>
                    <h1>APARTMENT PLANS</h1>
                </div>
                <div>
                    <p>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO</p>
                </div>
            </div>
            <div className="Container">
                <div>
                    <button onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-1.png')}>APARTMENT</button>
                    <button onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-2.png')}>SIMPLEX</button>
                    <button onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-1.png')}>DUPLEX</button>
                    <button onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-2.png')}>DOUBLE HEIGHT</button>
                    <button onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-1.png')}>STUDIO</button>
                    <button onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/mapa-2.png')}>PENTHOUSE</button>
                </div>
                <div style={{ backgroundImage: `url(${galleryImage})` }}></div>
                <div>
                    <div>
                        <div>
                            <h3>floor</h3>
                            <span>2</span>
                        </div>
                        <div>
                            <h3>rooms</h3>
                            <span>3</span>
                        </div>
                        <div>
                            <h3>area m2</h3>
                            <span>200</span>
                        </div>
                        <div>
                            <h3>parking</h3>
                            <span>1</span>
                        </div>
                    </div>
                    <div>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis prae sentium voluptatum deleniti.
                        </p>
                    </div>
                    <div>
                       <Link to={'Complexpage'}>shcedule</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apartment_Plans_Component