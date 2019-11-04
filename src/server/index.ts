import express from 'express'
import * as bodyParser from 'body-parser'
import { apiRoute } from './routes'
// require('module-alias/register')

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

const main = async () => {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/api', apiRoute)

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
}

main().catch(console.error)
