import React from "react";
import styles from '../style/income-expense.module.css'


function IncomeExpense({exp,Inc}) {
   
  return (
    <div id={styles.incomeExpense}>
      <div id="income">
        <h2>Income</h2>
        <h4>{Inc}</h4>
      </div>

      <div id="expense">
        <h2>Expense</h2>
        <h4>{exp}</h4>
      </div>
    </div>
  );
}

export default IncomeExpense;
