import React from "react";
import './style.css'



const Location = () => {


    const Labels = [
        {
            name: 'school',
            road: '250m far'
        },
        {
            name: 'parks',
            road: '200m far'
        },
        {
            name: 'shopping mall',
            road: '150m far'
        },
        {
            name: 'restourant',
            road: '200m far'
        },
        {
            name: 'hospital',
            road: '250m far'
        }
    ]


    return (
        <section className="Location_Container">

            <div className="Location_Box">
                {
                    Labels.map((e) => {
                        return (
                            <div className="Road_Info">
                                <div>
                                    <h3>{e.name}</h3>
                                </div>
                                <div>
                                    <span>{e.road}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Location