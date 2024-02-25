import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedamount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedamount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedamount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center">Currency Converter</h1>
      </div>
    </>
  );
}

export default App;
