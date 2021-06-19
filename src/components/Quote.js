import React from "react";
import Hovercard from "hovercard";
import { FaCopy } from "react-icons/fa";

function Quote({ quote }) {
  const cards = new Hovercard();
  const func = () => {
    if (quote.author === null) {
      return "Unknown";
    } else {
      return quote.author;
    }
  };
  const wikiname = func(quote.author).split(" ").join("_");
  const wikilink = `https://en.wikipedia.org/wiki/${wikiname}`;

  function copy() {
    navigator.clipboard.writeText(quote.text);
  }

  return (
    <div className="quote">
      {/* use multiple events in onClick event */}
      <div
        className="copy"
        data-tip="Copy Quote"
        onClick={() => {
          copy();
        }}
      >
        <FaCopy />
      </div>
      <div className="quote-text">
        {quote.text}
        <a
          href={wikilink}
          className="quote-author hovercard"
          data-tip="Read More"
          target="_blank"
        >
          {func(quote.author)}
        </a>
      </div>
    </div>
  );
}

export default Quote;
