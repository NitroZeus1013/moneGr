import Balance from "../components/balance";
import Header from "../components/header";
import IncomeExpense from "../components/incomeExpense";
import TaskList from "../components/tasklist";
import "../style/main.css";

import React, { useState } from "react";
import AddTask from "../components/addtask";

// DUMMY DATA
// const transaction = [
//   {
//     item: "cash",
//     amount: 500,
//   },
//   {
//     item: "book",
//     amount: -300,
//   },
//   {
//     item: "coffee",
//     amount: -100,
//   },
// ];
function deleteTransaction(id){

}
function calculateBalance(list) {
  return list.reduce((bal, amt) => {
    return (bal += Number(amt.amount));
  }, 0);
}

function Expense(list) {
  return list.reduce((exp, amt) => {
    return Number(amt.amount) < 0 ?  (exp += Number(amt.amount)):(exp += 0);
  }, 0);
}
function Income(list) {
  return list.reduce((exp, amt) => {
    return Number(amt.amount) > 0 ?  (exp += Number(amt.amount)):(exp += 0);
  }, 0);
}

function Tracker() {
  const [list, setList] = useState([]);

  return (
    <div id="container">
      <Header />
      <Balance bal={calculateBalance(list)} />
      <IncomeExpense exp={Expense(list)} Inc={Income(list)} />
      <TaskList data={list} />
      <AddTask list={list} setList={setList} />
    </div>
  );
}

export default Tracker;
