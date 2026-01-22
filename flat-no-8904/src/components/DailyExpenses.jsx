 

 
// import { useState, useEffect } from "react";

// const STORAGE_KEY = "dailyExpenses";

// export default function DailyExpenses({ dailyExpenses, setDailyExpenses }) {
//   const [form, setForm] = useState({
//     date: "",
//     mealType: "breakfast",
//     mealName: "",
//     mealCost: "",
//   });

//   // Load saved data from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) setDailyExpenses(JSON.parse(saved));
//   }, [setDailyExpenses]);

//   // Save dailyExpenses to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyExpenses));
//   }, [dailyExpenses]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!form.date || !form.mealName || !form.mealCost) return;

//     const cost = Number(form.mealCost);
//     const index = dailyExpenses.findIndex((d) => d.date === form.date);

//     if (index !== -1) {
//       // Update existing row by pushing new meal
//       const updated = [...dailyExpenses];

//       if (!Array.isArray(updated[index][form.mealType])) {
//         updated[index][form.mealType] = [];
//       }

//       updated[index][form.mealType].push({ name: form.mealName, cost });

//       // Recalculate total
//       const getTotal = (meals) =>
//         meals?.reduce((sum, m) => sum + m.cost, 0) || 0;

//       updated[index].total =
//         getTotal(updated[index].breakfast) +
//         getTotal(updated[index].lunch) +
//         getTotal(updated[index].dinner);

//       setDailyExpenses(updated);
//     } else {
//       // Create new row
//       const newRow = {
//         id: Date.now(),
//         date: form.date,
//         breakfast: [{ name: form.mealName, cost }],
//         lunch: [],
//         dinner: [],
//         total: cost,
//       };

//       setDailyExpenses([...dailyExpenses, newRow]);
//     }

//     setForm({ ...form, mealName: "", mealCost: "" });
//   };

//   // Helper to display meals as "Name (Cost), Name (Cost)"
//   const formatMeals = (meals) => {
//     if (!Array.isArray(meals) || meals.length === 0) return "";
//     return meals.map((m) => `${m.name} (${m.cost})`).join(", ");
//   };

//   // Calculate grand total of all days
//   const grandTotal = dailyExpenses.reduce((sum, day) => sum + (day.total || 0), 0);

//   return (
//     <div className="bg-white p-4 rounded-xl shadow mb-6">
//       <h2 className="text-xl font-bold mb-3">Daily Meal Expenses</h2>

//       <form onSubmit={submitHandler} className="grid md:grid-cols-4 gap-2 mb-4">
//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           className="border p-1 rounded"
//         />

//         <select
//           value={form.mealType}
//           onChange={(e) => setForm({ ...form, mealType: e.target.value })}
//           className="border p-1 rounded"
//         >
//           <option value="breakfast">Breakfast</option>
//           <option value="lunch">Lunch</option>
//           <option value="dinner">Dinner</option>
//         </select>

//         <input
//           type="!text"
//           placeholder="Meal name"
//           value={form.mealName}
//           onChange={(e) => setForm({ ...form, mealName: e.target.value })}
//           className="border p-1 rounded"
//         />

//         <input
//           type="number"
//           placeholder="Cost (PKR)"
//           value={form.mealCost}
//           onChange={(e) => setForm({ ...form, mealCost: e.target.value })}
//           className="border p-1 rounded"
//         />

//         <button className="bg-blue-600 text-white rounded px-3 py-1">
//           Add / Update
//         </button>
//       </form>

//       <table className="w-full border text-center">
//         <thead className="bg-gray-200">
//           <tr>
//             <th>Date</th>
//             <th>Breakfast</th>
//             <th>Lunch</th>
//             <th>Dinner</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dailyExpenses.map((d) => (
//             <tr key={d.id} className="border-t">
//               <td>{d.date}</td>
//               <td>{formatMeals(d.breakfast)}</td>
//               <td>{formatMeals(d.lunch)}</td>
//               <td>{formatMeals(d.dinner)}</td>
//               <td className="font-bold">{d.total}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot className="bg-gray-100 font-bold">
//           <tr>
//             <td colSpan={4} className="text-right px-2 py-1">
//               Grand Total:
//             </td>
//             <td>{grandTotal}</td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// const STORAGE_KEY = "dailyExpensesByMonth";

// const monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// export default function DailyExpenses({ dailyExpenses, setDailyExpenses }) {
//   const [form, setForm] = useState({
//     date: "",
//     mealType: "breakfast",
//     mealName: "",
//     mealCost: "",
//   });

//   // Load saved data from localStorage on mount
//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) setDailyExpenses(JSON.parse(saved));
//   }, [setDailyExpenses]);

//   // Save dailyExpenses to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyExpenses));
//   }, [dailyExpenses]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!form.date || !form.mealName || !form.mealCost) return;

//     const cost = Number(form.mealCost);
//     const dateObj = new Date(form.date);
//     const month = monthNames[dateObj.getMonth()]; // e.g., "January"

//     // Ensure month exists
//     const monthData = dailyExpenses[month] ? [...dailyExpenses[month]] : [];

//     // Check if this date already exists
//     const index = monthData.findIndex((d) => d.date === form.date);

//     if (index !== -1) {
//       // Push new meal to existing date
//       if (!Array.isArray(monthData[index][form.mealType])) {
//         monthData[index][form.mealType] = [];
//       }
//       monthData[index][form.mealType].push({ name: form.mealName, cost });

//       // Recalculate total
//       const getTotal = (meals) =>
//         meals?.reduce((sum, m) => sum + m.cost, 0) || 0;

//       monthData[index].total =
//         getTotal(monthData[index].breakfast) +
//         getTotal(monthData[index].lunch) +
//         getTotal(monthData[index].dinner);

//     } else {
//       // Create new day
//       const newDay = {
//         id: Date.now(),
//         date: form.date,
//         breakfast: [],
//         lunch: [],
//         dinner: [],
//         total: 0,
//       };
//       newDay[form.mealType].push({ name: form.mealName, cost });
//       newDay.total = cost;

//       monthData.push(newDay);
//     }

//     // Update state
//     setDailyExpenses({ ...dailyExpenses, [month]: monthData });

//     // Reset form
//     setForm({ ...form, mealName: "", mealCost: "" });
//   };

//   // Helper to display meals
//   const formatMeals = (meals) => {
//     if (!Array.isArray(meals) || meals.length === 0) return "";
//     return meals.map((m) => `${m.name} (${m.cost})`).join(", ");
//   };

//   return (
//     <div className="bg-white p-4 rounded-xl shadow mb-6">
//       <h2 className="text-xl font-bold mb-3">Daily Meal Expenses</h2>

//       <form onSubmit={submitHandler} className="grid md:grid-cols-4 gap-2 mb-4">
//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           className="border p-1 rounded"
//         />

//         <select
//           value={form.mealType}
//           onChange={(e) => setForm({ ...form, mealType: e.target.value })}
//           className="border p-1 rounded"
//         >
//           <option value="breakfast">Breakfast</option>
//           <option value="lunch">Lunch</option>
//           <option value="dinner">Dinner</option>
//         </select>

//         <input
//           type="text"
//           placeholder="Meal name"
//           value={form.mealName}
//           onChange={(e) => setForm({ ...form, mealName: e.target.value })}
//           className="border p-1 rounded"
//         />

//         <input
//           type="number"
//           placeholder="Cost (PKR)"
//           value={form.mealCost}
//           onChange={(e) => setForm({ ...form, mealCost: e.target.value })}
//           className="border p-1 rounded"
//         />

//         <button className="bg-blue-600 text-white rounded px-3 py-1">
//           Add / Update
//         </button>
//       </form>

//       {monthNames.map((month) => {
//         const monthData = dailyExpenses[month];
//         if (!monthData || monthData.length === 0) return null;

//         const monthlyTotal = monthData.reduce((sum, d) => sum + d.total, 0);

//         return (
//           <div key={month} className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">{month}</h3>
//             <table className="w-full border text-center mb-2">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th>Date</th>
//                   <th>Breakfast</th>
//                   <th>Lunch</th>
//                   <th>Dinner</th>
//                   <th>Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {monthData.map((d) => (
//                   <tr key={d.id} className="border-t">
//                     <td>{d.date}</td>
//                     <td>{formatMeals(d.breakfast)}</td>
//                     <td>{formatMeals(d.lunch)}</td>
//                     <td>{formatMeals(d.dinner)}</td>
//                     <td className="font-bold">{d.total}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot className="bg-gray-100 font-bold">
//                 <tr>
//                   <td colSpan={4} className="text-right px-2 py-1">
//                     Monthly Total:
//                   </td>
//                   <td>{monthlyTotal}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
import { useState, useEffect } from "react";

const STORAGE_KEY = "dailyExpensesByMonth";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function DailyExpenses() {
  // ✅ Initialize from localStorage
  const [dailyExpenses, setDailyExpenses] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  const [form, setForm] = useState({
    date: "",
    mealType: "breakfast",
    mealName: "",
    mealCost: "",
  });

  // Save to localStorage whenever dailyExpenses changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dailyExpenses));
  }, [dailyExpenses]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.date || !form.mealName || !form.mealCost) return;

    const cost = Number(form.mealCost);
    const dateObj = new Date(form.date);
    const month = monthNames[dateObj.getMonth()];

    const monthData = dailyExpenses[month] ? [...dailyExpenses[month]] : [];

    const index = monthData.findIndex((d) => d.date === form.date);

    if (index !== -1) {
      if (!Array.isArray(monthData[index][form.mealType])) {
        monthData[index][form.mealType] = [];
      }
      monthData[index][form.mealType].push({ name: form.mealName, cost });

      const getTotal = (meals) =>
        meals?.reduce((sum, m) => sum + m.cost, 0) || 0;

      monthData[index].total =
        getTotal(monthData[index].breakfast) +
        getTotal(monthData[index].lunch) +
        getTotal(monthData[index].dinner);

    } else {
      const newDay = {
        id: Date.now(),
        date: form.date,
        breakfast: [],
        lunch: [],
        dinner: [],
        total: 0,
      };
      newDay[form.mealType].push({ name: form.mealName, cost });
      newDay.total = cost;

      monthData.push(newDay);
    }

    setDailyExpenses({ ...dailyExpenses, [month]: monthData });

    setForm({ ...form, mealName: "", mealCost: "" });
  };
  

  // Delete a month
  const deleteMonth = (month) => {
    if (window.confirm(`Are you sure you want to delete all expenses for ${month}?`)) {
      const updated = { ...dailyExpenses };
      delete updated[month];
      setDailyExpenses(updated);
    }
  };

  const formatMeals = (meals) => {
    if (!Array.isArray(meals) || meals.length === 0) return "";
    return meals.map((m) => `${m.name} (${m.cost})`).join(", ");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-3">Daily Meal Expenses</h2>

      <form onSubmit={submitHandler} className="grid md:grid-cols-4 gap-2 mb-4">
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-1 rounded"
        />

        <select
          value={form.mealType}
          onChange={(e) => setForm({ ...form, mealType: e.target.value })}
          className="border p-1 rounded"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <input
          type="text"
          placeholder="Meal name"
          value={form.mealName}
          onChange={(e) => setForm({ ...form, mealName: e.target.value })}
          className="border p-1 rounded"
        />

        <input
          type="number"
          placeholder="Cost (PKR)"
          value={form.mealCost}
          onChange={(e) => setForm({ ...form, mealCost: e.target.value })}
          className="border p-1 rounded"
        />

        <button className="bg-blue-600 text-white rounded px-3 py-1 font-bold">
          Add 
        </button>
      </form>

      {monthNames.map((month) => {
        const monthData = dailyExpenses[month];
        if (!monthData || monthData.length === 0) return null;

        const monthlyTotal = monthData.reduce((sum, d) => sum + d.total, 0);

        return (
          <div key={month} className="mb-6 border rounded p-2 shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{month}</h3>
              <button
                onClick={() => deleteMonth(month)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete Month
              </button>
            </div>

            <table className="w-full border text-center mb-2">
              <thead className="bg-gray-200">
                <tr>
                  <th>Date</th>
                  <th>Breakfast</th>
                  <th>Lunch</th>
                  <th>Dinner</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {monthData.map((d) => (
                  <tr key={d.id} className="border-t">
                    <td>{d.date}</td>
                    <td>{formatMeals(d.breakfast)}</td>
                    <td>{formatMeals(d.lunch)}</td>
                    <td>{formatMeals(d.dinner)}</td>
                    <td className="font-bold">{d.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-100 font-bold">
                <tr>
                  <td colSpan={4} className="text-right px-2 py-1">
                    Monthly Total:
                  </td>
                  <td>{monthlyTotal}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        );
      })}
    </div>
  );
}
