import "./ChartBar.css";

export default function ChartBar({ value, maxValue, label }) {
  const barPercent =
    maxValue > 0 ? Math.round((value / maxValue) * 100) + "%" : "0%";
  console.log(label, barPercent);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barPercent }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
