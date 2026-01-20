import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const DailyExpense = () => {
  const { people, setPeople, addDailyExpense } = useContext(ExpenseContext);

  const [personId, setPersonId] = useState(people[0]?.id || 1);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [meal, setMeal] = useState("Morning");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addDailyExpense(personId, {
      title,
      amount: Number(amount),
      meal,
      date: new Date().toLocaleDateString(),
      month: new Date().toLocaleString("default", { month: "long" }),
    });

    setTitle("");
    setAmount("");
    setMeal("Morning");
  };

  const handleEdit = (personId, idx, key, value) => {
    setPeople((prev) =>
      prev.map((p) =>
        p.id === personId
          ? {
              ...p,
              expenses: p.expenses.map((exp, i) =>
                i === idx
                  ? { ...exp, [key]: key === "amount" ? Number(value) : value }
                  : exp
              ),
            }
          : p
      )
    );
  };

  return (
    <div className="border p-4 rounded shadow mt-4">
      <h3 className="font-semibold text-xl mb-4">Add Daily Expense</h3>

      <form onSubmit={submitHandler} className="flex flex-col gap-2 mb-4">
        <select
          value={personId}
          onChange={(e) => setPersonId(Number(e.target.value))}
          className="border p-2 rounded w-full"
        >
          {people.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Expense Name"
          className="border p-2 rounded w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        >
          <option>Morning</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded w-full hover:bg-green-700 transition"
        >
          Add Expense
        </button>
      </form>

      {people.map((person) =>
        person.expenses.length > 0 ? (
          <div key={person.id} className="mt-6">
            <h4 className="font-semibold mb-2 text-lg">{person.name}'s Expenses</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Meal</th>
                    <th className="border px-4 py-2">Expense</th>
                    <th className="border px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {person.expenses.map((exp, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={exp.date}
                          onChange={(e) =>
                            handleEdit(person.id, idx, "date", e.target.value)
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          value={exp.meal}
                          onChange={(e) =>
                            handleEdit(person.id, idx, "meal", e.target.value)
                          }
                          className="border p-1 rounded w-full"
                        >
                          <option>Morning</option>
                          <option>Lunch</option>
                          <option>Dinner</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) =>
                            handleEdit(person.id, idx, "title", e.target.value)
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="number"
                          value={exp.amount}
                          onChange={(e) =>
                            handleEdit(person.id, idx, "amount", e.target.value)
                          }
                          className="border p-1 rounded w-full"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right font-bold mt-2">
                Total Daily Expense: Rs{" "}
                {person.expenses.reduce((a, b) => a + b.amount, 0)}
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default DailyExpense;
