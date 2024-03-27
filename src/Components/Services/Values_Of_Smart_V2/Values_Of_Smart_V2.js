import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./style.css";

const Values_Of_Smart = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const show = scrollPosition > 1200 ? "1" : "0";
  const translateY = scrollPosition > 1200 ? "0" : "150px";

  const Data = [
    {
        name:'APARTMENTS',
        count:4
    },
    {
        name:'ADDRESS',
        count:'1312 PARADISE LANE'
    },
    {
        name:'ARCHITECT',
        count:310
    },
    {
        name:'DESIGN',
        count:1
    },
    {
        name:'COMPLETION',
        count:2
    },
  ]

  return (
    <section className="Values_Of_Smart_Box">
      <div
        className="Info_Box"
        style={{ opacity: show, marginTop: translateY }}
      >
          <div>
            <h1>VALUES OF SMART LIVING IN VISTA RESIDENCE</h1>
          </div>
          <div>
            <p>AT VERO EOS ET ACCUS AMUS ET IUS TO ODIO DIGNISSIMOS</p>
          </div>
          <div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident similique sunt in culpa qui officia deserunt mollitia
              animi.
            </p>
          </div>
      </div>
      <div className="Data_Box" style={{ opacity: show, marginTop: translateY }}>
            <ul>
                {Data.map((e)=>(
                    <li>
                        <h3>{e.name}</h3>
                        <span>{e.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  );
};

export default Values_Of_Smart;
