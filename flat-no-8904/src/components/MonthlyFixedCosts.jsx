import { useEffect } from "react";

const STORAGE_KEY = "monthlyFixedCosts";

export default function MonthlyFixedCosts({ monthlyCosts, setMonthlyCosts }) {
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(monthlyCosts));
  }, [monthlyCosts]);

  const total =
    Number(monthlyCosts.rent.amount || 0) +
    Number(monthlyCosts.bills.amount || 0) +
    Number(monthlyCosts.grocery.amount || 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Monthly Fixed Costs</h2>

      {/* Rent */}
      <div className="grid md:grid-cols-3 gap-3 mb-3">
        <input
          type="text"
          placeholder="Rent Name"
          value={monthlyCosts.rent.name}
          onChange={(e) =>
            setMonthlyCosts({
              ...monthlyCosts,
              rent: { ...monthlyCosts.rent, name: e.target.value },
            })
          }
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Rent Amount (PKR)"
          value={monthlyCosts.rent.amount}
          onChange={(e) =>
            setMonthlyCosts({
              ...monthlyCosts,
              rent: { ...monthlyCosts.rent, amount: e.target.value },
            })
          }
          className="border p-2 rounded"
        />
      </div>

      {/* Bills */}
      <div className="grid md:grid-cols-3 gap-3 mb-3">
        <input
          type="text"
          placeholder="Bills Name"
          value={monthlyCosts.bills.name}
          onChange={(e) =>
            setMonthlyCosts({
              ...monthlyCosts,
              bills: { ...monthlyCosts.bills, name: e.target.value },
            })
          }
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Bills Amount (PKR)"
          value={monthlyCosts.bills.amount}
          onChange={(e) =>
            setMonthlyCosts({
              ...monthlyCosts,
              bills: { ...monthlyCosts.bills, amount: e.target.value },
            })
          }
          className="border p-2 rounded"
        />
      </div>

      {/* Grocery */}
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          type="text"
          placeholder="Grocery Name"
          value={monthlyCosts.grocery.name}
          onChange={(e) =>
            setMonthlyCosts({
              ...monthlyCosts,
              grocery: { ...monthlyCosts.grocery, name: e.target.value },
            })
          }
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Grocery Amount (PKR)"
          value={monthlyCosts.grocery.amount}
          onChange={(e) =>
            setMonthlyCosts({
              ...monthlyCosts,
              grocery: { ...monthlyCosts.grocery, amount: e.target.value },
            })
          }
          className="border p-2 rounded"
        />
      </div>

      <div className="text-lg font-semibold">
        Total Monthly Fixed Cost:{" "}
        <span className="text-blue-600">{total} PKR</span>
      </div>
    </div>
  );
}
