import React, { useEffect } from 'react';
import './App.css'

// libraries
import { useAppDispatch, useAppSelector } from './hooks';
import * as Tone from 'tone';

// components
import LoopControl from './components/LoopControl';
import LoopDisplay from './components/LoopDisplay';

// internal
import { createPart } from './modules/createPart';


// this app will allow users to create and edit a four-measure loop
// 4/4 with sixteenth note granularity
// to begin, only one instrument

function App() {

  const { loop } = useAppSelector(state => state.loop);
  const loopPart = createPart(loop);


  // make drumbeat
  const kick = new Tone.MembraneSynth().toDestination();
  const tick = new Tone.MonoSynth().toDestination();

  Tone.Transport.bpm.value = 60;
  Tone.Transport.loop = true;
  Tone.Transport.loopEnd = '4:0:0'

  const mtnmPart = [['0:0:0', 'g5'], ['0:1:0', 'g4'], ['0:2:0', 'g4'], ['0:3:0', 'g4'],
  ['1:0:0', 'd5'], ['1:1:0', 'g4'], ['1:2:0', 'g4'], ['1:3:0', 'g4'],
  ['2:0:0', 'd5'], ['2:1:0', 'g4'], ['2:2:0', 'g4'], ['2:3:0', 'g4'],
  ['3:0:0', 'd5'], ['3:1:0', 'g4'], ['3:2:0', 'g4'], ['3:3:0', 'g4'],
  ]

  let now = Tone.now();

  let beat;

  beat = new Tone.Part(((time, note) => {
    console.log('part begin', time, loopPart)
    kick.triggerAttackRelease(note, '16n', time);
  }), loopPart).start(0)

  beat.loop = true;
  beat.loopEnd = '4:0:0'

  const metronome = new Tone.Part(((time, note) => {
    tick.triggerAttackRelease(note, '16n', time);
  }), mtnmPart).start(0);

  metronome.loop = true;
  metronome.loopEnd = '4:0:0'


  // whenever the loop changes, restart (?)
  useEffect(() => {
    beat = new Tone.Part(((time, note) => {
      console.log('part begin', time, loopPart)
      kick.triggerAttackRelease(note, '16n', time);
    }), loopPart).start(0)
    Tone.Transport.start()
  }, [loop])


  return (
    <div className="App">
      {JSON.stringify(loopPart)}
      <LoopDisplay loop={loop} />
      <LoopControl />
    </div>
  );
}

export default App;
