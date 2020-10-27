const express = require('express')

const router = new express.Router()

router.get('/currencies', (req, res) => {
    res.json(
        [
            'Ethereum',
            'bitcoin',
            'litecoin',
            'xrp',
            'chainlink',
            'cardano',
            'dot',
            'bat',
        ]
    )
  })

module.exports = router