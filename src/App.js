import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import HomeMiddle from './HomeMiddle';
import MenuHelper from './MenuHelper';
import HomeThirdPart from "./HomeThirdPart"
import Story from './Story';
import Checkout from "./Checkout"


function App() {
  return (
    
    <div className="App">
    
      <Router>
        <Switch>
        

          <Route path="/story">
          <Header />

          <Story />
          </Route>

          <Route path="/menu">
          <Header />
            <MenuHelper />
          </Route>

          <Route path="/contact">
          <h1>contact</h1>

          </Route>

          <Route path="/checkout">
          <Header />

          <Checkout />
          </Route>
          <Route path="/">
        <hr/>
        <Header />
        <hr/>
        <Home />
        <HomeMiddle />
        <HomeThirdPart />


          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
