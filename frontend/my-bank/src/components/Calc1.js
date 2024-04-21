import React, { useState } from "react";
import "./Calc1.css";

function calculateMortgage(cost, initialPayment, term) {
  const annualRate = 9.6;
  const loanAmount = cost - initialPayment;
  const monthlyRate = annualRate / 12 / 100;
  const totalRate = Math.pow(1 + monthlyRate, term * 12);
  const monthlyPayment =
    (loanAmount * monthlyRate * totalRate) / (totalRate - 1);

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalPayment: Math.round(monthlyPayment * term * 12),
  };
}

function Calc1() {
  const [cost, setCost] = useState(0);
  const [initialPayment, setInitialPayment] = useState(0);
  const [term, setTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleCalculate = () => {
    const { monthlyPayment, totalPayment } = calculateMortgage(
      cost,
      initialPayment,
      term
    );
    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    console.log(`Рассчитанный ежемесячный платёж: ${monthlyPayment}
        и Общая сумма ипотеки ${totalPayment}`);
  };

  return (
    <div className="Calc1">
      <h3>Ипотечный калькулятор</h3>
      <p>Ставка - 9,6%</p>
      <div className="kredit">
        <h3>
          Сумма ипотеки
        </h3>
      </div>
      <div className="div2">
        <input type="number" onChange={(e) => setCost(e.target.value)}></input>
      </div>
      <div className="kredit">
        <h3>
          Первоначальный <br />
          взнос 
        </h3>
      </div>
      <div className="div2">
        <input
          type="number"
          onChange={(e) => setInitialPayment(e.target.value)}
        ></input>
      </div>
      <div className="kredit">
        <h3>
          Срок кредита
        </h3>
      </div>
      <div className="div2">
        <input type="number" onChange={(e) => setTerm(e.target.value)}></input>
      </div>
      <button className="styleButton" onClick={handleCalculate}>
        Рассчитать
      </button>

      <div className="kredit">
        <h3>Общий платеж</h3>
        <p>
          {monthlyPayment} рублей и Общая сумма ипотеки: {totalPayment} рублей
        </p>
      </div>
    </div>
  );
}

export default Calc1;
