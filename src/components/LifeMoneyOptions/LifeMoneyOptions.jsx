import React from "react";

import "./LifeMoneyOptions.css";
const LifeMoneyOptions = (props) => {
    const options = [
      {
        text: "Your Family",
        //handler: props.actionProvider.stonkPrompt,
        handler: props.actionProvider.family,
        id: 1,
      },
      { text: "Your Home", 
      handler: props.actionProvider.home, id: 2 },
      {
        text: "Market Commentary",
        handler: props.actionProvider.market,
        id: 3,
      },
      {
        text: "Your Career",
        handler: props.actionProvider.career,
        id: 4,
      },
      {
        text: "Money Basics",
        handler: props.actionProvider.moneyBasics,
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
  
  export default LifeMoneyOptions;