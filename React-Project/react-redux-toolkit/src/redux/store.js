import { configureStore } from '@reduxjs/toolkit'
import {counterReducers} from '../features/counterSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducers
  },
})