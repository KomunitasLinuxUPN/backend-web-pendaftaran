import express from 'express'

import confirmationRoutes from './routes/confirmation'

const app = express()

app.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

app.use(confirmationRoutes)

export default app
