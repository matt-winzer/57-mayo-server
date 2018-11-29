const express = require('express')
const router = express.Router()

const knex = require('../db/connection')
const jwt = require('jsonwebtoken')

router.get('/:id/reviews', (req, res, next) => {
  if (!req.headers.authorization) res.status(401).json({ error: 'Unauthorized. Please login or signup for an account.' })
  else {
    const id = req.params.id
    const token = req.headers.authorization.slice(7)
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    
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
    else res.status(401).json({ error: 'Unauthorized. Please login or signup for an account'})
  }
})

module.exports = router