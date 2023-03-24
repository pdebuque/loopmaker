import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import type { LoopT } from '../../model';
import { emptyLoop } from '../../model';

type InitialState = {
  loop: LoopT
}

const initialState: InitialState = {
  loop: emptyLoop
}

const loopSlice = createSlice({
  name: 'loop',
  initialState,
  reducers: {
    //todo: set instrument
    setInstrument(state,action:PayloadAction<string>) {
      const flatLoop = state.loop.flat(3);
      for (let note of flatLoop) {
        note.instrument = action.payload;
      }
    },  
    //todo: set a note active
    toggleNoteActive(state, action: PayloadAction<number>) {
      const flatLoop = state.loop.flat(3);
      const toggleTarget = flatLoop.filter(note=>note.id === action.payload)[0];
      toggleTarget.active = !toggleTarget.active
    }
  }
})

export const {setInstrument, toggleNoteActive} = loopSlice.actions;

export default loopSlice.reducer