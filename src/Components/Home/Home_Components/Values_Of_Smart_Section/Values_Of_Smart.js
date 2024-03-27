import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import './style.css'



const Values_Of_Smart = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

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
  
    const show = scrollPosition > 1200 ? '1' : '0';
    const translateY = scrollPosition > 1200 ? '0' : '150px'

    return (
        <section className="Values_Of_Smart_Box">
            <div className="Img" style={{ opacity: show }}></div>
            <div className="Info_Box" style={{ opacity: show,marginTop:translateY }}>
                <div>
                    <h1>
                        VALUES OF SMART LIVING IN VISTA RESIDENCE
                    </h1>
                </div>
                <div>
                    <p>
                        AT VERO EOS ET ACCUS AMUS ET IUS TO ODIO DIGNISSIMOS
                    </p>
                </div>
                <div>
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />wellness</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />conference</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />restaurant</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />shopping</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />fitness</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />library</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />bars</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />fashion</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />wellness</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />conference</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />restaurant</li>
                            <li><FontAwesomeIcon icon={faAngleRight} /><faDownLong />shopping</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values_Of_Smart