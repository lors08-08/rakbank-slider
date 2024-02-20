import {http, HttpResponse} from 'msw'

export const handlers = [
  http.post('/api/qna/submit', async ({request}) => {
    const requestBody = await request.json()

    console.log(requestBody)

    return HttpResponse.json({status: "OK"})
  }),
  http.get('/api/questions-list', () => {
    return HttpResponse.json([
        {
          title: 'How was your overall month?',
          options: [
            {
              icon: 'like',
              label: 'like'
            },
            {
              icon: 'dislike',
              label: 'dislike'
            },
            {
              icon: 'thinking',
              label: 'thinking'
            }
          ]
        },
        {
          title: 'How was your overall week?',
          options: [
            {
              icon: 'like',
              label: 'like'
            },
            {
              icon: 'dislike',
              label: 'dislike'
            },
            {
              icon: 'thinking',
              label: 'thinking'
            }
          ]
        },
        {
          title: 'How was your overall life?',
          options: [
            {
              icon: 'like',
              label: 'like'
            },
            {
              icon: 'dislike',
              label: 'dislike'
            },
            {
              icon: 'thinking',
              label: 'thinking'
            }
          ]
        }
      ]
    )
  })
]
