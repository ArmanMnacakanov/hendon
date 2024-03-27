import React, { useContext } from "react";
import TeamContext from "./TeamContext";

const Child = () => {
  const Team_Data = useContext(TeamContext);

  return Team_Data.map((e) => (
    <div className="Team">
      <div className="Team_Img">
        <img src={e.img} />
      </div>
      <div className="Team_Info">
        <div>
          <h3>
            {e.name} {e.lastName}
          </h3>
        </div>
        <div>
          <span>{e.work}</span>
        </div>
      </div>
    </div>
  ));
};

export default Child;
