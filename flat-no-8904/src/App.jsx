import { useContext, useState } from "react";
import { ExpenseContext } from "./context/ExpenseContext";
import PersonCard from "./components/PersonCard";
import DailyExpense from "./components/DailyExpense";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  const { people } = useContext(ExpenseContext);
  const [month, setMonth] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Monthly Expense Manager
      </h1>

      {/* People Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {people.map((p) => (
          <PersonCard key={p.id} person={p} />
        ))}
      </div>

      {/* Daily Expense Form */}
      <DailyExpense />

      {/* Month Selector */}
      <div className="mt-6">
        <label className="font-semibold">Select Month: </label>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2 rounded ml-2"
        >
          <option value="">All</option>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Summary */}
      <Summary month={month} />

      {/* Chart */}
      <ExpenseChart />
    </div>
  );
};

export default App;
