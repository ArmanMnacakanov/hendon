import React, {useState,useEffect} from "react";
import "./style.css";

const Exclusive_Residence = () => {

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


    const show = scrollPosition > 250 ? '1' : '0';
    const translateX = scrollPosition > 250 ? '0' : '150px'
    const anim = scrollPosition > 250 ? 'widthh 2s ease-in-out forwards' : 'none' ;




    return(
        <section className="Exclusive_Residence_Box">
            <div className='Img2' style={{ opacity: show,translate: translateX }}>
                <div  style={{ opacity: show,translate: translateX}}>
                    <div style={{animation: anim }}></div>
                </div>
            </div>
        </section>
    )
};

export default Exclusive_Residence
