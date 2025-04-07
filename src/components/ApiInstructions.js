import React, { useState } from 'react';

function ApiInstructions({ apiKey, onSaveApiKey }) {
  const [inputKey, setInputKey] = useState(apiKey || '');

  return (
    <div className="api-instructions">
      <h2>API Key Required</h2>
      <p>
        This currency converter uses ExchangeRate-API. You need a free API key to use this app.
      </p>
      <ol>
        <li>Visit <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">https://www.exchangerate-api.com</a></li>
        <li>Sign up for a free account</li>
        <li>Copy your API key</li>
        <li>Paste it in the input field below</li>
      </ol>
      
      <div className="form-group api-key-input">
        <label htmlFor="apiKey">Your API Key: <span className="hint">(Paste your API key here)</span></label>
        <input
          type="text"
          id="apiKey"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          placeholder="41d9759109502713176affb5"
          className="api-key-field"
        />
        <p className="hint">After getting your key from ExchangeRate-API, paste it in the field above and click the button below</p>
      </div>
      
      <button onClick={() => onSaveApiKey(inputKey)}>
        Save API Key & Continue
      </button>
    </div>
  );
}

export default ApiInstructions;
