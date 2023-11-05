export default function InvestmentForm({
  initialInvest,
  annualInvest,
  expectedReturn,
  duration,
  setInitialInvest,
  setAnnualInvest,
  setExpectedReturn,
  setDuration,
}) {
  return (
    <section id="user-input">
      <div className="input-group"></div>
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={initialInvest}
          onChange={e => setInitialInvest(e.target.value)}
        ></input>
      </p>
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={annualInvest}
          onChange={e => setAnnualInvest(e.target.value)}
        ></input>
      </p>
      <p>
        <label>Expected Return</label>
        <input
          type="number"
          required
          value={expectedReturn}
          onChange={e => setExpectedReturn(e.target.value)}
        ></input>
      </p>
      <p>
        <label>Duration</label>
        <input
          type="number"
          required
          value={duration}
          onChange={e => setDuration(e.target.value)}
        ></input>
      </p>
    </section>
  );
}
