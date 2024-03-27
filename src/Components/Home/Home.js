import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import Welcome_Section from "./Home_Components/Welcome_Section/Welcome_Section";
import Info_Section from "./Home_Components/Info_Section/Info_Section";
import Values_Of_Smart from './Home_Components/Values_Of_Smart_Section/Values_Of_Smart';
import Scedule_a_Visit from "./Home_Components/Schedule_A_Visit/Schedule_a_Visit";
import Options_Section from "./Home_Components/Options_Section/Options_Section";
import Choose_ad_Apartment from "./Home_Components/CHOOSE_AN_APARTMENT/CHOOSE_AN_APARTMENT";
import Location from "./Home_Components/Location_Component/Location";
import Apartment_Plans_v1 from './Home_Components/Apartment_Plans_v1/Apartment_Plans_v1'
import Residence_Section from "./Home_Components/Residence_section/Residence";
import './style.css';
import Stylish_News from "./Home_Components/STYLISH_NEWS/Stylish_News";
import Testimonials_Swiper from "./Home_Components/Testimonials_Swiper/Testimonials_swiper";
import Request_a_Visit from './Home_Components/REQUEST_A_VISIT/Request_a_Visit'
import Slider from "./Home_Components/Slider/Slider";

const Home = () => {
    const Banner_Img = [
        {
            img: require('../../Assets/Banner_Img/home-1-rev-background-1.jpg')
        },
        {
            img: require('../../Assets/Banner_Img/home-1-rev-background-2.jpg')
        },
        {
            img: require('../../Assets/Banner_Img/home-1-rev-background-3.jpg')
        },

    ];
    const right_slide = [
        {
            img: require('../../Assets/Banner_Img/right_slide/home-1-rev-img-1.png')
        },
        {
            img: require('../../Assets/Banner_Img/right_slide/home-1-rev-img-2.png')
        },
        {
            img: require('../../Assets/Banner_Img/right_slide/home-1-rev-img-3.png')
        }
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                (prevIndex + 1) % Banner_Img.length
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId2 = setInterval(() => {
            setCurrentImageIndex2(prevIndex2 =>
                (prevIndex2 + 1) % right_slide.length
            );
        }, 5000);

        return () => clearInterval(intervalId2);
    }, []);

    return (
        <>
            <section className="Banner_Box">
                {Banner_Img.map((image, index) => (
                    <img
                        key={index}
                        src={image.img}
                        alt={`Banner ${index + 1}`}
                        className={index === currentImageIndex ? 'visible' : 'hidden'}
                    />
                ))}
                {right_slide.map((e, index2) => (
                    <img src={e.img}
                        key={index2}
                        alt={`Banner ${index2 + 1}`}
                        className={index2 === currentImageIndex2 ? 'visible' : 'hidden'}
                    />
                ))}

                <div className="Banner_Title_Box">
                    <div>
                        <h1>residence</h1>
                    </div>
                    <div>
                        <p>Introducing a new way to showcase properties</p>
                    </div>
                </div>

                <a href="#Welcome" className="To_Down">
                    <FontAwesomeIcon icon={faDownLong} /><faDownLong />
                </a>
            </section>
            <div id="Welcome">
                <Welcome_Section />
            </div>
            <Info_Section/>
            <Values_Of_Smart/>
            <Scedule_a_Visit/>
            <Options_Section/>
            <Choose_ad_Apartment/>
            <Location/>
            <Apartment_Plans_v1/>
            <Residence_Section/>
            <Stylish_News/>
            <Testimonials_Swiper/>
            <Request_a_Visit/>
            <Slider/>
        </>
    );
};

export default Home;
