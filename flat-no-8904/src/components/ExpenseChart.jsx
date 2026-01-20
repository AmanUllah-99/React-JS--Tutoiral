import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const ExpenseChart = () => {
  const { people } = useContext(ExpenseContext);

  const data = people.map((p) => ({
    name: p.name,
    Monthly: p.monthly,
    Daily: p.expenses.reduce((sum, e) => sum + e.amount, 0),
  }));

  return (
    <div className="mt-6 border rounded shadow p-4">
      <h3 className="font-semibold text-xl mb-2">Expenses Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Monthly" fill="#4ade80" />
          <Bar dataKey="Daily" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
