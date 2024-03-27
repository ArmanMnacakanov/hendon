import React, { useState, useEffect } from 'react';
import './style.css'
import { Link } from "react-router-dom";



const Choose_ad_Apartment = () => {

    const Complexes = [
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-1.jpg',
            name: 'WEST COMPLEX',
            info: 'FROM 120 M2',
            gallery: [
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg'
            ]
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-2.jpg',
            name: 'WEST COMPLEX',
            info: 'FROM 120 M2',
            gallery: [
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg'
            ]
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-3.jpg',
            name: 'WEST COMPLEX',
            info: 'FROM 120 M2',
            gallery: [
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg'
            ]
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-4.jpg',
            name: 'WEST COMPLEX',
            info: 'FROM 120 M2',
            gallery: [
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg'
            ]
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-5.jpg',
            name: 'WEST COMPLEX',
            info: 'FROM 120 M2',
            gallery: [
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg'
            ]
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-6.jpg',
            name: 'WEST COMPLEX',
            info: 'FROM 120 M2',
            gallery: [
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-1.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-2.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-3.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-4.jpg',
                'https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/image-map-5.jpg'
            ]
        }
    ]

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

    const show = scrollPosition > 3800 ? '1' : '0';


    return (
        <section className="Choose_Apartment_Container" style={{opacity:show }}>
            <div>
                <div>
                    <h1>CHOOSE AN APARTMENT</h1>
                </div>
                <div>
                    <p>
                        AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO
                    </p>
                </div>
            </div>
            <div className="Choose_Complexes_Box">
                {
                    Complexes.map((item) => (
                        <Link className="Complex" to='Complexpage'>
                            <div className="Complex_Img">
                                <img src={item.img} />
                            </div>
                            <div className="Complex_Info">
                                <div>
                                    <h3>{item.name}</h3>
                                </div>
                                <div>
                                    <span>{item.info}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}

export default Choose_ad_Apartment