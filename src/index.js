import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from "./SignUp";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import AdminLogin from "./AdminLogin";
import AdminMain from "./AdminMain";
import MarketSurvey from "./MarketSurvey";
import PriceComparison from "./PriceComparison";
import DynamicPage from "./DynamicPages";
import UploadFile from "./UploadFile"



ReactDOM.render(
  <React.StrictMode>

      <Router>

              <Route path="/login" exact={true}>
                  <Login />
              </Route>
              <Route path="/" exact={true}>
                  <SignUp />
              </Route>
          <Route path="/homepage" exact={true}>
              <HomePage />
          </Route>
          <Route path="/adminmain" exact={true}>
              <AdminMain />
          </Route>
          <Route path="/adminlogin" exact={true}>
              <AdminLogin />
          </Route>
          <Route path="/marketsurvey" exact={true}>
              <MarketSurvey />
          </Route>
          <Route path="/pricecomparison" exact={true}>
              <PriceComparison />
          </Route>
          <Route path="/products/:id/" exact={true}>
              <DynamicPage />
          </Route>
          <Route path="/uploadfile" exact={true}>
              <UploadFile />
          </Route>

      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
