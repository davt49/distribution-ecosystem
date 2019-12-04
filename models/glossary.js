const mongoose = require('mongoose')

const glossarySchema = new mongoose.Schema({
  name: {type: String, required: true},
  info: {type: String, required: true}
})

module.exports =  mongoose.model('Glossary', glossarySchema)
