import React from "react";
import EmiCalculator from "./components/EmiCalculator";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Calculate Home Loan EMI</h1>
      <p className="description">
        Use our Home Loan Calculator to get insights on your loan plan! Just
        select an amount, set an approximate interest rate and loan tenure.
      </p>
      <EmiCalculator />
    </div>
  );
};

export default App;
