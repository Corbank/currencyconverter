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
        <li>Paste it below</li>
      </ol>
      
      <div className="form-group">
        <label htmlFor="apiKey">Your API Key:</label>
        <input
          type="text"
          id="apiKey"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          placeholder="Enter your API key"
        />
      </div>
      
      <button onClick={() => onSaveApiKey(inputKey)}>
        Save API Key & Continue
      </button>
    </div>
  );
}

export default ApiInstructions;
