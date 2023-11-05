import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({
  initialInvest,
  annualInvest,
  expectedReturn,
  duration,
}) {
  const annualData = calculateInvestmentResults(
    Number(initialInvest),
    Number(annualInvest),
    Number(expectedReturn),
    Number(duration)
  );

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map(data => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.investmentValue)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.totalInterest)}</td>
              <td>{formatter.format(data.investmentCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
