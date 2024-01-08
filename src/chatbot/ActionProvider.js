import { searchForStockData, searchForEarningsData, searchForWeeklyData } from '../http-helpers/tradeUtilities';

const axios = require('axios');
var company_name = ''

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () => {
    const message = this.createChatBotMessage("Hello! This is LearnTrade. How can I help?")
    this.addMessageToState(message);
   };

   handleJavascriptQuiz = () => {
       const message = this.createChatBotMessage("Here is your quiz.", {widget : "javascriptQuiz"})
       this.addMessageToState(message);
   };

   handleAdvisorHelp = () => {
    const message = this.createChatBotMessage("This is your personal Advisor. How can I help?.", {widget : "advisorHelp"})
    this.addMessageToState(message);
};

handleAdvisorMeet = () => {
  const message = this.createChatBotMessage("Please click the button:", {widget : "advisorMeet"})
  this.addMessageToState(message);
};

handleCollegeHelp = () => {
  const message = this.createChatBotMessage("https://www.northwesternmutual.com/college-savings-plans/")
  this.addMessageToState(message);
};
/*Initial Options handlers */
handleFinancialPlanningHelp = () => {
  const message = this.createChatBotMessage("This is your personal Advisor. How can I help?.", {widget : "financialPlanningHelp"})
  this.addMessageToState(message);
};
handleInvestmentsHelp = () => {
  const message = this.createChatBotMessage("This is your personal Advisor. How can I help?.", {widget : "investmentsHelp"})
  this.addMessageToState(message);
};
handleInsuranceHelp = () => {
  const message = this.createChatBotMessage("This is your personal Advisor. How can I help?.", {widget : "insuranceHelp"})
  this.addMessageToState(message);
};
handleLifeMoneyHelp = () => {
  const message = this.createChatBotMessage("This is your personal Advisor. How can I help?.", {widget : "lifeMoneyHelp"})
  this.addMessageToState(message);
};
/*********Lowest level handles-Fin Planning */
collegeSavingsPlan = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/college-savings-plans/")
  this.addMessageToState(message);
};
retirementPlanning = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/retirement-planning")
  this.addMessageToState(message);
};
privateWealthManagement = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/private-wealth-management/")
  this.addMessageToState(message);
};
estatePlanning = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/long-estate-planning/")
  this.addMessageToState(message);
};
longTermCare = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/long-term-care-planning/")
  this.addMessageToState(message);
};
businessServices = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/business-services/")
  this.addMessageToState(message);
};
/*********Lowest level handles-Insurance */
life = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/life-insurance/")
  this.addMessageToState(message);
};
disability = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/disability-insurance/")
  this.addMessageToState(message);
};
longTerm = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/long-term-care-planning")
  this.addMessageToState(message);
};
incomeAnnuities = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/annuities/")
  this.addMessageToState(message);
};
/*********Lowest level handles-Investments */
brokerage = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/brokerage-accounts-services/")
  this.addMessageToState(message);
};
advisory = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/investment-advisory-services/")
  this.addMessageToState(message);
};
privateClient = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/private-client-services-wealth-management")
  this.addMessageToState(message);
};
market = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/life-and-money/market-commentary/")
  this.addMessageToState(message);
};
fvAnnuities = () => {
  const message = this.createChatBotMessage("Find information here: https://www.northwesternmutual.com/fixed-annuity-vs-variable-annuity/")
  this.addMessageToState(message);
};
/*********Lowest level handles-life and money */
family = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/life-and-money/your-family/")
  this.addMessageToState(message);
};
home = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/life-and-money/your-home/")
  this.addMessageToState(message);
};
career = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/life-and-money/your-career/")
  this.addMessageToState(message);
};
moneyBasics = () => {
  const message = this.createChatBotMessage("Find information here:	https://www.northwesternmutual.com/life-and-money/money-basics/")
  this.addMessageToState(message);
};

// handleInsuranceHelp = () => {
//   const message = this.createChatBotMessage("https://www.northwesternmutual.com/life-insurance/")
//   this.addMessageToState(message);
// }; 

stonkPrompt = () => {
  const message = this.createChatBotMessage("What stock are you interested in today?")
  
  this.addMessageToState(message);
  
 };
 stonkResponse = () => {
  
  const message = this.createChatBotMessage("Apple (AAPL) is currently trading at $160.72. Today is down $0.72 (0.51%)")
  this.addMessageToState(message);
  
 };

 searchStockBasic = (ticker) => {
  const performApiCall = async (s) => {
    console.log(s)
    try {
      const response = await searchForStockData(s.toUpperCase());
      console.log(response)
      const currentPrice = (response.daily_data["4. close"])
      console.log(currentPrice)
      const priceChange = response.daily_data["4. close"] - response.daily_data["1. open"]
      const absPriceChange = Math.abs(response.daily_data["4. close"] - response.daily_data["1. open"])
      const pricePerChange = (absPriceChange/response.daily_data["1. open"] * 100)
      company_name = response.company_name
      if (priceChange < 0){
        const message = this.createChatBotMessage(`${company_name} (${ticker.toUpperCase()}) is currently trading at $${Number(currentPrice).toFixed(2)}. Today is down $${Number(absPriceChange).toFixed(2)} (${Number(pricePerChange).toFixed(2)}%).`)
        this.addMessageToState(message);
      }
      else{
        const message = this.createChatBotMessage(`${company_name} (${ticker.toUpperCase()}) is currently trading at $${Number(currentPrice).toFixed(2)}. Today is up $${Number(absPriceChange).toFixed(2)} (${Number(pricePerChange).toFixed(2)}%).`)
        this.addMessageToState(message);
      }
      
      
    } catch (err) {
      console.error(err.message);
    }
  };
  let tick = ticker.replace("$", '')
  performApiCall(tick)
  
 };

 searchStockWeekly = (ticker) => {
  const performApiCall = async (s) => {
    console.log(s)
    try {
      const response = await searchForWeeklyData(s.toUpperCase());
      console.log(response)
      
      const message = this.createChatBotMessage(`${company_name} (${ticker.toUpperCase()}) is has changed by $${Number(response.current_price).toFixed(2)} (${Number(response.weekly_percentage_change.replace('%','')).toFixed(2)}%) this week`)
      this.addMessageToState(message);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  let tick = ticker.replace("$", '')
  performApiCall(tick)
  
 };

 searchStockEarnings = (ticker) => {
   console.log(ticker)
  const performApiCall = async (s) => {
    console.log(s)
    try {
      const response = await searchForEarningsData(s.toUpperCase());
      console.log(response)
      
      const message = this.createChatBotMessage(`The latest actual earnings of ${company_name} (${ticker.toUpperCase()}) is $${Number(response.reportedEPS).toFixed(2)}`)
      this.addMessageToState(message);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  let tick = ticker.replace("$", '')
  performApiCall(tick)
  
 };

 earnings = () => {
  const message = this.createChatBotMessage("The latest actual earnings of AAPL is $1.20")
  this.addMessageToState(message);
 };
 stonkLearnMore = () => {
  const message = this.createChatBotMessage("Learn more here: https://www.northwesternmutual.com/stocks/")
  
  this.addMessageToState(message);
 };
 bye = () => {
  const message = this.createChatBotMessage("Thank you for chatting! Do you have any more questions?", {widget : "options"})
  this.addMessageToState(message);
 };
 weeklyStats = () => {
  const message = this.createChatBotMessage("AAPL is up $8.38 (5.51%) this week")
  this.addMessageToState(message);
 };
 handleStockFinder = () => {
     const message = this.createChatBotMessage("What stock are you interested in today?")
     this.addMessageToState(message);
 };






   addMessageToState = (message) => {
    this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message]
    }))
   }
 }
 
 export default ActionProvider;