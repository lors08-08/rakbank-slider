
export function fetchQuestionsApi() {
  return fetch('/api/questions-list')
}

export function submitAnswersApi(dto) {
  return fetch('/api/qna/submit', {method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(dto)
  })
}
