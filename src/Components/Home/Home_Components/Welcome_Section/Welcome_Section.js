import './style.css';
import React, { useState, useEffect } from 'react';




const Welcome_Section = () => {

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
    const show = scrollPosition > 250 ? '1' : '0';
    const translateX = scrollPosition > 250 ? '0' : '150px'
    const img = scrollPosition > 250 ? '../../../../Assets/Welcome_Section_Img/home-1-background-patern-3.png' : '';
    const bgcolor = scrollPosition > 250 ? ' #0B0606' : '#fff'
    const color = scrollPosition > 250 ? '#fff' : 'rgb(53, 53, 53)'
    const anim = scrollPosition > 250 ? 'widthh 2s ease-in-out forwards' : 'none' ;

    return (
        <section className='Welcome_Section' style={{opacity:show, backgroundImage : img,backgroundColor : bgcolor }}>
            <div className='Text_Content' >
                <div>
                    <h1 style={{ color:color}}>
                        MODERN<br />
                        SPACES AND<br />
                        PREMIUM APARTMENT<br />
                        COMPLEXES
                    </h1>
                </div>
                <div>
                    <p>
                        WELCOME TO HENDON RESIDENCE SHOWCASE
                    </p>
                </div>
            </div>
            <div className='Img' style={{ opacity: show,translate: translateX }}>
                <div  style={{ opacity: show,translate: translateX}}>
                    <div style={{animation: anim }}></div>
                </div>
            </div>
        </section>
    )
}

export default  Welcome_Section