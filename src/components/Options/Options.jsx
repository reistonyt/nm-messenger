import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Financial Planning",
      //handler: props.actionProvider.stonkPrompt,
      handler: props.actionProvider.handleFinancialPlanningHelp,
      id: 1
    },
    { text: "Insurance", 
    handler: props.actionProvider.handleInsuranceHelp, id: 2 },
    {
      text: "Investments",
      handler: props.actionProvider.handleInvestmentsHelp,
      id: 3,
    },
    {
      text: "Life & Money",
      handler: props.actionProvider.handleLifeMoneyHelp,
      id: 4,
    },
    {
      text: "Learn about trading",
      handler: props.actionProvider.stonkPrompt,
      id: 5,
    },
    {
      text: "Connect with an advisor",
      handler: props.actionProvider.handleAdvisorMeet, id: 6
    }

  ];
  
  

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;