
import React, { useState, useEffect } from 'react';
import './style.css';

const Complex_Options_Section = () => {

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

    const show = scrollPosition > 1500 ? '1' : '0';

    return (
        <section className="Options_Section" style={{ opacity: show }}>
            <div className="Option">
                <div className="Option_Img">
                    {/* <img src={require('https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-1.png')} /> */}
                </div>
                <div>
                    <h3>SMART LIVING</h3>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium</p>
                </div>
            </div>
            <div className="Option">
                <div className="Option_Img">
                    {/* <img src={require('https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-2.png')} /> */}
                </div>
                <div>
                    <h3>ECO CONSTRUCTION</h3>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium</p>
                </div>
            </div>
            <div className="Option">
                <div className="Option_Img">
                    {/* <img src={require('https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-7.png')} /> */}
                </div>
                <div>
                    <h3>WINDOW IN BATHROOM</h3>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium</p>
                </div>
            </div>
            <div className="Option">
                <div className="Option_Img">
                    {/* <img src={require('https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-4.png')} /> */}
                </div>
                <div>
                    <h3>ATRACTIVE LOCATION</h3>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium</p>
                </div>
            </div>
            <div className="Option">
                <div className="Option_Img">
                    {/* <img src={require('https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-8.png')} /> */}
                </div>
                <div>
                    <h3>RECEPTION 24/7</h3>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium</p>
                </div>
            </div>
            <div className="Option">
                <div className="Option_Img">
                    {/* <img src={require('https://hendon.qodeinteractive.com/wp-content/uploads/2020/06/icon-img-6.png')} /> */}
                </div>
                <div>
                    <h3>AWARDED DESIGN</h3>
                </div>
                <div>
                    <p>At vero eos et accusamus et iusto odio dignissi ducimus qui blan ditiis praesentium</p>
                </div>
            </div>
        </section>
    )
}

export default Complex_Options_Section