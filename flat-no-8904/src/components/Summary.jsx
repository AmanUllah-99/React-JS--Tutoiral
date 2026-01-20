import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Summary = ({ month }) => {
  const { people } = useContext(ExpenseContext);

  const filteredExpenses = (person) =>
    month
      ? person.expenses.filter((e) => e.month === month)
      : person.expenses;

  const totalMonthly = people.reduce((sum, p) => sum + p.monthly, 0);
  const totalDaily = people.reduce(
    (sum, p) => sum + filteredExpenses(p).reduce((s, e) => s + e.amount, 0),
    0
  );
  const grandTotal = totalMonthly + totalDaily;

  return (
    <div className="mt-6 p-4 border rounded shadow">
      <h3 className="font-semibold text-xl mb-2">
        Summary {month && `(${month})`}
      </h3>
      <p>Total Monthly Expense: Rs {totalMonthly}</p>
      <p>Total Daily Expenses: Rs {totalDaily}</p>
      <p className="font-bold">Grand Total: Rs {grandTotal}</p>
    </div>
  );
};

export default Summary;
