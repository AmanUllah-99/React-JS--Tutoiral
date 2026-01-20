import { useState } from "react";
import InputBox from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { AiOutlineSwap } from "react-icons/ai";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  //   const [fov ,setFor] = useState('pkr')

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  //////Backgroundimage///
  const bgImage = "https://images.pexels.com/photos/18804129/pexels-photo-18804129.jpeg";

  return (

    <div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg- center bg-blend-screen p-5 shadow-2xl rounded-md  bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >



      <div className="w-full max-w-md bg-amber-50 bg-no-repeat   p-6 rounded-lg shadow-lg ">
        <h1 className="text-xl font-bold mb-4">Currency Converter</h1>

        <InputBox
          label="From"
          amount={amount}
          selectCurrency={from}
          currencyOptions={options}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
        />

        <div className="flex justify-center items-center  ">
          <button
            type="button"
            onClick={swap}
            className=" max-w-fit flex  justify-center  items-center  text-black font-extrabold  py-2 rounded-full mb-3 hover:bg-blue-600  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >

            <AiOutlineSwap className="transform rotate-90 font-extrabold  justify-center" size={29} />

          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          selectCurrency={to}
          currencyOptions={options}
          onCurrencyChange={setTo}
          amountDisable
        />

        <button
          onClick={convert}
          className="w-full bg-blue-400 border border-gray-500 text-white py-2 mt-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-2xl"
        >
          Convert
        </button>

      </div>
    </div>
  );
}


export default App;
