import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import "./App.scss";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const Dummy_Data = [
  {
    id: "e1",
    title: "Restaurant spend",
    amount: 2000,
    date: new Date(2023, 2 - 1, 4),
  },
  {
    id: "e2",
    title: "Clothes",
    amount: 3000,
    date: new Date(2023, 2 - 1, 10),
  },
  {
    id: "e3",
    title: "Petrol",
    amount: 1000,
    date: new Date(2023, 2 - 1, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
