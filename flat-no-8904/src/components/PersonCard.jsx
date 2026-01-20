import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const PersonCard = ({ person }) => {
  const { setPeople } = useContext(ExpenseContext);
  const [monthly, setMonthly] = useState(person.monthly);

  const handleMonthlyChange = (e) => {
    const value = Number(e.target.value);
    setMonthly(value);
    setPeople((prev) =>
      prev.map((p) => (p.id === person.id ? { ...p, monthly: value } : p))
    );
  };

  const dailyTotal = person.expenses.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{person.name}</h3>
      <div className="mt-1">
        Monthly Expense:{" "}
        <input
          type="number"
          value={monthly}
          onChange={handleMonthlyChange}
          className="border p-1 rounded w-24"
        />
      </div>
      <p className="mt-1">Total Daily Expenses: Rs {dailyTotal}</p>
    </div>
  );
};

export default PersonCard;
