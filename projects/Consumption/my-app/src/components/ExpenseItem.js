import "./ExpenseItem.css";
import Calendar from "./Calendar";

export default function ExpenseItem(props) {
  return (
    <section className="expense-item">
      <div className="expense-item__description">
        <Calendar date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </section>
  );
}
