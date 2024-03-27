import React from "react";
import './style.css';

const Complex_Info_Section = () => {


  const Complex_Info = [
        {
            name:'ENTRANCE',
            count:2
        },
        {
            name:'AREA, M2',
            count:121
        },
        {
            name:'BATHROMS',
            count:2
        },
        {
            name:'BEDROOMS',
            count:2
        },
        {
            name:'ROOMS',
            count:3
        },
        {
            name:'PARKING',
            count:2
        },
        {
            name:'TERRACE',
            count:2
        },
        {
            name:'FLOOR',
            count:4
        }
    ]

    return(
        <section className="Complex_Info_Box">
            {
                Complex_Info.map((item)=>(
                    <div className="Info">
                        <h3>{item.name}</h3>
                        <span>{item.count}</span>
                    </div>
                ))
            }
        </section>
    )
}

export default Complex_Info_Section 