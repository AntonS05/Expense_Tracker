import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";

function App() {
const [expenses, setExpenses] = useState(() => {
  const saved = localStorage.getItem("expenses");
  return saved ? JSON.parse(saved) : [
    { id: 1, title: "Еда", amount: 12 },
    { id: 2, title: "Транспорт", amount: 3.5 },
    { id: 3, title: "Интернет", amount: 15 },
  ];
});
  
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [{id: Date.now(), ...newExpense}, ...prev])
  }

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  return (
    <div className="main">
      <h1>Expense Tracker</h1>

      <div className="line"></div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <div className="line"></div>
      <TotalExpense expenses={expenses} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense}/>
    </div>
  );
}

export default App
