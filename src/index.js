import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import CustomersContextProvider from "./contexts/CustomersContext";

ReactDOM.render(
  <React.StrictMode>
    <CustomersContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomersContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
