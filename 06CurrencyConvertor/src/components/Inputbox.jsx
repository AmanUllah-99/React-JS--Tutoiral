import React, { useId } from "react";


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
}) {
    const inputId = useId(); 

    return (
        <div className="bg-transparent p-3 rounded-lg text-sm flex gap-4 mb-3 font-bold">
            <div className="w-1/2">
                <label htmlFor={inputId} className="text-gray-500 block mb-1">
                    {label}
                </label>
                <input
                    id={inputId}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    className="w-full py-1 px-2 outline-none border rounded"
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            <div className="w-1/2">
                <label className="text-gray-500 block mb-1 font-bold">Currency</label>
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="w-full py-1 px-2 border rounded outline-none"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
 

export default InputBox;
