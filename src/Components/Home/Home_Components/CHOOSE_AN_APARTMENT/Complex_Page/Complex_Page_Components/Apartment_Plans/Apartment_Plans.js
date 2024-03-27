import React, { useState, useEffect } from 'react';
import './style.css'

const Apartment_Plans = () => {
    const initialImage = 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg';
    const [galleryImage, setGalleryImage] = useState(initialImage);

    const handleDivClick = (image) => {
        setGalleryImage(image);
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const show = scrollPosition > 3000 ? '1' : '0';

    return (
        <section className="Apartment_Plans_Section" style={{ opacity: show }}>
            <div>
                <div>
                    <h1>APARTMENT PLANS</h1>
                </div>
                <div>
                    <p>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO</p>
                </div>
            </div>
            <div className="Apartment_Plans_Box">
                <div className="Gallery_Slider" style={{ backgroundImage: `url(${galleryImage})` }}></div>
                <div className="Gallerys_Way_Box">
                    <div onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg')}></div>
                    <div onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg')}></div>
                    <div onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg')}></div>
                    <div onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg')}></div>
                    <div onClick={() => handleDivClick('https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg')}></div>
                </div>
            </div>
        </section>
    );
};

export default Apartment_Plans;


