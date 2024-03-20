import React, { useState } from 'react';
import './App.css';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label>Day:</label>
        <input type="number" value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Month:</label>
        <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Year:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <button className="calculate-btn" onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p className="age-result">Your age is: {age}</p>}
    </div>
  );
}

export default App;
