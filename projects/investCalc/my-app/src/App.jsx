//import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [initialInvest, setInitialInvest] = useState(10000);
  const [annualInvest, setAnnualInvest] = useState(500);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  return (
    <>
      <InvestmentForm
        initialInvest={initialInvest}
        annualInvest={annualInvest}
        expectedReturn={expectedReturn}
        duration={duration}
        setInitialInvest={setInitialInvest}
        setAnnualInvest={setAnnualInvest}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
      ></InvestmentForm>

      <Result
        initialInvest={initialInvest}
        annualInvest={annualInvest}
        expectedReturn={expectedReturn}
        duration={duration}
      ></Result>
    </>
  );
}

export default App;
