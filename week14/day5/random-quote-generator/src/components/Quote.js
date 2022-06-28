import quotes from "../quotesDB";
import { useState } from "react";
import "./quote.css";

export const Quote = () => {
  const colors = [
    "secondary",
    "success",
    "primary",
    "danger",
    "warning",
    "info",
  ];

  const [color, setColor] = useState(colors[0]);
  console.log(color);
  const [quote, setQuote] = useState(`"${quotes[0].quote}"`);
  const [author, setAuthor] = useState(`-${quotes[0].author}-`);

  const onClickChanged = () => {
    const randomQuotesNum = Math.floor(Math.random() * quotes.length + 1);
    const randomColorsNum = Math.floor(Math.random() * colors.length + 1);
    setQuote(`"${quotes[randomQuotesNum].quote}"`);
    setAuthor(`-${quotes[randomQuotesNum].author}-`);
    setColor(colors[randomColorsNum]);
  };
  return (
    <>
      <main className={`vh-100 bg-${color} d-grid`}>
        <div className={`bg-white modalQuote`}>
          <h1 className={`text-${color}`}>{quote}</h1>
          <p className={`text-${color} `}>{author}</p>
          <button
            className={`btn text-white bg-${color}`}
            onClick={onClickChanged}
          >
            New quote
          </button>
        </div>
      </main>
    </>
  );
};
