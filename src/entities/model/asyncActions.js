import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchQuestionsApi, submitAnswersApi} from "./api";

export const fetchQuestions = createAsyncThunk('questions-list', async () => {
  const response = await fetchQuestionsApi()

  const data = await response.json()

  return data
})

export const submitAnswers = createAsyncThunk('qna-submit', async (dto) => {
  const response = await submitAnswersApi(dto)

  return response.json()
})
