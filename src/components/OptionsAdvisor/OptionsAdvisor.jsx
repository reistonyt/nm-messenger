import React from "react";

import "./OptionsAdvisor.css";

const OptionsAdvisor = (props) => {
  const options = [
    {
      text: "I would like to learn more about college planning.",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "I would like to learn more about life insurances at Northwestern Mutual.", 
    handler: props.actionProvider.handleAdvisorHelp, id: 2 },

  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsAdvisor;