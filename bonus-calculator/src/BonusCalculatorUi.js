import React, { useState } from 'react';
import './App.css';

function BonusCalculatorUi() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>{submittedText}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default BonusCalculatorUi;

