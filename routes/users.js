const express = require('express')
const router = express.Router()

const knex = require('../db/connection')
const jwt = require('jsonwebtoken')
const util = require('util')
const verifyToken = util.promisify(jwt.verify)

router.get('/:id/reviews', (req, res, next) => {
  if (!req.headers.authorization) res.status(401).json({ error: 'Unauthorized. Please login or signup for an account.' })
  else {
    const id = req.params.id
    const token = req.headers.authorization.slice(7)

    verifyToken(token, process.env.TOKEN_SECRET)
      .then(decoded => {
        if (decoded.id == id) {
          knex('purchase')
            .select(
              'review.id',
              'review.created_at',
              'review.updated_at',
              'review.market',
              'review.state',
              'review.content',
            )
            .innerJoin('review', 'purchase.review_id', 'review.id')
            .where('purchase.users_id', id)
            .then(reviews => {
              res.json({ reviews })
            })
        }
        else res.status(401).json({ error: 'Unauthorized. Please login or signup for an account' })
      })
      .catch(error => {
        if (error.name === 'TokenExpiredError') res.status(401).json({ error: 'Token expired. Please login again.' })
        else next(error)
      })
  }
})

module.exports = router