import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onAddNewExpense: handleNewExpense, id }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setExpense(preE => ({ ...preE, title: e.target.value }));
        break;
      case "amount":
        setExpense(preE => ({ ...preE, amount: e.target.value }));
        break;
      case "date":
        setExpense(preE => ({ ...preE, date: e.target.value }));
        break;
      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      ...expense,
      date: new Date(expense.date),
      id: id,
    };
    handleNewExpense(newExpense);

    // Reset
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            min="0.01"
            step="0.01"
            onChange={handleChange}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
