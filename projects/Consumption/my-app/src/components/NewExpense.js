import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({ onAddNewExpense, id }) {
  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={onAddNewExpense} id={id} />
    </div>
  );
}
