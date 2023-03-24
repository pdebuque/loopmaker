import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import type {Loop} from '../../model'

type InitialState = {
  loop: Loop
}

const initialState: InitialState = {
  loop: []
}

const loopSlice = createSlice({
  name: 'loop',
  initialState,
  reducers: {

  }
})

export const {} = loopSlice.actions;

export default loopSlice.reducer