import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const PersonForm = ({ person }) => {
  // ✅ Hooks ALWAYS at top
  const { addExpense } = useContext(ExpenseContext);
  const [meal, setMeal] = useState("Morning");
  const [amount, setAmount] = useState("");

  // ❌ Only Zeeshan can add daily expenses
  if (person.name !== "Zeeshan") {
    return (
      <div className="border rounded-xl p-4 shadow bg-gray-50">
        <h2 className="font-semibold">{person.name}</h2>
        <p className="text-gray-500 mt-2">
          Monthly Expense: Rs 13,000
        </p>
      </div>
    );
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!amount) return;

    addExpense(person.id, {
      title: meal,
      amount: Number(amount),
      date: new Date().toLocaleDateString(),
    });

    setAmount("");
  };

  return (
    <div className="border rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-2">
        Zeeshan – Daily Expenses
      </h2>

      <form onSubmit={submitHandler} className="space-y-2">
        <select
          className="w-full border p-2 rounded"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        >
          <option>Morning</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>

        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Add Daily Expense
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
