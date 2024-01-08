import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import React from 'react';
import Quiz from "../components/Quiz/Quiz";
import OptionsAdvisor from "../components/OptionsAdvisor/OptionsAdvisor";
import OptionsAdvisorMeet from "../components/OptionsAdvisorMeet/OptionsAdvisorMeet";
import FinPlanOptions from "../components/FinPlanOptions/FinPlanOptions";
import InvestOptions from "../components/InvestOptions/InvestOptions";
import LifeMoneyOptions from "../components/LifeMoneyOptions/LifeMoneyOptions";
import InsOptions from "../components/InsOptions/InsOptions";

const config = {
    botName: "MoneyTree",
  initialMessages: [createChatBotMessage(`Hello. I am MoneyTree. How can I help you?`, {
      widget: "options"
  })],
  widgets: [
      {
          widgetName: "options",
          widgetFunc: (props) => <Options {...props}/>,

      },
      {
          widgetName: "advisorHelp",
          widgetFunc: (props) => <OptionsAdvisor {...props}/>,
          
          
      },
      {
        widgetName: "collegeHelp",
        widgetFunc: (props) => <OptionsAdvisor {...props}/>,

    },
    {
        widgetName: "advisorMeet",
        widgetFunc: (props) => <OptionsAdvisorMeet {...props}/>
    },
    {
        widgetName: "financialPlanningHelp",
        widgetFunc: (props) => <FinPlanOptions {...props}/>,

    },
    {
        widgetName: "insuranceHelp",
        widgetFunc: (props) => <InsOptions {...props}/>,

    },
    {
        widgetName: "investmentsHelp",
        widgetFunc: (props) => <InvestOptions {...props}/>,

    },
    {
        widgetName: "lifeMoneyHelp",
        widgetFunc: (props) => <LifeMoneyOptions {...props}/>,

    }

  ]
}

export default config