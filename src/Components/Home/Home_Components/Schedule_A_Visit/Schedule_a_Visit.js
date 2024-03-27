import './style.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



const Scedule_a_Visit = () => {

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

    const show = scrollPosition > 2500 ? '1' : '0';

    return (
        <section className='Schedule_a_Visit_Box'  style={{opacity:show }}>
            <div>
                <h1>Schedule A Visit </h1>
            </div>
            <div>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos duc blanditiis praesentium voluptatum
                </p>
            </div>
            <div>
               <Link to={'/getintouch'}>request</Link>
            </div>
        </section>
    )
}

export default Scedule_a_Visit