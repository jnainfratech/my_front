import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Slice/userSlice'
import transactionReducer from './Slice/transactionSlice'
import structureReducer from "./Slice/strucureSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    strcture:structureReducer,
    trans : transactionReducer
  },
})