import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(err => console.error(err));
  }, [currency]);

  return rates;
}

export default useCurrencyInfo;
