import "./App.css";
import React, { useState, useEffect } from "react";
import AutoCompletedText from "./components/AutoCompletedText";

function App() {
  // const [data, setData] = useState("");
  // const [txt, setTxt] = useState("");

  //Getting the data with fetch async
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/hello")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.hi))
  //     .catch((err) => console.log(err.message));
  // }, [data]);

  //Getting custom data with async func
  // useEffect(() => {
  //   console.log(txt);
  //   const getData = async () => {
  //     const dataObj = {
  //       input: txt,
  //     };
  //     const options = {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dataObj),
  //     };
  //     const res = await fetch("http://localhost:5000/api/hello", options);
  //     const dataFromServer = await res.json();
  //     setData(dataFromServer);
  //   };

  //   getData().catch((err) => console.log(err.message));
  // }, [txt]);

  // const handleClick = (e) => {
  //   console.log("clicked");
  //   const value = e.target.value;
  //   console.log(value);
  // };

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Hello from my server</h1>
        <form>
          <input
            onChange={(e) => {
              setTxt(e.target.value);
            }}
            type="text"
            name="serverDialog"
            placeholder="Write anything to the server"
          />
          <button onClick={handleClick} type="button" value={txt}>
            Submit
          </button>
        </form>
        <div>{data}</div>
      </header> */}
      <AutoCompletedText />
    </div>
  );
}

export default App;
