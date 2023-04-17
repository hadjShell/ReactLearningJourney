import "./Calendar.css";

export default function Calendar(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__month">{props.date.getDate()}</div>
    </div>
  );
}
