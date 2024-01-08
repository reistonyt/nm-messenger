import React from "react"

import "./App.css"
import 'react-chatbot-kit/build/main.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Leadtrade from "./screens/Leadtrade";
import HomeScreen from "./screens/HomeScreen";
import './style/index.css';
import './style/home.css';
import './style/mobile.css';
import './style/beginners.css';
import './style/trade.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import TradeScreen from "./screens/TradeScreen";
import ChatBot from "./screens/chatbotappfinal";
import { UserNameProvider } from './context/UserNameContext';



function App(){
    return (
        <Router>
   <UserNameProvider>
   <div className="app" id="app-container">
          <Navigation />
          <main id="main-container">
            <Route path="/" exact component={HomeScreen} />
            <Route path="/chatbot" component={Leadtrade} />
            <Route path="/main" component={TradeScreen} />
            <Route path="/chatbotfinal" component={ChatBot} />
     
          </main>
        </div>
   </UserNameProvider>
   
    </Router>
    )

}

export default App;