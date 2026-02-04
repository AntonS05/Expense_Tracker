function ExpenseItem({expense, onDelete}) {
  return (
    <div className="item">
        {expense.title}: {expense.amount}
        <button type="button" onClick={() => onDelete(expense.id)}
        className="button-delete">
          Удалить
        </button>
    </div>
  );
}
export default ExpenseItem
