require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const port = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'Server working!'})
})


app.listen(port)
  .on('listening', () => console.log(`Listening on port: ${port}`))