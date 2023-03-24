import { configureStore } from '@reduxjs/toolkit';
import loopReducer from './reducers/loop.reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    loop: loopReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch