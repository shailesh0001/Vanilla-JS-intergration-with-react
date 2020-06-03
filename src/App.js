import React from 'react';
import './App.css';
import Guage from './gauge_chart'

function App() {
  return (
    <div className="App">
    <Guage value={400}/>
    </div>
  );
}

export default App;
