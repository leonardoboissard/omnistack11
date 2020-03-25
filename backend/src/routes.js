const express = require('express')
const crypto = require('crypto')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({
        status: 'ok'
    })
})

routes.post('/ongs', (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body
    const id = crypto.randomBytes(4).toString('HEX')

    console.log(name)
    return res.json()
})

module.exports = routes