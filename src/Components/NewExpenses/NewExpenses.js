import React, { useState } from "react";
import Newform from "./Newform";
import "./NewExpenses.scss";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const EditingHandler = () => {
    setIsEditing(true);
  };
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={EditingHandler}>Add Expense</button>}
      {isEditing && (
        <Newform
          onSaveExpense={saveExpenseData}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
