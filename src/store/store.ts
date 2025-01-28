import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice'
import listReducer from './slices/listSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    list: listReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch