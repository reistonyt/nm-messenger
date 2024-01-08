import React from "react";

import "./FinPlanOptions.css";
const FinPlanOptions = (props) => {
    const options = [
      {
        text: "College Savings Plan ",
        //handler: props.actionProvider.stonkPrompt,
        handler: props.actionProvider.collegeSavingsPlan,
        id: 1,
      },
      { text: "Retirement Planning", 
      handler: props.actionProvider.retirementPlanning, id: 2 },
      {
        text: "Estate Planning",
        handler: props.actionProvider.estatePlanning,
        id: 3,
      },
      {
        text: "Business Services",
        handler: props.actionProvider.businessServices,
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
  
  export default FinPlanOptions;