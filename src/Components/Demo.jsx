import React, { useState } from 'react';
import usePersistentState from '../hooks/usePersistentState.js';
import { clearData } from '../services/storageService.js';

function Demo() {
  // Core logic entry point: teammate can build environmental logic here.
  const [savedValue, setSavedValue] = usePersistentState('');
  const [inputValue, setInputValue] = useState(savedValue || '');
  const [status, setStatus] = useState('');

  const handleSave = (event) => {
    event.preventDefault();
    setSavedValue(inputValue);
    setStatus('Saved to simulated backend.');
  };

  const handleClear = () => {
    clearData();
    setSavedValue('');
    setInputValue('');
    setStatus('Cleared saved data.');
  };

  return (
    <section className="card">
      <h2>Interactive Demo</h2>
      <p className="subtitle">
        Core environmental logic goes here later.
      </p>
      <form className="demo-form" onSubmit={handleSave}>
        <label htmlFor="demo-input">Prototype input</label>
        <input
          id="demo-input"
          type="text"
          placeholder="Enter a value to persist"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div className="button-row">
          <button type="submit">Save</button>
          <button type="button" className="ghost" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
      <div className="status">
        <strong>Last saved:</strong> {savedValue || 'Nothing yet'}
      </div>
      {status && <div className="status note">{status}</div>}
      <p className="note">
        This simulates persistence for judging. Replace with real backend later.
      </p>
    </section>
  );
}

export default Demo;
