import React from "react";
import "./ExpenseFilter.scss";

const ExpenseFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
