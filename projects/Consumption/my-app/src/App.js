import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";
import { useState } from "react";

const data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(data);
  const [year, setYear] = useState(2020);

  function handleNewExpense(expense) {
    setExpenses(e => [expense, ...e]);
  }

  return (
    <div className="App">
      <NewExpense
        onAddNewExpense={handleNewExpense}
        id={"e" + (expenses.length + 1)}
      />
      <Card>
        <FilterBar onYearChange={setYear} />
        {expenses
          .filter(e => e.date.getFullYear() === year)
          .map(expense => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))}
      </Card>
    </div>
  );
}

export default App;
