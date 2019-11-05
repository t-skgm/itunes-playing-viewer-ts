/* eslint-disable import/first */
if (process.env.NODE_ENV === 'production') {
  const moduleAlias = require('module-alias')
  moduleAlias.addAlias('@', __dirname + '/../')
}

import express from 'express'
import path from 'path'
import * as bodyParser from 'body-parser'
import { apiRoute } from './routes'

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

const noCors: express.Handler = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}

const main = async () => {
  const app = express()

  app.use(noCors)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/static', express.static(path.join(__dirname, '..', '..', '/static')))
  app.use('/', apiRoute)

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
}

main().catch(console.error)
