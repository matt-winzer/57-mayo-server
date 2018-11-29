const express = require('express')
const router = express.Router()

const knex = require('../db/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('../db/authQueries')

router.post('/login', (req, res, next) => {
  const { email, password} = req.body

  if (!email.length || !password.length) res.status(400).json({ error: 'Email or password are blank. Please complete the form before submitting.' })
  else {
  queries.getUserByEmail(email)
    .then(user => {
      if (!user.length) res.json({ error: 'User not found. Please make sure your email address is correct.' })
      else {
        const hashedPassword = user[0].password
        const match = bcrypt.compareSync(password, hashedPassword)

        if (!match) res.json({ error: 'Password does not match. Please try again.' })
        else {
          const payload = { ...user[0] }
          delete payload.password
          const token = jwt.sign(payload, process.env.TOKEN_SECRET)

          res.json({ token })
        }
      }
    })
    .catch(next)
  }
})

router.post('/signup', (req, res, next) => {
  const { email, password } = req.body
  
  if (!email.length || !password.length) res.status(400).json({ error: 'Email or password are blank. Please complete the form before submitting.' })
  else {
  queries.getUserByEmail(email)
    .then(user => {
      if (user.length) res.status(400).json({ error: 'User already exists. Please login or signup with a unique email.' })
      else {
        const saltRounds = 12
        const hash = bcrypt.hashSync(password, saltRounds)
        req.body.password = hash

        return queries.createUser(req.body.email, req.body.password)  
          .then(newUser => {
            const payload = newUser[0]
            delete payload.password
            const token = jwt.sign(payload, process.env.TOKEN_SECRET)

            res.status(201).json({ token })
          })
      }
    })
    .catch(next)
  }
})

module.exports = router