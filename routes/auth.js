const express = require('express')
const router = express.Router()

const knex = require('../db/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/login', (req, res, next) => {
  console.log('hello from login')
  const email = req.body.email
  const password = req.body.password

  knex('users')
    .where('email', email)
    .then(user => {
      if (!user.length) {
        res.json({ error: 'User not found. Please make sure your email address is correct.' })
      }
      else {
        const hashedPassword = user[0].password
        const match = bcrypt.compareSync(password, hashedPassword)

        if (!match) {
          res.json({ error: 'Password does not match. Please try again.' })
        }
        else {
          const payload = { ...user[0] }
          delete payload.password

          const token = jwt.sign(payload, process.env.TOKEN_SECRET)
          res.json({ token })
        }
      }
    })
  
})

module.exports = router