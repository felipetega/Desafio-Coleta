const express = require('express')
const server = express()
const forms = require('./src/data/forms.json')

server.get('/forms', (req, res) => {
  return res.json(forms)
})

server.listen(3000, () => {
  console.log('Servidor está funcionando...')
})

//http://localhost:3000/forms
//node script2.js
