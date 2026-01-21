 
import { useState } from "react";
import RoomLedger from "./components/RoomLedger";
import DailyExpenses from "./components/DailyExpenses";
import MonthlyFixedCosts from "./components/MonthlyFixedCosts";
import Summary from "./components/Summary";

function App() {
  const [roomLedger, setRoomLedger] = useState(() => {
    const saved = localStorage.getItem("roomLedger");
    return saved ? JSON.parse(saved) : [];
  });

  const [dailyExpenses, setDailyExpenses] = useState(() => {
    const saved = localStorage.getItem("dailyExpenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [monthlyCosts, setMonthlyCosts] = useState(() => {
    const saved = localStorage.getItem("monthlyFixedCosts");
    return saved
      ? JSON.parse(saved)
      : {
          rent: { name: "", amount: 0 },
          bills: { name: "", amount: 0 },
          grocery: { name: "", amount: 0 },
        };
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Flat Expenses & Ledger Manager
      </h1>

      <RoomLedger roomLedger={roomLedger} setRoomLedger={setRoomLedger} />

      <DailyExpenses
        dailyExpenses={dailyExpenses}
        setDailyExpenses={setDailyExpenses}
      />

      <MonthlyFixedCosts
        monthlyCosts={monthlyCosts}
        setMonthlyCosts={setMonthlyCosts}
      />

      <Summary
        roomLedger={roomLedger}
        dailyExpenses={dailyExpenses}
        monthlyCosts={monthlyCosts}
      />
    </div>
  );
}

export default App;

