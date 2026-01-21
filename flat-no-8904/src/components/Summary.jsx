 
export default function Summary({
  roomLedger,
  dailyExpenses,
  monthlyCosts,
}) {
  // 1️⃣ Initial Room Fund
  const totalCollected = roomLedger.reduce(
    (sum, p) => sum + Number(p.paid || 0) - Number(p.took || 0),
    0
  );

  // 2️⃣ Total Daily Food Expenses
  const totalDailyExpenses = dailyExpenses.reduce((sum, d) => {
    return (
      sum +
      Number(d.breakfastCost || 0) +
      Number(d.lunchCost || 0) +
      Number(d.dinnerCost || 0)
    );
  }, 0);

  // 3️⃣ Total Monthly Fixed Costs
  const totalMonthlyCosts =
    Number(monthlyCosts.rent.amount || 0) +
    Number(monthlyCosts.bills.amount || 0) +
    Number(monthlyCosts.grocery.amount || 0);

  // 4️⃣ Final Remaining Fund
  const remainingFund =
    totalCollected - (totalDailyExpenses + totalMonthlyCosts);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Summary</h2>

      <div className="grid md:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-100 p-3 rounded">
          <p>Initial Room Fund</p>
          <strong>{totalCollected} PKR</strong>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p>Daily Food Expenses</p>
          <strong>{totalDailyExpenses} PKR</strong>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p>Monthly Fixed Costs</p>
          <strong>{totalMonthlyCosts} PKR</strong>
        </div>

        <div className="bg-green-100 p-3 rounded font-bold">
          <p>Remaining Fund</p>
          <strong>{remainingFund} PKR</strong>
        </div>
      </div>
    </div>
  );
}

