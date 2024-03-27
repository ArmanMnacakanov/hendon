import './style.css';
import React, { useState, useEffect } from 'react';




const Furniture_Elements_Section = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    // const isSmallScreen = windowWidth <= 768 && windowWidth >= 320;
    const show = scrollPosition > 650 ? '1' : '0';
    const translateX = scrollPosition > 650 ? '0' : '150px'
    const img = scrollPosition > 650 ? '../../../../Assets/Welcome_Section_Img/home-1-background-patern-3.png' : '';
    const bgcolor = scrollPosition > 650 ? ' #202020' : '#fff'
    const color = scrollPosition > 650 ? '#fff' : 'rgb(53, 53, 53)'

    return (
        <section className='Furniture_Elements_Section' style={{ opacity: show, backgroundImage: img, backgroundColor: bgcolor }}>
            <div className='Text_Content' >
                <div>
                    <h1 style={{ color: color }}>
                        CUSTOM <br />
                        INTERIORS & <br />
                        DESIGNERS <br />
                        FURNITURE<br />
                        ELEMENTS
                    </h1>
                </div>
                <div>
                    <p>
                        AT VERO EOS ET ACCUS AMUSET IUSTO ODIO
                    </p>
                </div>
            </div>
            <div className='Img' style={{ opacity: show, translate: translateX }}></div>
        </section>
    )
}

export default Furniture_Elements_Section