import React from "react";

import "./InvestOptions.css";
const InvestOptions = (props) => {
    const options = [
      {
        text: "Brokerage Accounts & Services",
        //handler: props.actionProvider.stonkPrompt,
        handler: props.actionProvider.bokerage,
        id: 1,
      },
      { text: "Private Wealth Management", 
      handler: props.actionProvider.privatewealthManagement, id: 2 }, 
      {
        text: "Investment Advisory Services",
        handler: props.actionProvider.advisory,
        id: 3,
      },
      {
        text: "Fixed & Variable Annuities",
        handler: props.actionProvider.handleLifeMoneyHelp, //?????
        id: 4,
      },
      {
        text: "Private Client Services",
        handler: props.actionProvider.privateClient,
        id: 5,
      },
      {
        text: "Market Commentary",
        handler: props.actionProvider.market,
        id: 6,
      },
  
    ];
    const buttonsMarkup = options.map((option) => (
      <button key={option.id} onClick={option.handler} className="option-button">
        {option.text}
      </button>
    ));
  
    return <div className="options-container">{buttonsMarkup}</div>;
  };
  
  export default InvestOptions;