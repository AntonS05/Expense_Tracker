import { useState } from "react"

function ExpenseForm({onAddExpense}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const numberAmount = Number(amount);

    if (!trimmedTitle) return;
    if (!Number.isFinite(numberAmount) || numberAmount <= 0) return;

    onAddExpense({
      title: trimmedTitle,
      amount: numberAmount,
    });

    setTitle("");
    setAmount("");
  };

 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Название</label>
        <input type="text" value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Например: Еда" />
      </div>

      <div>
        <label>Сумма</label>
        <input type="text" value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Например: 20.5"/>
      </div>

      <button type="submit">Добавить</button>
    </form>
  );
}
export default ExpenseForm
