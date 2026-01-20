// src/components/ExpenseList.jsx
import React, { useContext } from "react";
import  ExpenseContext  from "../context/ExpenseContext";

const ExpenseList = ({ person }) => {
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <ul className="mb-4">
      {person.expenses.map((exp, idx) => (
        <li
          key={idx}
          className="flex justify-between bg-gray-100 p-2 rounded mb-1"
        >
          <span>{exp.desc} - ${exp.amount.toFixed(2)}</span>
          <button
            onClick={() => deleteExpense(person.id, idx)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
