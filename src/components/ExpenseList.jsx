import ExpenseItem from "./ExpenseItem";

function ExpenseList({expenses, onDelete}) {
  return (
    <div className="item-list">
        <h2>Список расходов</h2>

        {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))}
    </div>
  );
}
export default ExpenseList
