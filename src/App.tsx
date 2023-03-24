import React from 'react';
import './App.css'

// libraries
import { useAppDispatch, useAppSelector } from './hooks';

// components
import LoopControl from './components/LoopControl';
import LoopDisplay from './components/LoopDisplay';

// internal

// this app will allow users to create and edit a four-measure loop
// 4/4 with sixteenth note granularity
// to begin, only one instrument

function App() {

  const { loop } = useAppSelector(state => state.loop);

  return (
    <div className="App">
      {/* {JSON.stringify(loop)} */}
      <LoopDisplay loop={loop} />
      <LoopControl />
    </div>
  );
}

export default App;
