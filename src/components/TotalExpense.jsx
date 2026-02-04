function TotalExpense({expenses}) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div className="total">
        <h2>
            Итог: {total}
        </h2>
    </div>
  );
}
export default TotalExpense
