import express from 'express'
import bodyParser from 'body-parser'

import homeRoutes from './routes/home'
import confirmationRoutes from './routes/confirmation'

const app = express()
app.use(bodyParser.json())

app.use(homeRoutes)
app.use(confirmationRoutes)

app.listen(8080, () => {
  console.log('Listening on :8080')
})
