import React, { useState } from "react";
import "./Newform.scss";

const Newform = (props) => {
  const [inputedTitle, setInputedTitle] = useState("");
  const [inputedAmount, setInputedAmount] = useState("");
  const [inputedDate, setInputedDate] = useState("");
  const [cancelAdd, setCancelAdd] = useState(false);

  const inputedTitleHandler = (event) => {
    setInputedTitle(event.target.value);
  };
  const inputedAmountHandler = (event) => {
    setInputedAmount(event.target.value);
  };
  const inputedDateHandler = (event) => {
    setInputedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputedTitle,
      amount: inputedAmount,
      date: new Date(inputedDate),
    };

    props.onSaveExpense(expenseData);
    setInputedTitle("");
    setInputedAmount("");
    setInputedDate("");
  };

  const cancelAddingExpense = () => {
    setCancelAdd(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={inputedTitle}
            onChange={inputedTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputedAmount}
            min="0.01"
            step="0.01"
            onChange={inputedAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={inputedDate}
            min="2022-01-01"
            max="2023-06-12"
            onChange={inputedDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default Newform;
