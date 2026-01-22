 
import { useEffect } from "react";

const PEOPLE = ["Zeeshan", "Basharat", "Yousaf", "Israr", "Karamat", "Amaan"];
const MONTHLY_RENT_PER_PERSON = 13000;
const STORAGE_KEY = "roomLedger";

export default function RoomLedger({ roomLedger, setRoomLedger }) {
  // Initialize default data if localStorage is empty
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const defaultLedger = PEOPLE.map((name) => ({
        name,
        paid: MONTHLY_RENT_PER_PERSON,
        took: 0,
      }));
      setRoomLedger(defaultLedger);
    }
  }, [setRoomLedger]);

  // Persist to localStorage whenever roomLedger changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(roomLedger));
  }, [roomLedger]);

  // Update a field (paid/took)
  const updateValue = (index, field, value) => {
    const updated = [...roomLedger];
    updated[index][field] = Number(value) || 0;
    setRoomLedger(updated);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-3">Room Ledger</h2>

      <table className="w-full border font-bold">
        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Paid (PKR)</th>
            <th>Money Taken (PKR)</th>
            <th>Balance (PKR)</th>
          </tr>
        </thead>
        <tbody>
          {roomLedger.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                Loading ledger...
              </td>
            </tr>
          )}
          {roomLedger.map((p, i) => (
            <tr key={p.name} className="text-center border-t">
              <td>{p.name}</td>

              <td>
                <input
                  type="number"
                  value={p.paid}
                  onChange={(e) => updateValue(i, "paid", e.target.value)}
                  className="border w-24 p-1 rounded"
                />
              </td>

              <td>
                <input
                  type="number"
                  value={p.took}
                  onChange={(e) => updateValue(i, "took", e.target.value)}
                  className="border w-24 p-1 rounded"
                />
              </td>

              <td className="font-bold">{Number(p.paid) - Number(p.took)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

