import React, { useState, useEffect } from 'react';
import qa from 'qs';
import {
  searchForHolding,
  getHoldings,
  buyStock,
  sellStock,
} from '../http-helpers/tradeUtilities';
import Recommendations from '../components/Recommendations';
import SelectedHolding from '../components/SelectedHolding';
import HeaderTrade from '../components/headers/HeaderTrade';
import AddHolding from '../components/AddHolding';
import ShowAlert from '../components/ShowAlert';
import { withRouter } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Chatbot from 'react-chatbot-kit'
import config from "../chatbot/config"
import ActionProvider from "../chatbot/ActionProvider"
import MessageParser from "../chatbot/MessageParser"


const TradeScreen = props => {
  const [holdings, setHoldings] = useState([]);
  const [selectedHolding, setSelectedHolding] = useState(null);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [sharesPurchased, setSharesPurchased] = useState(0);
  const [alertMessage, setAlertMessage] = useState('');
  const [showBot, toggleBot] = useState(false);

  useEffect(() => {
    const fetchHoldingsData = () => {
      getHoldings()
        .then(holdingsData => setHoldings(holdingsData))
        .catch(err => console.error('error get holdings', err));
    };

    const renderSearchedHoldingFromPortfolio = () => {
      const queryStrings = qa.parse(props.location.search, {
        ignoreQueryPrefix: true,
      });
      if (queryStrings.symbol) {
        handleSearchForHolding(queryStrings.symbol);
      }
    };

    renderSearchedHoldingFromPortfolio();
    fetchHoldingsData();
  }, []);

  const updateShares = shares => {
    setSharesPurchased(shares);
  };

  const toggleAlertState = () => {
    setIsShowAlert(prevState => !prevState);
  };

  const handleSearchForHolding = symbol => {
 
    searchForHolding(symbol)
      .then(selectedHolding => setSelectedHolding(selectedHolding))
      .catch(err => console.error('error get holdings', err));
  };

  const sellShares = (holding, shares) => {
    sellStock(holding, shares);
    setAlertMessage('sold');
    toggleAlertState();
  };

  const buyShares = async (holding, shares) => {
    // send an http request to buy stocks
    await buyStock(holding, shares);
    // set alert messsgae to purchased
    setAlertMessage('purchased');
    // toggle alert state
    toggleAlertState();
  };

  return (
     <section className="trade-container">
      {/* <HeaderTrade /> */}
      <div className="container">
         {isShowAlert && (
          <ShowAlert
            toggleAlertState={toggleAlertState}
            isShowAlert={isShowAlert}
            selectedHolding={selectedHolding}
            sharesPurchased={sharesPurchased}
            alertMessage={alertMessage}
          />
        )} 
        <AddHolding handleSearchForHolding={handleSearchForHolding} />
        {selectedHolding ? (
          <SelectedHolding
            selectedHolding={selectedHolding}
            buyShares={buyShares}
            sellShares={sellShares}
            updateShares={updateShares}
          />
        ) : null}
        <Recommendations handleSearchForHolding={handleSearchForHolding} /> 
 
        
        {showBot && (
        <Fade big>
          <div className="app-chatbot-container">
          <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
          </div>
        </Fade>
      )}
      <Flip left cascade>
        <button
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
        >
        
          <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
            <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
          </svg>
        </button>
      </Flip>
      </div>

    </section>
  );
};

export default withRouter(TradeScreen);
