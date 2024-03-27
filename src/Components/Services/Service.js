import React from "react";
import './style.css'
import Kinds from "./Service_Components/Kinds/Kinds";
import Exclusive_Residence from "./Service_Components/Exclusive_Residence/Exclusive_Residence";
import Values_Of_Smart from "./Values_Of_Smart_V2/Values_Of_Smart_V2";
import Options_Section_V2 from './Service_Components/Options_Section_v2/Options_Section_v2';
import Recuest_A_Visit from '../Home/Home_Components/REQUEST_A_VISIT/Request_a_Visit';
import Slider from '../Home/Home_Components/Slider/Slider'

const Service = () => {
  return (
    <>
      <section className="Service_Banner">
        <div>
          <h1>SERVICES</h1>
        </div>
        <div>
          <p>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS DUCIMUS QUI</p>
        </div>
      </section>
      <Kinds/>
      <Exclusive_Residence/>
      <Values_Of_Smart/>
      <Options_Section_V2/>
      <Recuest_A_Visit/>
      <Slider/>
    </>
  );
};

export default Service;
