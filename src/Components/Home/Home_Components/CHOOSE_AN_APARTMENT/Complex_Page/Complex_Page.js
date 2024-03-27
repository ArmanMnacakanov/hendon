import React from "react";
import './style.css'
import Complex_Info_Section from "./Complex_Page_Components/Complex_Info_Section/Complex_Info";
import Furniture_Elements_Section from "./Complex_Page_Components/Furniture_Elements_Section/Furniture_Elements_Section";
import Complex_Options_Section from "./Complex_Page_Components/Complex_Options_Section/Complex_Options_Sections";
import Apartment_Plans from "./Complex_Page_Components/Apartment_Plans/Apartment_Plans";
import Complex_Schedule_Visit from'./Complex_Page_Components/Complex_Schelule_Visit_Section/Complex_Schedule_Visit';

const Complex = () => {
    return (
        <>
            <section className="Complex_Container">
                <div>
                    <div>
                        <h1>
                            DISPLAY YOUR FLOOR PLANS AND APARTMENT LAYOUTS
                        </h1>
                    </div>
                    <div>
                        <span>
                            At vero eos et accus amus et iusto odio
                        </span>
                    </div>
                    <div>
                        <a href="https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/floor-plan.pdf">Download now</a>
                    </div>
                </div>
                <div>
                    <img src={require('../../../../../Assets/Complex_Img/apart-slider-img-1.png')} />
                </div>
            </section>
            <Complex_Info_Section />
            <Furniture_Elements_Section/>
            <Complex_Options_Section/>
            <Apartment_Plans/>
            <Complex_Schedule_Visit/>
        </>
    )
}

export default Complex