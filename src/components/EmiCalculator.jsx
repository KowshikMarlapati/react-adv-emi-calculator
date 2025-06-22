import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./EmiCalculator.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(160468285);
  const [interestRate, setInterestRate] = useState(7);
  const [tenureYears, setTenureYears] = useState(13);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const pieData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ["#a72c2c", "#f39c12"],
      },
    ],
  };

  return (
    <div className="calculator">
      <div className="left-panel">
        <div className="input-block">
          <label>Loan Amount</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            min={1000000}
            max={1000000000}
            step={100000}
          />
          <input
            type="range"
            min={1000000}
            max={1000000000}
            step={5000000} // predetermined steps
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <div className="value">₹ {loanAmount.toLocaleString()}</div>
        </div>

        <div className="input-block">
          <label>Interest Rate (p.a.)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            min={1}
            max={20}
            step={0.1}
          />
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <div className="value">{interestRate} %</div>
        </div>

        <div className="input-block">
          <label>Tenure (Years)</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            min={1}
            max={30}
            step={1}
          />
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
          />
          <div className="value">{tenureYears} years</div>
        </div>
      </div>

      <div className="right-panel">
        <div className="summary">
          <p>
            <strong>Principal Amount:</strong> ₹ {loanAmount.toLocaleString()}
          </p>
          <p>
            <strong>Interest Amount:</strong> ₹{" "}
            {totalInterest.toFixed(0).toLocaleString()}
          </p>
          <p>
            <strong>Total Payable:</strong> ₹{" "}
            {totalPayment.toFixed(0).toLocaleString()}
          </p>
          <div className="emi-box">
            Your Monthly EMI is ₹ {emi.toFixed(2).toLocaleString()}
          </div>
          <button className="apply-btn">APPLY FOR HOME LOAN</button>
        </div>

        <div className="pie-container">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
