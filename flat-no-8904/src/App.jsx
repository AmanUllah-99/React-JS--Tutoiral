 
// import { useState } from "react";
// import RoomLedger from "./components/RoomLedger";
// import DailyExpenses from "./components/DailyExpenses";
// import MonthlyFixedCosts from "./components/MonthlyFixedCosts";
// import Summary from "./components/Summary";

// function App() {
  
//   const [roomLedger, setRoomLedger] = useState(() => {
//     const saved = localStorage.getItem("roomLedger");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [dailyExpenses, setDailyExpenses] = useState(() => {
//     const saved = localStorage.getItem("dailyExpenses");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [monthlyCosts, setMonthlyCosts] = useState(() => {
//     const saved = localStorage.getItem("monthlyFixedCosts");
//     return saved
//       ? JSON.parse(saved)
//       : {
//           rent: { name: "", amount: 0 },
//           bills: { name: "", amount: 0 },
//           grocery: { name: "", amount: 0 },
//         };
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 space-y-6">
//       <h1 className="text-3xl font-bold text-center">
//         Flat Expenses & Ledger Manager
//       </h1>

//       <RoomLedger roomLedger={roomLedger} setRoomLedger={setRoomLedger} />

//       <DailyExpenses
//         dailyExpenses={dailyExpenses}
//         setDailyExpenses={setDailyExpenses}
//       />

//       <MonthlyFixedCosts
//         monthlyCosts={monthlyCosts}
//         setMonthlyCosts={setMonthlyCosts}
//       />

//       <Summary
//         roomLedger={roomLedger}
//         dailyExpenses={dailyExpenses}
//         monthlyCosts={monthlyCosts}
//       />
//     </div>
   

//   );
// }

// export default App;
import { useEffect, useState } from "react";
import RoomLedger from "./components/RoomLedger";
import DailyExpenses from "./components/DailyExpenses";
import MonthlyFixedCosts from "./components/MonthlyFixedCosts";
import Summary from "./components/Summary";
import { exportFlatExpensesToExcel } from "./utils/exportExcel";


function App() {
  /* ---------- STATE (unchanged logic) ---------- */

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

  /* ---------- LOCAL STORAGE (NEW – REQUIRED) ---------- */
  useEffect(() => {
    localStorage.setItem("roomLedger", JSON.stringify(roomLedger));
  }, [roomLedger]);

  useEffect(() => {
    localStorage.setItem("dailyExpenses", JSON.stringify(dailyExpenses));
  }, [dailyExpenses]);

  useEffect(() => {
    localStorage.setItem(
      "monthlyFixedCosts",
      JSON.stringify(monthlyCosts)
    );
  }, [monthlyCosts]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Flat Expenses & Ledger Manager
      </h1>

      <RoomLedger
        roomLedger={roomLedger}
        setRoomLedger={setRoomLedger}
      />

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
      <button
  onClick={() =>
    exportFlatExpensesToExcel(
      roomLedger,
      dailyExpenses,
      monthlyCosts
    )
  }
  className="bg-green-600 text-white px-6 py-2 rounded mx-auto block"
>
  Export to Excel
</button>

      
    </div>
  );
}

export default App;

