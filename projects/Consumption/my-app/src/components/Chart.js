import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart({ monthlyStats }) {
  const maxValue = monthlyStats.pop();

  return (
    <div className="chart">
      {monthlyStats.map(data => (
        <ChartBar
          key={data.key}
          value={data.value}
          maxValue={maxValue}
          label={data.month}
        />
      ))}
    </div>
  );
}
