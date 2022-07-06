import React from "react";
import data from "./data.json";
console.log(data);

function Example2(props) {
  return (
    <div>
      <div>
        {data.Skills.map((item, idx) => {
          return <h1 key={idx}>{item.Area}</h1>;
        })}
        {data.Skills.map((item) => {
          return item.SkillSet.map((item, idx) => {
            console.log(item);
            return <p key={idx}>{item.Name}</p>;
          });
        })}
      </div>
    </div>
  );
}

export default Example2;
