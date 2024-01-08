import React from "react";
import "./OptionsAdvisorMeet.css";

const OptionsAdvisorMeet = (props) => {
  const options = [
    {
      text: "Find Your Advisor",
      url: "https://www.northwesternmutual.com/find-a-financial-advisor",
      handler: props.actionProvider.handleCollegeHelp,
      id: 1,
    },

  ];

  const buttonsMarkup = options.map((option) => (
    <a href={option.url} class="option-button-meet">{option.text}</a>
    // <button key={option.id} onClick={option.handler} className="option-button">
    //   {option.text}
    // </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsAdvisorMeet;