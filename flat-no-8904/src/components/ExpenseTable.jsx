 export default function ExpenseTable({ expenses, setExpenses }) {
  const deleteExpense = id => {
    setExpenses(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Expense Records</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Date</th>
            <th>Person</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map(e => (
            <tr key={e.id} className="text-center border-t">
              <td>{e.date}</td>
              <td>{e.person}</td>
              <td>{e.type}</td>
              <td>Rs {e.amount}</td>
              <td>
                <button
                  onClick={() => deleteExpense(e.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {expenses.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-4">
                No records yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
