import "./ExpenseItem.css";
import Calendar from "./Calendar";
import Card from "./Card";

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <Calendar date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
