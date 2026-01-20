import { useState, useEffect } from "react";
import { ExpenseContext } from "./ExpenseContext";

const initialPeople = [
  { id: 1, name: "Zeeshan", monthly: 13000, expenses: [] },
  { id: 2, name: "Bushu", monthly: 13000, expenses: [] },
  { id: 3, name: "Yousaf", monthly: 13000, expenses: [] },
  { id: 4, name: "Israr", monthly: 13000, expenses: [] },
  { id: 5, name: "Karamat", monthly: 13000, expenses: [] },
  { id: 6, name: "Amaan", monthly: 13000, expenses: [] },
];

const ExpenseProvider = ({ children }) => {
  const [people, setPeople] = useState(() => {
    const saved = localStorage.getItem("flat804_expenses");
    return saved ? JSON.parse(saved) : initialPeople;
  });

  useEffect(() => {
    localStorage.setItem("flat804_expenses", JSON.stringify(people));
  }, [people]);

  const addDailyExpense = (id, expense) => {
    setPeople((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, expenses: [...p.expenses, expense] } : p
      )
    );
  };

  return (
    <ExpenseContext.Provider value={{ people, setPeople, addDailyExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
