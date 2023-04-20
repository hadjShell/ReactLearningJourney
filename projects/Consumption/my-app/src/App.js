import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import Card from "./components/Card";
import FilterBar from "./components/FilterBar";
import Chart from "./components/Chart";
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

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function App() {
  const [expenses, setExpenses] = useState(data);
  const [year, setYear] = useState(2021);

  const filteredeExpenses = expenses.filter(e => e.date.getFullYear() === year);
  const monthlyStas = generateMonthlyStats(filteredeExpenses);

  function generateMonthlyStats(expenses) {
    const monthlyExpenses = [];
    for (let i = 0; i < 12; i++) {
      monthlyExpenses[i] = {
        key: i,
        value: 0,
        month: monthNames[i],
      };
    }
    console.log(monthlyExpenses);

    let maxValue = 0;
    expenses.forEach(e => {
      monthlyExpenses[e.date.getMonth()].value += e.amount;
      maxValue += e.amount;
    });
    monthlyExpenses.push(maxValue);

    return monthlyExpenses;
  }

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
        <Chart monthlyStats={monthlyStas} />
      </Card>
      <Card>
        <FilterBar onYearChange={setYear} />
        {filteredeExpenses.length !== 0 ? (
          filteredeExpenses.map(expense => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        ) : (
          <p>No expenses found.</p>
        )}
      </Card>
    </div>
  );
}

export default App;
