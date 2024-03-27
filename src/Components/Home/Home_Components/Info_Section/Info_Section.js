import React, { useState, useEffect } from 'react';
import './style.css';


const  Info_Section = ()=>{

    
    const [scrollPosition, setScrollPosition] = useState(0);
    const [counters, setCounters] = useState({
        squareAreas: 0,
        carParking: 0,
        apartments: 0,
        rooms: 0,
      });


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

    useEffect(() => {
        const interval = setInterval(() => {
          setCounters((prevCounters) => ({
            squareAreas: Math.min(412, prevCounters.squareAreas + 1),
            carParking: Math.min(519, prevCounters.carParking + 1),
            apartments: Math.min(170, prevCounters.apartments + 1),
            rooms: Math.min(262, prevCounters.rooms + 1),
          }));
        }, 10); // Adjust the interval as needed
    
        return () => clearInterval(interval);
      }, []);
  
    const show = scrollPosition > 800 ? '1' : '0';

    return(
        <section className="Info_Section" style={{ opacity: show }}>
            <div>
                <span>{counters.squareAreas}</span>
                <h3>SQUARE AREAS</h3>
            </div>
            <div>
                <span>{counters.carParking}</span>
                <h3>CAR PARKING</h3>
            </div>
            <div>
                <span>{counters.apartments}</span>
                <h3>APARTMENTS</h3>
            </div>
            <div>
                <span>{counters.rooms}</span>
                <h3>ROOMS</h3>
            </div>
        </section>
    )
}

export default Info_Section