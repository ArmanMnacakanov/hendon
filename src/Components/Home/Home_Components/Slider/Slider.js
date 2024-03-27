import React from "react";
import './style.css'

const Slider = () => {

    const Data = [
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-1-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-2-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-3-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-4-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-5-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-6-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-1-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-2-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-3-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-4-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-5-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-6-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-1-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-2-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-3-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-4-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-5-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-6-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-1-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-2-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-3-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-4-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-5-hover.png'
        },
        {
            img: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-client-6-hover.png'
        },
    ]

    return (
        <section className="Slider_Box">
                {Data.map((e) => (
                    <div>
                        <img src={e.img} />
                    </div>
                ))}
            
        </section>
    )
}

export default Slider