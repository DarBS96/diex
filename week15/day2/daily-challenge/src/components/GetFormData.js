import React, { useState } from "react";
import { UserContext } from "./UserContext";
import DisplayFormData from "./DisplayFormData";
const foodRestricts = [];
function GetFormData(props) {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    destination: "",
    dietaryRestrictions: [],
    gender: "",
  });
  // console.log(userInfo);

  const handleChange = (e) => {
    const foodRestrict = e.target.parentElement.textContent;
    const name = e.target.name;
    const value = e.target.value;

    // update state 1
    if (e.target.checked && name) {
      setUserInfo((prevState) => ({ ...prevState, gender: name }));

      // update state 2
    } else if (e.target.checked) {
      foodRestricts.push(foodRestrict);
      setUserInfo((prevState) => ({
        ...prevState,
        dietaryRestrictions: foodRestricts,
      }));

      // update state 3
    } else {
      setUserInfo((prevState) => ({
        ...prevState,
        [name]: value,
        dietaryRestrictions: [],
        gender: "",
      }));
    }
  };

  return (
    <div style={{ backgroundColor: "grey" }} className="containerGetFormData">
      <h1 className="title">Please fill up your trip's data</h1>
      <main className="mainGetFormData">
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="textInput"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Age</label>
          <input type="number" name="age" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Male</label>
          <input type="checkbox" name="male" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Female</label>
          <input type="checkbox" name="female" onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="destination">select your destination</label>
          <select name="destination" id="destination" onChange={handleChange}>
            <option value="Thailand">Thailand</option>
            <option value="London">London</option>
            <option value="Italy">Italy</option>
          </select>
        </div>
        <div className="field">
          <label>Dietary Restrictions</label>
          <ul style={{ listStyle: "none" }}>
            <li>
              <input type="checkbox" onChange={handleChange} />
              Nuts free
            </li>
            <li>
              <input type="checkbox" onChange={handleChange} />
              Lactose free
            </li>
            <li>
              <input type="checkbox" onChange={handleChange} />
              Vegan
            </li>
          </ul>
        </div>
      </main>
      <button className="submitBtn">Submit</button>
      <br />
      <UserContext.Provider value={userInfo}>
        <DisplayFormData />
      </UserContext.Provider>
    </div>
  );
}

export default GetFormData;
