import React from 'react';
import LoopControl from './components/LoopControl';
import LoopDisplay from './components/LoopDisplay';
import './App.css'

// this app will allow users to create and edit a four-measure loop
// 4/4 with sixteenth note granularity
// to begin, only one instrument

function App() {
  return (
    <div className="App">
      <LoopDisplay />
      <LoopControl />
    </div>
  );
}

export default App;
