import React from "react";
import TeamContext from "./TeamContext";
import "./style.css";
import Child from "./Child";

const Team_Section = () => {
  const Team_Data = [
    {
      img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/team-img-1.jpg",
      name: "DARRELL",
      lastName: "BERGES",
      work: "OWNER",
    },
    {
      img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/team-img-2.jpg",
      name: "MERRIN",
      lastName: "MERRIN",
      work: "ARCHITECT",
    },
    {
      img: "https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/team-img-3.jpg",
      name: "IVET",
      lastName: "HOUZE",
      work: "ARCHITECT ASSISTANT",
    },
  ];

  return (
    <section className="Team_Container">
      <div className="Team_Container_Title">
        <div>
          <h1>MEET THE TEAM</h1>
        </div>
        <div>
          <p>AT VERO EOS ET ACCUSAMUS ET IUSTO</p>
        </div>
      </div>
      <div className="Team_Box">
        <TeamContext.Provider value={Team_Data}>
          <Child />
        </TeamContext.Provider>
      </div>
    </section>
  );
};
export default Team_Section;
