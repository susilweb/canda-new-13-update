// pages/index.js

import { useState, useEffect } from 'react';

const Index = () => {
  const [numEmployees, setNumEmployees] = useState(10); // Default number of employees
  const [avgSalary, setAvgSalary] = useState(50000); // Default average salary
  const [timeSaved, setTimeSaved] = useState(2); // Default time saved per week
  const [totalSavings, setTotalSavings] = useState(0); // Default total savings

  useEffect(() => {
    // Calculate annual time saved per employee
    const annualTimeSaved = timeSaved * 52;

    // Calculate monetary value of time saved per employee
    const monetaryValue = avgSalary * annualTimeSaved;

    // Calculate total annual savings
    const totalSavingsValue = monetaryValue * numEmployees;

    // Update state
    setTotalSavings(totalSavingsValue);
  }, [numEmployees, avgSalary, timeSaved]);

  // Format the totalSavings with commas
  const formattedTotalSavings = totalSavings.toLocaleString();

  return (
    <div>
      <h1>ROI Calculator</h1>
      <div>
        <label>
          Number of Employees:
          <input
            type="range"
            min="1"
            max="100"
            value={numEmployees}
            onChange={(e) => setNumEmployees(parseInt(e.target.value))}
          />
          {numEmployees}
        </label>
      </div>
      <div>
        <label>
          Average Salary:
          <input
            type="range"
            min="10000"
            max="100000"
            step="1000"
            value={avgSalary}
            onChange={(e) => setAvgSalary(parseInt(e.target.value))}
          />
          ${avgSalary}
        </label>
      </div>
      <div>
        <label>
          Time Saved per Week:
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={timeSaved}
            onChange={(e) => setTimeSaved(parseInt(e.target.value))}
          />
          {timeSaved} hours
        </label>
      </div>
      <div>
        <h2>Total Annual Savings: ${formattedTotalSavings}</h2>
      </div>
    </div>
  );
};

export default Index;
