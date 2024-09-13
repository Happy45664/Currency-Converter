import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/f647546dc8672f9ce276b5af/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates || {}))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
