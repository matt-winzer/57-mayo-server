require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 3000
const app = express()

// ROUTE FILES
const auth = require('./routes/auth')
const users = require('./routes/users')

// MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
  res.json({ message: 'Server working!'})
})

app.use('/api/auth', auth)
app.use('/api/users', users)

// ERROR HANDLING
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}


app.listen(port)
  .on('listening', () => console.log(`Listening on port: ${port}`))