import { useState } from "react";


export default function DailyExpenses({ dailyExpenses, setDailyExpenses }) {
  const [form, setForm] = useState({
    date: "",
    mealType: "breakfast",
    mealName: "",
    mealCost: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.date || !form.mealName || !form.mealCost) return;

    const cost = Number(form.mealCost);
    const index = dailyExpenses.findIndex((d) => d.date === form.date);

    if (index !== -1) {
      const updated = [...dailyExpenses];
      updated[index][`${form.mealType}Name`] = form.mealName;
      updated[index][`${form.mealType}Cost`] = cost;

      updated[index].total =
        (updated[index].breakfastCost || 0) +
        (updated[index].lunchCost || 0) +
        (updated[index].dinnerCost || 0);

      setDailyExpenses(updated);
    } else {
      const newRow = {
        id: Date.now(),
        date: form.date,
        breakfastName: "",
        breakfastCost: 0,
        lunchName: "",
        lunchCost: 0,
        dinnerName: "",
        dinnerCost: 0,
      };

      newRow[`${form.mealType}Name`] = form.mealName;
      newRow[`${form.mealType}Cost`] = cost;

      newRow.total =
        newRow.breakfastCost + newRow.lunchCost + newRow.dinnerCost;

      setDailyExpenses([...dailyExpenses, newRow]);
    }

    setForm({ ...form, mealName: "", mealCost: "" });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-3">Daily Meal Expenses</h2>

      <form onSubmit={submitHandler} className="grid md:grid-cols-4 gap-2 mb-4">
        <input type="date" value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-1 rounded" />

        <select value={form.mealType}
          onChange={(e) => setForm({ ...form, mealType: e.target.value })}
          className="border p-1 rounded">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <input type="text" placeholder="Meal name"
          value={form.mealName}
          onChange={(e) => setForm({ ...form, mealName: e.target.value })}
          className="border p-1 rounded" />

        <input type="number" placeholder="Cost (PKR)"
          value={form.mealCost}
          onChange={(e) => setForm({ ...form, mealCost: e.target.value })}
          className="border p-1 rounded" />

        <button className="bg-blue-600 text-white rounded px-3 py-1">
          Add / Update
        </button>
      </form>

      <table className="w-full border text-center">
        <thead className="bg-gray-200">
          <tr>
            <th>Date</th>
            <th>Breakfast</th>
            <th>Cost</th>
            <th>Lunch</th>
            <th>Cost</th>
            <th>Dinner</th>
            <th>Cost</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {dailyExpenses.map((d) => (
            <tr key={d.id} className="border-t">
              <td>{d.date}</td>
              <td>{d.breakfastName}</td>
              <td>{d.breakfastCost}</td>
              <td>{d.lunchName}</td>
              <td>{d.lunchCost}</td>
              <td>{d.dinnerName}</td>
              <td>{d.dinnerCost}</td>
              <td className="font-bold">{d.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
