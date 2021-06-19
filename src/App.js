import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Intro from "./components/Intro"
import { FaAngleRight } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function App() {
  const [quote, setQuote] = useState({
    text: null,
    author: null
  });
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote[Math.floor(Math.random() * quote.length)]);
      });
  }, []);

  const next = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote[Math.floor(Math.random() * quote.length)]);
      });;
  }

  return (
    <div className="App">
      <Intro />
      <Quote quote={ quote }></Quote>
      <div className="next-quote" data-tip="Next Quote" onClick={ next }>
        <ReactTooltip />
        <FaAngleRight />
      </div>
    </div>
  );
}

export default App;
