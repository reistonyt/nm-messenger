import React from "react";

import "./InsOptions.css";
const InsOptions = (props) => {
    const options = [
      {
        text: "Life Insurance ",
        //handler: props.actionProvider.stonkPrompt,
        handler: props.actionProvider.life,
        id: 1,
      },
      { text: "Disability Insurance", 
      handler: props.actionProvider.disability, id: 2 },
      {
        text: "Long-Term Care",
        handler: props.actionProvider.longTerm,
        id: 3,
      },
      {
        text: "Income Annuities",
        handler: props.actionProvider.incomeAnnuities,
        id: 4,
      },
  
    ];
    const buttonsMarkup = options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
        {option.text}
      </button>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };
  
  export default InsOptions;