 import { useState } from "react"

export default function ExpenseForm({ people, setExpenses }) {
  const [form, setForm] = useState({
    date: "",
    person: people[0],
    amount: "",
    type: "meal",
  })

  const submitHandler = e => {
    e.preventDefault()
    setExpenses(prev => [...prev, { ...form, id: Date.now() }])
    setForm({ ...form, amount: "" })
  }

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-4 rounded-xl shadow mb-6 grid md:grid-cols-5 gap-3"
    >
      <input
        type="date"
        required
        className="border p-2 rounded"
        onChange={e => setForm({ ...form, date: e.target.value })}
      />

      <select
        className="border p-2 rounded"
        onChange={e => setForm({ ...form, person: e.target.value })}
      >
        {people.map(p => (
          <option key={p}>{p}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount"
        required
        className="border p-2 rounded"
        value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })}
      />

      <select
        className="border p-2 rounded"
        onChange={e => setForm({ ...form, type: e.target.value })}
      >
        <option value="meal">Meal</option>
        <option value="taken">Money Taken</option>
      </select>

      <button className="bg-blue-600 text-white rounded px-4">
        Add
      </button>
    </form>
  )
}
