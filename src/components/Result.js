import React from 'react';

function Result({ amount, convertedAmount, fromCurrency, toCurrency, exchangeRate }) {
  return (
    <div className="result">
      <p>
        {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
      </p>
      <p className="rate">
        1 {fromCurrency} = {exchangeRate} {toCurrency}
      </p>
    </div>
  );
}

export default Result;
