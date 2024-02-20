import { configureStore } from '@reduxjs/toolkit'
import SliderReducer from "../../entities/model/slice";

export const store = configureStore({
  reducer: {
    slider: SliderReducer
  },
})
