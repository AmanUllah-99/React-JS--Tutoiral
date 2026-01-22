import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportFlatExpensesToExcel(
  roomLedger = [],
  dailyExpenses = [],
  monthlyCosts = {}
) {
  /* ---------- ROOM LEDGER ---------- */
  const roomLedgerData =
    roomLedger.length > 0
      ? roomLedger.map((p) => ({
          Name: p.name,
          Paid: Number(p.paid) || 0,
          Took: Number(p.took) || 0,
          Balance: (Number(p.paid) || 0) - (Number(p.took) || 0),
        }))
      : [{ Name: "No data", Paid: 0, Took: 0, Balance: 0 }];

  const roomLedgerSheet = XLSX.utils.json_to_sheet(roomLedgerData);

  /* ---------- DAILY EXPENSES ---------- */
  const dailyExpensesData =
    dailyExpenses.length > 0
      ? dailyExpenses.map((d) => ({
          Date: d.date || "",
          Breakfast: d.breakfastName || "",
          BreakfastCost: d.breakfastCost || 0,
          Lunch: d.lunchName || "",
          LunchCost: d.lunchCost || 0,
          Dinner: d.dinnerName || "",
          DinnerCost: d.dinnerCost || 0,
          Total: d.total || 0,
        }))
      : [
          {
            Date: "No daily expenses added",
            Breakfast: "",
            BreakfastCost: 0,
            Lunch: "",
            LunchCost: 0,
            Dinner: "",
            DinnerCost: 0,
            Total: 0,
          },
        ];

  const dailyExpensesSheet =
    XLSX.utils.json_to_sheet(dailyExpensesData);

  /* ---------- MONTHLY COSTS ---------- */
  const monthlyCostsData = [
    {
      Type: "Rent",
      Name: monthlyCosts?.rent?.name || "",
      Amount: monthlyCosts?.rent?.amount || 0,
    },
    {
      Type: "Bills",
      Name: monthlyCosts?.bills?.name || "",
      Amount: monthlyCosts?.bills?.amount || 0,
    },
    {
      Type: "Grocery",
      Name: monthlyCosts?.grocery?.name || "",
      Amount: monthlyCosts?.grocery?.amount || 0,
    },
  ];

  const monthlyCostsSheet =
    XLSX.utils.json_to_sheet(monthlyCostsData);

  /* ---------- SUMMARY SHEET ---------- */
  const totalPaid = roomLedger.reduce(
    (sum, p) => sum + (Number(p.paid) || 0),
    0
  );

  const totalDaily = dailyExpenses.reduce(
    (sum, d) => sum + (Number(d.total) || 0),
    0
  );

  const totalMonthly =
    (Number(monthlyCosts?.rent?.amount) || 0) +
    (Number(monthlyCosts?.bills?.amount) || 0) +
    (Number(monthlyCosts?.grocery?.amount) || 0);

  const summarySheet = XLSX.utils.json_to_sheet([
    { Item: "Total Collected", Amount: totalPaid },
    { Item: "Daily Expenses", Amount: totalDaily },
    { Item: "Monthly Costs", Amount: totalMonthly },
    {
      Item: "Remaining Balance",
      Amount: totalPaid - (totalDaily + totalMonthly),
    },
  ]);

  /* ---------- WORKBOOK ---------- */
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, roomLedgerSheet, "Room Ledger");
  XLSX.utils.book_append_sheet(workbook, dailyExpensesSheet, "Daily Expenses");
  XLSX.utils.book_append_sheet(workbook, monthlyCostsSheet, "Monthly Costs");
  XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  saveAs(
    new Blob([excelBuffer], {
      type: "application/octet-stream",
    }),
    "Flat_Expenses_Report.xlsx"
  );
}
