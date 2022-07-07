import React, { useState, useRef } from "react";
import countries from "../modules/countries";

const AutoCompletedText = () => {
  const [countriesTxt, setCountriesTxt] = useState({
    txt: "",
    suggestions: [],
  });
  const inputRef = useRef("");

  const handleChange = (e) => {
    setCountriesTxt({ txt: e.target.value });
    const searchedCountries = countries.filter((country) => {
      const isExist = country.includes(e.target.value);
      return isExist ? isExist : null;
    });
    setCountriesTxt({ suggestions: searchedCountries });
  };

  const handleClick = (e) => {
    // console.log(e.target.value) returning 0 !!!!! WTF ?!
    setCountriesTxt({ suggestions: [] });
    inputRef.current.value = e.target.textContent;
  };

  const { suggestions } = countriesTxt;

  return (
    <div>
      <h1>Auto countries completed</h1>
      <input ref={inputRef} type="text" onChange={handleChange} />
      <p>{`suggestions: ${suggestions?.length}`}</p>
      <ul>
        {suggestions?.map((country, idx) => {
          return (
            <li
              value={country}
              key={idx}
              style={{ listStyle: "none" }}
              onClick={handleClick}
            >
              {country}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoCompletedText;
