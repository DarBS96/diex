import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function DisplayFormData() {
  const userInfo = useContext(UserContext);
  console.log(userInfo);
  const { firstName, lastName, age, gender, destination, dietaryRestrictions } =
    userInfo;
  // console.log(userInfo);
  return (
    <div style={{ backgroundColor: "pink" }} className="displayFormData">
      <h1>Entered information</h1>
      {lastName ? (
        <p>Your name: {firstName + " " + lastName}</p>
      ) : (
        <p>Your name: {firstName}</p>
      )}
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>
      <p>Your dietary restrictions:</p>
      {dietaryRestrictions?.map((restrict, idx) => (
        <li key={idx}>{restrict}</li>
      ))}
    </div>
  );
}

export default DisplayFormData;
