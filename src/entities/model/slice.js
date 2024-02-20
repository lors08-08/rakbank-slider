import {createSlice} from "@reduxjs/toolkit";
import {fetchQuestions} from "./asyncActions";

const initialState = {
  isFetching: false,
  questions: [],
  answered: {},
  }

export const slideSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const {currentStep, title, option} = action.payload

      state.answered[currentStep] = {title, option}
    }
  },
  extraReducers:(builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.isFetching = true
    });
    builder.addCase(fetchQuestions.fulfilled,(state, action) => {
      state.questions = action.payload

      state.isFetching = false
    });
    builder.addCase(fetchQuestions.rejected, (state) => {
      state.isFetching = false
    })
  }
})

export const {addAnswer} = slideSlice.actions

export default slideSlice.reducer
