import quotes from "../quotesDB";
import React from "react";
// import { useState, useReducer } from "react";
import "./quote.css";

const colors = ["secondary", "success", "primary", "danger", "warning", "info"];

// export const Quote = () => {

//   const [color, setColor] = useState(colors[0]);
//   console.log(color);
//   const [quote, setQuote] = useState(`"${quotes[0].quote}"`);
//   const [author, setAuthor] = useState(`-${quotes[0].author}-`);

//   const onClickChanged = () => {
//     const randomQuotesNum = Math.floor(Math.random() * quotes.length + 1);
//     const randomColorsNum = Math.floor(Math.random() * colors.length + 1);
//     setQuote(`"${quotes[randomQuotesNum].quote}"`);
//     setAuthor(`-${quotes[randomQuotesNum].author}-`);
//     setColor(colors[randomColorsNum]);
//   };
//   return (
//     <>
//       <main className={`vh-100 bg-${color} d-grid`}>
//         <div className={`bg-white modalQuote`}>
//           <h1 className={`text-${color}`}>{quote}</h1>
//           <p className={`text-${color} `}>{author}</p>
//           <button
//             className={`btn text-white bg-${color}`}
//             onClick={onClickChanged}
//           >
//             New quote
//           </button>
//         </div>
//       </main>
//     </>
//   );
// };

export class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      color: colors[0],
      author: quotes[0].author,
    };
  }

  onClickChanged = () => {
    const randomQuotesNum = Math.floor(Math.random() * quotes.length + 1);
    const randomColorsNum = Math.floor(Math.random() * colors.length + 1);
    this.setState((prevQuote) => {
      const newQuote = {
        quote: `"${quotes[randomQuotesNum].quote}"`,
        author: `-${quotes[randomQuotesNum].author}-`,
        color: colors[randomColorsNum],
      };
      if (prevQuote.quote !== newQuote.quote) {
      }
      return newQuote;
    });
  };

  render() {
    const { color, author, quote } = this.state;
    return (
      <>
        <main className={`vh-100 bg-${color} d-grid`}>
          <div className={`bg-white modalQuote`}>
            <h1 className={`text-${color}`}>{quote}</h1>
            <p className={`text-${color} `}>{author}</p>
            <button
              className={`btn text-white bg-${color}`}
              onClick={this.onClickChanged}
            >
              New quote
            </button>
          </div>
        </main>
      </>
    );
  }
}
