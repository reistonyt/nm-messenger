import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import { alignPropType } from 'react-bootstrap/esm/types';


const PortfolioScreen = () => {

    
    return (
      <div id="home">
        <div style= {{
                height: "100px",
                color: 'green',
                justifyContent: 'center'
          }}>
        <h1>
          Money Tree
        </h1>
        </div>
        <div className="home-container">
          <div className="home-content mt-5 h2 font-weight-light">
            <h1 className="display-4 mb-5 home-header">
              Lets Grow Together
            </h1>
            <p>
              Learn about todays stock market, explore the world of health insurance, and how to be financially responsible for the future.
            </p>
            <p>Before you start, you must first register.</p>
            <div className="home-buttons-wrapper">
              <Register />
              <Login />
            </div>
          </div>
        </div>
      </div>
    );
   } 


export default PortfolioScreen;