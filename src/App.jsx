import React, { useState } from "react";
import InputComponent from "./components/InputComponent";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  let [currencyFrom, setCurrencyFrom] = useState("inr");
  let [currencyTo, setCurrencyTo] = useState("usd");

  let [inputAmountFrom, setinputAmountFrom] = useState(0);
  let [inputAmountTo, setinputAmountTo] = useState(0);

  let [covertedAmount, setConvertedAmount] = useState(0);

  let currencyInfoFrom = useCurrencyInfo(currencyFrom);
  let currencyInfoTo = useCurrencyInfo(currencyTo);

  let currencyOptionsFrom = Object.keys(currencyInfoFrom);
  let currencyOptionsTo = Object.keys(currencyInfoTo);

  let swap = () => {
    let temp1 = inputAmountFrom;
    inputAmountFrom = inputAmountTo;
    inputAmountTo = temp1;
    setinputAmountFrom(inputAmountFrom);
    setinputAmountTo(inputAmountTo);

    let temp2 = currencyFrom;
    currencyFrom = currencyTo;
    currencyTo = temp2;
    setCurrencyFrom(currencyFrom);
    setCurrencyTo(currencyTo);
    // setConvertedAmount(amount)
  };

  let convert = () => {
    let amountConverted = inputAmountFrom * currencyInfoFrom[currencyTo];
    setinputAmountTo(amountConverted);

    setConvertedAmount(amountConverted);
  };

  return (
    <div className='w-full h-screen  bg-blue-400 text-white flex items-center justify-center px-8  bg-[url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D")] bg-no-repeat bg-cover'>
      <div
        className="w-fit h-fit rounded-md p-8 flex items-center justify-center flex-col gap-2 shadow-sm shadow-black"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.300)" }}
      >
        <InputComponent
          inputDisable={false}
          inputLabel="From"
          inputAmount={inputAmountFrom}
          setinputAmount={setinputAmountFrom}
          currency={currencyFrom}
          setCurrency={setCurrencyFrom}
          currencyOptions={currencyOptionsFrom}
        />

        <button
          className="bg-blue-800 px-10 py-4 rounded-md shadow-inner shadow-white  hover:bg-blue-600"
          onClick={() => swap()}
        >
          Swap
        </button>

        <InputComponent
          inputLabel="To"
          inputAmount={inputAmountTo}
          currency={currencyTo}
          setCurrency={setCurrencyTo}
          currencyOptions={currencyOptionsTo}
        />

        <button
          className="bg-blue-800 w-full px-10 py-4 rounded-md shadow-inner shadow-white hover:bg-blue-600"
          onClick={() => convert()}
        >
          convert
        </button>
      </div>
    </div>
  );
}

export default App;
