import React from "react";
import './style.css'
import { Link } from "react-router-dom";



const Stylish_News = () => {

    const Data = [
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-blog-list-img-1.jpg',
            name: 'SAFE FOR KIDS',
            date: '4 MAY 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci'
        },
        {
            img:'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/home-1-blog-list-img-2.jpg',
            name: 'BEDROOM IDEAS',
            date: '27 APR 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci'
        }
    ]
    return (
        <div className="Stilish_News_Box">
            <div>
                <h1>
                    STYLISH NEWS FROM OUR BLOG READ, ENJOY & LEARN
                </h1>
                <p>
                    AT VERO EOS ET ACCUS AMUSET IUSTO ODIO
                </p>
            </div>
            <div>
                {
                    Data.map((e) => (
                        <Link to={'#'}>
                            <div>
                                <img src={e.img} />
                            </div>
                            <div>
                                <h3>{e.name}</h3>
                                <span>{e.date}</span>
                            </div>
                            <div>
                                <p>{e.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default Stylish_News