export default function RoomLedger({ roomLedger, setRoomLedger }) {
  const updateValue = (index, field, value) => {
    const updated = [...roomLedger];
    updated[index][field] = Number(value) || 0;
    setRoomLedger(updated);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-3">Room Ledger</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Paid (PKR)</th>
            <th>Took (PKR)</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {roomLedger.map((p, i) => (
            <tr key={p.name} className="text-center border-t">
              <td>{p.name}</td>

              <td>
                <input
                  type="number"
                  value={p.paid}
                  onChange={(e) => updateValue(i, "paid", e.target.value)}
                  className="border w-24 p-1"
                />
              </td>

              <td>
                <input
                  type="number"
                  value={p.took}
                  onChange={(e) => updateValue(i, "took", e.target.value)}
                  className="border w-24 p-1"
                />
              </td>

              <td className="font-bold">
                {Number(p.paid) - Number(p.took)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
