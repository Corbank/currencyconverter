import React from 'react';

function CurrencyForm({ 
  currencies, 
  fromCurrency, 
  toCurrency, 
  amount, 
  setFromCurrency, 
  setToCurrency, 
  setAmount, 
  onConvert, 
  isLoading 
}) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="fromCurrency">From</label>
        <select
          id="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="toCurrency">To</label>
        <select
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
      <button onClick={onConvert} disabled={isLoading}>
        {isLoading ? 'Converting...' : 'Convert'}
      </button>
    </div>
  );
}

export default CurrencyForm;
