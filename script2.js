const express = require('express')
const server = express()
const forms = require('./src/data/forms.json')
//const respostaFinal = require('script.js')
;('use strict')

const fs = require('fs')

let student = {
  name: 'Mike',
  age: 23,
  gender: 'Male3',
  department: 'English',
  car: 'Honda'
}

let data = JSON.stringify(student)
fs.writeFileSync('./src/data/forms.json', data)
console.log(data)

server.get('/forms', (req, res) => {
  return res.json(forms)
})

server.listen(3000, () => {
  console.log('Servidor está funcionando...')
})

//http://localhost:3000/forms
//node script2.js
