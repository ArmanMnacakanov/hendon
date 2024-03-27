import React from "react";
import './style.css'
import Welcome_Section from "../Home/Home_Components/Welcome_Section/Welcome_Section";
import Info_Section from "../Home/Home_Components/Info_Section/Info_Section";
import Values_Of_Smart from '../Home/Home_Components/Values_Of_Smart_Section/Values_Of_Smart';
import Scedule_a_Visit from "../Home/Home_Components/Schedule_A_Visit/Schedule_a_Visit";
import Team_Section from "./About_Components/Meet_The_Team/Meet_The_Team";
import Testimonials_Swiper from "../Home/Home_Components/Testimonials_Swiper/Testimonials_swiper";



const About = () => {
    return (
       <>
        <section className="About_Banner">
            <div>
                <h1>About us</h1>
            </div>
            <div>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                </p>
            </div>
        </section>
        <Welcome_Section/>
        <Info_Section/>
        <Values_Of_Smart/>
        <Scedule_a_Visit/>
        <Team_Section/>
        <Testimonials_Swiper/>
       </>
    )
}

export default About