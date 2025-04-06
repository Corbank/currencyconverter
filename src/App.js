import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyForm from './components/CurrencyForm';
import Result from './components/Result';
import ApiInstructions from './components/ApiInstructions';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');
  
  useEffect(() => {
    if (apiKey) {
      fetchCurrencies();
    }
  }, [apiKey]);

  const fetchCurrencies = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      );
      
      if (response.data.result === 'success') {
        const currencyCodes = Object.keys(response.data.conversion_rates);
        setCurrencies(currencyCodes);
      } else {
        throw new Error('Failed to fetch currencies');
      }
    } catch (error) {
      setError('Failed to fetch currencies. Please check your API key.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleConvert = async () => {
    if (!apiKey) {
      setError('Please enter an API key');
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
      );
      
      if (response.data.result === 'success') {
        const rate = response.data.conversion_rates[toCurrency];
        setExchangeRate(rate);
        setConvertedAmount(amount * rate);
      } else {
        throw new Error('Failed to fetch exchange rate');
      }
    } catch (error) {
      setError('Failed to convert currency. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSaveApiKey = (key) => {
    localStorage.setItem('apiKey', key);
    setApiKey(key);
    fetchCurrencies();
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      
      {!apiKey && (
        <ApiInstructions 
          apiKey={apiKey} 
          onSaveApiKey={handleSaveApiKey} 
        />
      )}
      
      {apiKey && (
        <>
          <CurrencyForm 
            currencies={currencies}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
            setFromCurrency={setFromCurrency}
            setToCurrency={setToCurrency}
            setAmount={setAmount}
            onConvert={handleConvert}
            isLoading={isLoading}
          />
          
          {error && <div className="error">{error}</div>}
          
          {convertedAmount !== null && (
            <Result 
              amount={amount}
              convertedAmount={convertedAmount}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              exchangeRate={exchangeRate}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
