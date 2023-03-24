import React, { useState, useRef } from 'react';

interface Note {
  id: number;
  active: boolean;
}

const LoopControl: React.FC = () => {
  const [beat, setBeat] = useState<Note[][]>([[], []]);
  const [playing, setPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const toggleNote = (measureIndex: number, noteIndex: number) => {
    const updatedBeat = [...beat];
    updatedBeat[measureIndex][noteIndex].active = !updatedBeat[measureIndex][noteIndex].active;
    setBeat(updatedBeat);
  };

  const playBeat = () => {
    intervalRef.current = setInterval(() => {
      setBeat((prevBeat) => [
        prevBeat[1],
        prevBeat[0].map((note, index) => ({
          id: note.id,
          active: prevBeat[1][index].active,
        })),
      ]);
    }, 500);
    setPlaying(true);
  };

  const stopBeat = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setPlaying(false);
  };

  const resetBeat = () => {
    stopBeat();
    setBeat([[], []]);
  };

  const addNote = () => {
    const newNoteId = beat[0].length + 1;
    setBeat((prevBeat) => [
      [...prevBeat[0], { id: newNoteId, active: false }],
      [...prevBeat[1], { id: newNoteId, active: false }],
    ]);
  };

  const renderBeat = () => {
    return beat[0].map((note, index) => (
      <div key={note.id}>
        <div className={`note ${note.active ? 'active' : ''}`} onClick={() => toggleNote(0, index)}></div>
        <div className={`note ${beat[1][index].active ? 'active' : ''}`} onClick={() => toggleNote(1, index)}></div>
      </div>
    ));
  };

  return (
    <div className="LoopControl">
      <div className="beat">{renderBeat()}</div>
      {JSON.stringify(beat)}
      <div className="controls">
        <button disabled={playing} onClick={playBeat}>
          Play
        </button>
        <button disabled={!playing} onClick={stopBeat}>
          Stop
        </button>
        <button onClick={resetBeat}>Reset</button>
        <button onClick={addNote}>Add Note</button>
      </div>
    </div>
  );
};

export default LoopControl;