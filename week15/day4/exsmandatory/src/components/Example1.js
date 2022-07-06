import React from "react";
import data from "./data.json";

function Example1(props) {
  return (
    <ul>
      {data.SocialMedias.map((media, idx) => {
        return <li key={idx}>{media}</li>;
      })}
    </ul>
  );
}

export default Example1;
